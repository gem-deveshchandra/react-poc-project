import { Card } from "@mui/material";
import { CalendarDays, User, Users, Video } from "lucide-react";

const meetings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    time: "Today, 4:00 PM",
    organizer: "Aditi Raj",
    meetVia: "Google Meet",
    attendees: "Team Alpha",
  },
  {
    id: 2,
    title: "Hiring Review",
    time: "Tomorrow, 11:00 AM",
    organizer: "Ankit Gupta",
    meetVia: "Zoom",
    attendees: "HR Panel",
  },
  {
    id: 3,
    title: "Budget Planning",
    time: "Tomorrow, 3:00 PM",
    organizer: "Rahul Mehta",
    meetVia: "MS Teams",
    attendees: "Finance Team",
  },
];

const MeetingsCard = () => {
  return (
    <Card className="p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 h-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">My Meetings</h3>

      <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl shadow-md border border-gray-200 p-5 flex flex-col justify-between transition hover:shadow-lg"
          >
            <div className="mb-3 space-y-1">
              <h4 className="text-base font-semibold text-gray-900">{meeting.title}</h4>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <CalendarDays size={14} className="text-green-500" /> {meeting.time}
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <User size={14} className="text-blue-500" /> {meeting.organizer}
              </p>
            </div>

            <div className="border-t pt-3 mt-auto space-y-1 text-sm text-gray-600">
              <p className="flex items-center gap-1">
                <Video size={14} className="text-purple-500" />
                <span className="font-medium">Meet via:</span> {meeting.meetVia}
              </p>
              <p className="flex items-center gap-1">
                <Users size={14} className="text-yellow-600" />
                <span className="font-medium">Attendees:</span> {meeting.attendees}
              </p>
            </div>

            <div className="flex justify-end gap-2 mt-5">
              <button className="px-3 py-1.5 border border-yellow-500 text-yellow-600 rounded-lg hover:bg-yellow-50 transition text-xs sm:text-sm">
                Reschedule
              </button>
              <button className="px-3 py-1.5 bg-[#38a3a5] text-white rounded-lg hover:bg-blue-700 transition text-xs sm:text-sm">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MeetingsCard;
