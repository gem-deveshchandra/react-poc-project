import { useState } from "react";

const formatDate = (date) => {
  date = new Date(date);
  const day = date?.getDate().toString().padStart(2, "0");
  const month = date?.toLocaleString("default", { month: "short" });
  return { day, month };
};


const UpcomingSection = ({ interviewList }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-[#05174b]">Upcomings</h3>
        <button
          className="text-[#38a3a5] hover:underline font-medium text-sm"
          onClick={() => setModalOpen(true)}
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {interviewList?.slice(0, 3)?.map((interview, idx) => {
          const { day, month } = formatDate(interview?.date);
          return (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 border border-gray-200 rounded-lg"
            >
              <div className="flex flex-col items-center justify-center bg-[#38a3a5] text-white font-bold rounded-md w-12 h-12 text-sm shrink-0">
                <span>{day}</span>
                <span>{month}</span>
              </div>

              <div className="flex-1 min-w-1">
                <p className="font-semibold truncate text-[#05174b]">
                  Interview with {interview.position}
                </p>
                <p className="text-sm text-gray-600 truncate">
                  Created by{" "}
                  <span className="font-semibold text-blue-600">
                    {interview.createdBy}
                  </span>
                </p>
                <p className="text-sm text-gray-500">{interview.duration}</p>
              </div>

              <button
                className="shrink-0 bg-[#38a3a5] text-white text-xs px-3 py-1 rounded-md hover:bg-[#2c8a8b] transition"
                onClick={() => setSelectedInterview(interview)}
              >
                Details
              </button>
            </div>
          );
        })}
      </div>

      {/* Full View All Modal */}
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
              <h2 className="text-xl font-semibold text-[#05174b]">
                All Upcoming Interviews
              </h2>
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
                    <th className="p-3 border border-gray-300">Date</th>
                    <th className="p-3 border border-gray-300">Position</th>
                    <th className="p-3 border border-gray-300">Created By</th>
                    <th className="p-3 border border-gray-300">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {interviewList?.map((interview, idx) => {
                    const { day, month } = formatDate(interview?.date);
                    return (
                      <tr
                        key={idx}
                        className="border hover:bg-gray-50 transition"
                      >
                        <td className="p-3 border border-gray-300">
                          {day} {month}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {interview.position}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {interview.createdBy}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {interview.duration}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

     
      {selectedInterview && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4"
          onClick={() => setSelectedInterview(null)}
        >
          <div
            className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm text-sm text-[#05174b]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold">Interview Details</h4>
              <button
                className="text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => setSelectedInterview(null)}
              >
                ✕
              </button>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Position:</span>{" "}
                {selectedInterview.position}
              </p>
              <p>
                <span className="font-semibold">Created By:</span>{" "}
                {selectedInterview.createdBy}
              </p>
              <p>
                <span className="font-semibold">Duration:</span>{" "}
                {selectedInterview.duration}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {formatDate(selectedInterview.date).day}{" "}
                {formatDate(selectedInterview.date).month}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingSection;