import { useMemo, useState } from "react";
import Modal from "./Modal";

const PostedJobs = ({ jobList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobList?.filter((job) => {
      const matchesSearch = job.role
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPosition = filterPosition
        ? job.position === filterPosition
        : true;
      return matchesSearch && matchesPosition;
    });
  }, [searchTerm, filterPosition]);

  const uniquePositions = [...new Set(jobList?.map((job) => job.position))];

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-[#05174b]">Posted Jobs</h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search roles..."
            className="w-full sm:w-48 border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-400 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full sm:w-44 border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-400 outline-none"
            value={filterPosition}
            onChange={(e) => setFilterPosition(e.target.value)}
          >
            <option value="">All Positions</option>
            {uniquePositions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
          <button
            onClick={() => setModalOpen(true)}
            className="text-[#38a3a5] hover:underline font-medium text-sm"
          >
            View All
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {filteredJobs?.length === 0 && (
          <p className="text-gray-500 text-sm">
            No jobs found matching your criteria.
          </p>
        )}
        {filteredJobs?.map((job) => (
          <div
            key={job.id}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow border border-gray-200 flex flex-col justify-between p-4"
          >
            <div className="flex justify-between items-center pb-1 mb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <img src={job.icon} alt={job.role} className="w-6 h-6" />
                <h4 className="text-sm font-semibold text-gray-800">
                  {job.role}
                </h4>
              </div>
              <button className="text-gray-500 hover:text-gray-700 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zM2 10a2 2 0 114 0 2 2 0 01-4 0zM10 10a2 2 0 114 0 2 2 0 01-4 0z" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col items-center gap-1 mb-3">
              <p className="text-gray-700 font-medium">{job.position}</p>
              <p className="text-3xl font-bold">{job.total_applicants}</p>
              <p className="text-sm text-gray-500">Total Applicants</p>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-200 text-sm text-gray-600">
              <p className="flex items-center text-green-600 font-semibold gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                {job.percentage_inc}%
                <span className="ml-1 text-gray-500 font-normal">
                  vs Last month
                </span>
              </p>
              <p>{job.last_updated}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-semibold mb-4">All Posted Jobs</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-left text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border border-gray-300">Role</th>
                <th className="p-3 border border-gray-300">Position</th>
                <th className="p-3 border border-gray-300">Total Applicants</th>
                <th className="p-3 border border-gray-300">% Increase</th>
                <th className="p-3 border border-gray-300">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs?.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-300 flex items-center gap-2">
                    <img src={job.icon} alt={job.role} className="w-5 h-5" />
                    {job.role}
                  </td>
                  <td className="p-3 border border-gray-300">{job.position}</td>
                  <td className="p-3 border border-gray-300">
                    {job.total_applicants}
                  </td>
                  <td className="p-3 border border-gray-300 text-green-600 font-semibold">
                    {job.percentage_inc}%
                  </td>
                  <td className="p-3 border border-gray-300">
                    {job.last_updated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </section>
  );
};
export default PostedJobs;