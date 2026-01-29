"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface WaitlistEntry {
  _id: string;
  userType: string;
  email: string;
  phone?: string;
  location?: string;
  fullName?: string;
  businessName?: string;
  category?: string[];
  outlets?: string;
  primaryContact?: string;
  excitedFeatures?: string[];
  submittedAt: string;
}

interface Stats {
  total: number;
  byType: {
    consumer?: number;
    retailer?: number;
    distributor?: number;
    manufacturer?: number;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adminName, setAdminName] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem("adminToken");
    const adminInfo = localStorage.getItem("adminInfo");

    if (!token) {
      router.push("/admin/login");
      return;
    }

    if (adminInfo) {
      const admin = JSON.parse(adminInfo);
      setAdminName(admin.name);
    }

    fetchWaitlist();
  }, [selectedType, currentPage, searchTerm]);

  const fetchWaitlist = async () => {
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("adminToken");
      const queryParams = new URLSearchParams({
        userType: selectedType,
        page: currentPage.toString(),
        limit: "20",
        ...(searchTerm && { search: searchTerm }),
      });

      const response = await fetch(
        `https://reeach.onrender.com/api/admin/waitlist?${queryParams}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminInfo");
          router.push("/admin/login");
          return;
        }
        throw new Error("Failed to fetch waitlist");
      }

      const data = await response.json();
      setEntries(data.data);
      setStats({ total: data.pagination.total, byType: data.stats });
      setTotalPages(data.pagination.pages);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    router.push("/admin/login");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch(
        `https://reeach.onrender.com/api/admin/waitlist/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        fetchWaitlist();
      }
    } catch (err) {
      alert("Failed to delete entry");
    }
  };

  const handleExport = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await fetch("https://reeach.onrender.com/api/admin/export", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userType: selectedType }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `waitlist-${selectedType}-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      alert("Failed to export data");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-[#E64D0B]">
                Reeach Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">Welcome, {adminName}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-[4px] hover:bg-gray-300 transition-colors"
            >
              <p>Sign Out</p>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Total Entries</p>
              <p className="text-3xl font-bold text-[#E64D0B]">{stats.total}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Consumers</p>
              <p className="text-3xl font-bold text-blue-600">
                {stats.byType.consumer || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Retailers</p>
              <p className="text-3xl font-bold text-green-600">
                {stats.byType.retailer || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Distributors</p>
              <p className="text-3xl font-bold text-purple-600">
                {stats.byType.distributor || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-sm text-gray-600 mb-1">Manufacturers</p>
              <p className="text-3xl font-bold text-orange-600">
                {stats.byType.manufacturer || 0}
              </p>
            </div>
          </div>
        )}

        {/* Filters and Actions */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              >
                <option value="all">All Types</option>
                <option value="consumer">Consumers</option>
                <option value="retailer">Retailers</option>
                <option value="distributor">Distributors</option>
                <option value="manufacturer">Manufacturers</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by email, name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF5722]"
              />
            </div>

            <button
              onClick={handleExport}
              className="px-6 py-2 bg-[#E64D0B] text-white rounded-[4px] hover:bg-[#E64A19] transition-colors"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#E64D0B]"></div>
            <p className="mt-4 text-gray-600">Loading waitlist entries...</p>
          </div>
        )}

        {/* Waitlist Table */}
        {!loading && entries.length > 0 && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name/Business
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {entries.map((entry) => (
                    <tr key={entry._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            entry.userType === "consumer"
                              ? "bg-blue-100 text-blue-800"
                              : entry.userType === "retailer"
                              ? "bg-green-100 text-green-800"
                              : entry.userType === "distributor"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {entry.userType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.fullName || entry.businessName || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.phone || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {entry.location || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatDate(entry.submittedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <div className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-[4px] ${
                      currentPage === 1
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#E64D0B] text-white hover:bg-[#E64A19]"
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-[4px] ${
                      currentPage === totalPages
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#E64D0B] text-white hover:bg-[#E64A19]"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!loading && entries.length === 0 && (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600 text-lg">No waitlist entries found</p>
            <p className="text-gray-500 text-sm mt-2">
              {searchTerm
                ? "Try adjusting your search filters"
                : "Entries will appear here once users join the waitlist"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
