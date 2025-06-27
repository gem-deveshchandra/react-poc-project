import userIcon from "../../../assets/profile/profile-2.png";
const TodaysMeetings = ({ meetings }) => {
    return (
      <section className="bg-white rounded-2xl shadow-md p-4">
        <h3 className="text-lg font-semibold mb-6 text-[#05174b]">
          Today's Interview Meetings
        </h3>
        <div className="flex space-x-6 overflow-x-auto pb-3">
          {meetings?.map((meeting) => (
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

  export default TodaysMeetings;