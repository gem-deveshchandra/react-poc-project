import { Button, Dialog, DialogContent, Input } from "@mui/material";
import { Heading } from "lucide-react";
import React, { useState, useMemo } from "react";

import userIcon from "../../assets/profile/profile-2.png";


const meetings = [
  {
    id: 1,
    candidate: {
      name: "Candidate A",
      designation: "Senior Python Developer",
      
    },
    date: "19th Feb 2024",
    time: "10:30 A.M",
    levels: [
      { level: "1st Level", status: "7/10", interviewer: "Interviewer 1" },
      { level: "2nd Level", status: "6/10", interviewer: "Interviewer 2" },
      { level: "3rd Level", status: "Waiting", interviewer: "Interviewer 3" },
    ],
    meetVia: "G-Meet",
    attendees: "Attendee 1",
  },
  {
    id: 2,
    candidate: {
      name: "Candidate B",
      designation: "Senior Python Developer",
      
    },
    date: "19th Feb 2024",
    time: "10:30 A.M",
    levels: [
      { level: "1st Level", status: "7/10", interviewer: "Interviewer 1" },
      { level: "2nd Level", status: "6/10", interviewer: "Interviewer 2" },
      { level: "3rd Level", status: "Waiting", interviewer: "Interviewer 3" },
    ],
    meetVia: "G-Meet",
    attendees: "Attendee 1",
  },
  {
    id: 3,
    candidate: {
      name: "Candidate C",
      designation: "Senior Python Developer",

    },
    date: "19th Feb 2024",
    time: "10:30 A.M",
    levels: [
      { level: "1st Level", status: "7/10", interviewer: "Interviewer 1" },
      { level: "2nd Level", status: "6/10", interviewer: "Interviewer 2" },
      { level: "3rd Level", status: "Waiting", interviewer: "Interviewer 3" },
    ],
    meetVia: "G-Meet",
    attendees: "Attendee 1",
  },
];

