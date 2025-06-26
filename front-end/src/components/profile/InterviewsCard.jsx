import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Divider,
} from "@mui/material";
import {
  CalendarDays,
  User,
  Briefcase,
  MapPin,
  UserCircle2,
} from "lucide-react";

const interviews = [
  {
    id: 1,
    position: "UI/UX Designer",
    candidate: "Aman Kapoor",
    time: "Today, 10:00 AM",
    location: "Zoom",
    interviewer: "Priya Sharma",
  },
  {
    id: 2,
    position: "Frontend Developer",
    candidate: "Sneha Sharma",
    time: "Today, 2:00 PM",
    location: "Google Meet",
    interviewer: "Ankit Verma",
  },
  {
    id: 3,
    position: "HR Assistant",
    candidate: "Rohit Mehra",
    time: "Tomorrow, 11:30 AM",
    location: "Conference Room B",
    interviewer: "Neha Singh",
  },
];

const Transition = Slide;

const InterviewsCard = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (interview) => {
    setSelected(interview);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <>
      <Card className="p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 bg-gradient-to-br from-white via-blue-50 to-indigo-50 h-full flex flex-col">
        <h3 className="text-xl font-semibold text-[#05174b] mb-4">My Interviews</h3>

        <CardContent className="p-0 space-y-3 overflow-y-auto max-h-[360px]">
          {interviews.map((interview) => (
            <div
              key={interview.id}
              className="flex justify-between items-center bg-white hover:bg-gray-50 transition-all rounded-xl p-4 border border-gray-200"
            >
              <div className="text-sm space-y-1">
                <div className="font-medium text-gray-900 flex items-center gap-1">
                  <User size={16} className="text-gray-500" />
                  {interview.candidate}
                </div>
                <div className="text-gray-600 flex items-center gap-1">
                  <Briefcase size={14} className="text-purple-500" />
                  {interview.position}
                </div>
                <div className="text-gray-500 text-xs flex items-center gap-1">
                  <CalendarDays size={13} className="text-green-600" />
                  {interview.time}
                </div>
              </div>
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleOpen(interview)}
                className="text-xs rounded-lg"
              >
                View
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Interview Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        maxWidth="sm"
        fullWidth
        PaperProps={{ className: "rounded-2xl" }}
      >
        {selected && (
          <>
            <DialogTitle className="text-xl font-semibold text-gray-800 px-6 pt-6">
              Interview Details
            </DialogTitle>
            <DialogContent className="space-y-4 text-sm text-gray-700 px-6 pb-0 pt-2">
              <div className="flex items-center">
                <UserCircle2 size={18} className="mr-2 text-blue-600" />
                <span className="font-medium">Candidate:</span>&nbsp;{selected.candidate}
              </div>
              <div className="flex items-center">
                <Briefcase size={18} className="mr-2 text-purple-600" />
                <span className="font-medium">Position:</span>&nbsp;{selected.position}
              </div>
              <div className="flex items-center">
                <CalendarDays size={18} className="mr-2 text-green-600" />
                <span className="font-medium">Time:</span>&nbsp;{selected.time}
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-red-500" />
                <span className="font-medium">Location:</span>&nbsp;{selected.location}
              </div>
              <div className="flex items-center">
                <User size={18} className="mr-2 text-yellow-500" />
                <span className="font-medium">Interviewer:</span>&nbsp;{selected.interviewer}
              </div>
            </DialogContent>
            <Divider />
            <DialogActions className="px-6 py-4">
              <Button
                variant="contained"
                onClick={handleClose}
                className="e text-white rounded-md"
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
};

export default InterviewsCard;
