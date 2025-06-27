import { useState } from "react";
import userIcon from "../../../assets/profile/profile-2.png";
const HiredSection = ({ hiringList }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#05174b]">
          Hiring Candidates
        </h3>
        <button
          className="text-[#38a3a5] hover:underline font-medium text-sm"
          onClick={() => setModalOpen(true)}
        >
          View All
        </button>
      </div>

      {/* Preview List */}
      <div className="space-y-4">
        {hiringList?.slice(0, 4).map((candidate, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 border border-gray-200 rounded-lg"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden shrink-0">
                <img
                  src={userIcon}
                  alt={candidate.candidate_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-semibold truncate">
                  {candidate.candidate_name}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  {candidate.position}
                </p>
                <p className="text-xs text-gray-500">
                  Hired by:{" "}
                  <span className="font-medium text-blue-600">
                    {candidate.hiredBy}
                  </span>
                </p>
              </div>
            </div>

            <button
              className="shrink-0 border bg-[#38a3a5] text-white text-xs px-3 py-1 rounded-md hover:bg-[#2c8a8b] transition"
              onClick={() => setSelectedCandidate(candidate)}
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {/* Full Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">All Hiring Candidates</h2>
              <button
                className="text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => setModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="p-3 border border-gray-300">Profile</th>
                    <th className="p-3 border border-gray-300">Name</th>
                    <th className="p-3 border border-gray-300">Position</th>
                    <th className="p-3 border border-gray-300">Hired By</th>
                  </tr>
                </thead>
                <tbody>
                  {hiringList?.map((candidate, idx) => (
                    <tr
                      key={idx}
                      className="border border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="p-3 border border-gray-300">
                        <img
                          src={userIcon}
                          alt={candidate.candidate_name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </td>
                      <td className="p-3 border border-gray-300">
                        {candidate.candidate_name}
                      </td>
                      <td className="p-3 border border-gray-300">
                        {candidate.position}
                      </td>
                      <td className="p-3 border border-gray-300">
                        {candidate.hiredBy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Small Details Modal */}
      {selectedCandidate && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4"
          onClick={() => setSelectedCandidate(null)}
        >
          <div
            className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm text-sm text-[#05174b]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold">Candidate Details</h4>
              <button
                className="text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => setSelectedCandidate(null)}
              >
                ✕
              </button>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={userIcon}
                  alt={selectedCandidate.candidate_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {selectedCandidate.candidate_name}
              </p>
              <p>
                <span className="font-semibold">Position:</span>{" "}
                {selectedCandidate.position}
              </p>
              <p>
                <span className="font-semibold">Hired By:</span>{" "}
                {selectedCandidate.hiredBy}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HiredSection;