const TodaysMeetings = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-6">Today's Interview Meetings</h3>
      <div className="flex space-x-6 overflow-x-auto pb-3">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex-shrink-0 w-[400px] bg-white rounded-2xl shadow-lg border border-gray-300 flex"
          >
            <div className="flex flex-col items-center p-4 border-r border-gray-300 min-w-[140px]">
              <img
                src={userIcon}
                alt={meeting.candidate.name}
                className="w-20 h-20 rounded-md object-cover mb-3"
              />
              <p className="font-semibold text-center">
                {meeting.candidate.name}
              </p>
              <p className="text-sm text-gray-600 text-center">
                {meeting.candidate.designation}
              </p>
              <div className="flex border rounded-md overflow-hidden mt-4 w-full">
                <div className="flex flex-col items-center justify-center p-2 border-r border-gray-300 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs text-blue-600 font-medium">
                    {meeting.date}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs text-blue-600 font-medium">
                    {meeting.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-grow p-4 justify-between">
              <table className="w-full text-sm text-gray-700 mb-4 table-fixed border-collapse border border-gray-200 rounded-md">
                <tbody>
                  {meeting.levels.map(({ level, status, interviewer }, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <td className="w-1/2 px-2 py-1 font-medium">
                        {level}: {status}
                      </td>
                      <td className="w-1/2 px-2 py-1 text-right">
                        Interviewer: {interviewer}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-2 py-1 font-medium">
                      Meet via: {meeting.meetVia}
                    </td>
                    <td className="px-2 py-1 text-right">
                      Attendees: {meeting.attendees}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 border border-yellow-400 text-yellow-600 rounded-lg hover:bg-yellow-50 transition">
                  Reschedule
                </button>
                <button className="px-4 py-2 bg-[#38a3a5] text-white rounded-lg hover:bg-green-700 transition">
                  Join Meeting
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Python = "https://cdn-icons-png.flaticon.com/512/5968/5968350.png";
const Angular = "https://cdn-icons-png.flaticon.com/512/919/919825.png";
const Java = "https://cdn-icons-png.flaticon.com/512/226/226777.png";
const UIUX = "https://cdn-icons-png.flaticon.com/512/1828/1828899.png";

const jobList = [
  {
    id: 1,
    icon: Python,
    role: "Python Developer",
    position: "Senior Developer",
    total_applicants: 258,
    percentage_inc: 28,
    last_updated: "6 min ago",
  },
  {
    id: 2,
    icon: Angular,
    role: "Angular Developer",
    position: "Senior Developer",
    total_applicants: 180,
    percentage_inc: 15,
    last_updated: "10 min ago",
  },
  {
    id: 3,
    icon: Java,
    role: "Java Developer",
    position: "Senior Developer",
    total_applicants: 300,
    percentage_inc: 35,
    last_updated: "1 hour ago",
  },
  {
    id: 4,
    icon: UIUX,
    role: "UX|UI Designer",
    position: "Senior Developer",
    total_applicants: 120,
    percentage_inc: 12,
    last_updated: "30 min ago",
  },
];

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const PostedJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobList.filter((job) => {
      const matchesSearch = job.role
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPosition = filterPosition
        ? job.position === filterPosition
        : true;
      return matchesSearch && matchesPosition;
    });
  }, [searchTerm, filterPosition]);

  const uniquePositions = [...new Set(jobList.map((job) => job.position))];

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold">Posted Jobs</h3>

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
        {filteredJobs.length === 0 && (
          <p className="text-gray-500 text-sm">
            No jobs found matching your criteria.
          </p>
        )}
        {filteredJobs.map((job) => (
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
              {filteredJobs.map((job) => (
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

const candidateData = [
  {
    id: "#001",
    name: "Candidate A",
    position: "Designer",
    levels: [6, 7, 3, null],
    outOf: 10,
    status: "Active",
  },
  {
    id: "#002",
    name: "Candidate B",
    position: "Angular Developer",
    levels: [6, 5, 5, null],
    outOf: 10,
    status: "Hired",
  },
  {
    id: "#003",
    name: "Candidate C",
    position: "Android Developer",
    levels: [6, 5, 0, 0],
    outOf: 10,
    status: "Rejected",
  },
  {
    id: "#004",
    name: "Candidate D",
    position: "iOS Developer",
    levels: [5, 2, 8, null],
    outOf: 10,
    status: "Active",
  },
  {
    id: "#005",
    name: "Candidate E",
    position: "Junior Designer",
    levels: [6, 7, 3, null],
    outOf: 10,
    status: "Active",
  },
];

const statusColors = {
  hired: "bg-green-100 text-green-600",
  rejected: "bg-red-100 text-red-600",
  active: "bg-yellow-100 text-yellow-600",
};

function CandidateStatus() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const uniquePositions = useMemo(() => {
    return [...new Set(candidateData.map((c) => c.position))];
  }, []);

  const filteredCandidates = useMemo(() => {
    return candidateData.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.id.includes(searchTerm);
      const matchesPosition = filterPosition
        ? c.position === filterPosition
        : true;
      return matchesSearch && matchesPosition;
    });
  }, [searchTerm, filterPosition]);

  const renderStatus = (status) => {
    const colorClass =
      statusColors[status.toLowerCase()] || "bg-gray-100 text-gray-600";
    return (
      <span
        className={`${colorClass} px-3 py-1 rounded-full text-xs font-semibold select-none`}
      >
        {status}
      </span>
    );
  };

  const renderTable = (candidates) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-left text-sm min-w-[800px]">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border border-gray-300">ID</th>
            <th className="p-3 border border-gray-300">Name</th>
            <th className="p-3 border border-gray-300">Position</th>
            <th className="p-3 border border-gray-300 text-center">
              1st Level
            </th>
            <th className="p-3 border border-gray-300 text-center">
              2nd Level
            </th>
            <th className="p-3 border border-gray-300 text-center">
              3rd Level
            </th>
            <th className="p-3 border border-gray-300 text-center">
              4th Level
            </th>
            <th className="p-3 border border-gray-300 text-center">Total</th>
            <th className="p-3 border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length === 0 ? (
            <tr>
              <td colSpan="9" className="p-3 text-center text-gray-500">
                No candidates found.
              </td>
            </tr>
          ) : (
            candidates.map((c) => {
              const totalScore = c.levels.some((v) => v === null)
                ? "-"
                : `${c.levels.reduce((acc, v) => acc + (v || 0), 0)}/${
                    c.outOf * c.levels.length
                  }`;

              return (
                <tr
                  key={c.id}
                  className="border border-gray-300 hover:bg-gray-50"
                >
                  <td className="p-3 border border-gray-300">{c.id}</td>
                  <td className="p-3 border border-gray-300">{c.name}</td>
                  <td className="p-3 border border-gray-300">{c.position}</td>
                  {c.levels.map((val, idx) => (
                    <td
                      key={idx}
                      className="p-3 border border-gray-300 text-center font-medium"
                    >
                      {val === null
                        ? "..."
                        : val === 0
                        ? "0"
                        : `${val}/${c.outOf}`}
                    </td>
                  ))}
                  <td className="p-3 border border-gray-300 text-center font-semibold">
                    {totalScore}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {renderStatus(c.status)}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="bg-white rounded-2xl shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold">Candidate Status</h3>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            placeholder="Search candidates..."
            className="w-full sm:w-48 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full sm:w-44 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

      {renderTable(filteredCandidates)}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-semibold mb-4">All Candidates</h2>
        {renderTable(filteredCandidates)}
      </Modal>
    </section>
  );
}

const interviewList = [
  {
    date: new Date("2024-02-07T10:00:00"),
    position: "Designer",
    createdBy: "Interviewer A",
    duration: "10 A.M to 11 A.M",
  },
  {
    date: new Date("2024-02-07T10:00:00"),
    position: "PMO",
    createdBy: "Interviewer B",
    duration: "10 A.M to 11 A.M",
  },
  {
    date: new Date("2024-02-07T10:00:00"),
    position: "Net. Admin",
    createdBy: "Interviewer A",
    duration: "10 A.M to 11 A.M",
  },
];

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  return { day, month };
};

const UpcomingSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Upcomings</h3>
        <button
          className="text-[#38a3a5] hover:underline font-medium text-sm"
          onClick={() => setModalOpen(true)}
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {interviewList.slice(0, 3).map((interview, idx) => {
          const { day, month } = formatDate(interview.date);
          return (
            <div
              key={idx}
              className="flex items-center justify-between gap-4 p-3 border border-gray-200 rounded-lg"
            >
              <div className="flex flex-col items-center justify-center bg-[#38a3a5] text-white font-bold rounded-md w-12 h-12 text-sm shrink-0">
                <span>{day}</span>
                <span>{month}</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">
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

              <button className="shrink-0 bg-[#38a3a5] text-white text-xs px-3 py-1 rounded-md hover:bg-[#2c8a8b] transition">
                Details
              </button>
            </div>
          );
        })}
      </div>

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
              <h2 className="text-xl font-semibold">All Upcoming Interviews</h2>
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
                  {interviewList.map((interview, idx) => {
                    const { day, month } = formatDate(interview.date);
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
    </section>
  );
};

const hiringList = [
  {
    candidate_name: "Candidate A",
    position: "Senior Python Developer",
    hiredBy: "Interviewer X",
  },
  {
    candidate_name: "Candidate B",
    position: "Senior Python Developer",
    hiredBy: "Interviewer X",
  },
  {
    candidate_name: "Candidate C",
    position: "Senior Python Developer",
    hiredBy: "Interviewer X",
  },
  {
    candidate_name: "Candidate D",
    position: "Senior Python Developer",
    hiredBy: "Interviewer X",
  },
  {
    candidate_name: "Candidate E",
    position: "Senior Python Developer",
    hiredBy: "Interviewer X",
  },
];

const HiredSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Hiring Candidates</h3>
        <button
          className="text-[#38a3a5] hover:underline font-medium text-sm"
          onClick={() => setModalOpen(true)}
        >
          View All
        </button>
      </div>

      {/* Preview List */}
      <div className="space-y-4">
        {hiringList.slice(0, 4).map((candidate, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-4 p-3 border border-gray-200 rounded-lg"
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

            <button className="shrink-0 border bg-[#38a3a5] text-white text-xs px-3 py-1 rounded-md hover:bg-[#2c8a8b] transition">
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
                  {hiringList.map((candidate, idx) => (
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
    </section>
  );
};

// const BottomScrollSection = () => {
//   return (
//     <div className="mt-6 pb-10">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {/* Left Column - 3 rows */}
//         <div className="md:col-span-3 flex flex-col gap-6">
//           <TodaysMeetings />
//           <PostedJobs />
//           <CandidateStatus />
//         </div>

//         {/* Right Sidebar - 2 rows */}
//         <div className="md:col-span-1 flex flex-col gap-6">
//           <UpcomingSection />
//           <HiredSection />
//         </div>
//       </div>
//     </div>
//   );
// };
const BottomScrollSection = () => {
  return (
    <section className="w-full mt-6 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content (Left Column) */}
        <div className="lg:col-span-3 space-y-6">
          <TodaysMeetings />
          <PostedJobs />
          <CandidateStatus />
        </div>

        {/* Sidebar (Right Column) */}
        <div className="lg:col-span-1 space-y-6">
          <UpcomingSection />
          <HiredSection />
        </div>
      </div>
    </section>
  );
};

export default BottomScrollSection;
