import { useMemo, useState } from "react";
import Modal from './Modal';


const statusColors = {
  hired: "bg-green-100 text-green-600",
  rejected: "bg-red-100 text-red-600",
  active: "bg-yellow-100 text-yellow-600",
};

function CandidateStatus({ candidateData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosition, setFilterPosition] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const uniquePositions = useMemo(() => {
    return [...new Set(candidateData?.map((c) => c.position))];
  }, []);

  const filteredCandidates = useMemo(() => {
    return candidateData?.filter((c) => {
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
          {candidates?.length === 0 ? (
            <tr>
              <td colSpan="9" className="p-3 text-center text-gray-500">
                No candidates found.
              </td>
            </tr>
          ) : (
            candidates?.map((c) => {
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
        <h3 className="text-lg font-semibold text-[#05174b]">
          Candidate Status
        </h3>
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
export default CandidateStatus;