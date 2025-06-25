import { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import { CalendarIcon } from "lucide-react";

const localizer = momentLocalizer(moment);

const initialSlots = [
  {
    title: "Available Slot",
    start: new Date(moment().hour(14).minute(0).toDate()),
    end: new Date(moment().hour(15).minute(0).toDate()),
    allDay: false,
  },
  {
    title: "Available Slot",
    start: new Date(moment().hour(16).minute(0).toDate()),
    end: new Date(moment().hour(17).minute(0).toDate()),
    allDay: false,
  },
  {
    title: "Available Slot",
    start: new Date(moment().add(10, "day").hour(10).minute(0).toDate()),
    end: new Date(moment().add(11, "day").hour(11).minute(0).toDate()),
    allDay: false,
  },
];

const BlockCalendarCard = () => {
  const [events, setEvents] = useState(initialSlots);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  const handleBlock = () => {
    if (selectedEvent) {
      setEvents((prev) =>
        prev.map((e) =>
          e === selectedEvent ? { ...e, title: "Blocked" } : e
        )
      );
    }
    setDialogOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <Card className="p-4 sm:p-6 rounded-2xl shadow-md bg-gradient-to-br from-white via-blue-50 to-indigo-50 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-indigo-600" />
            Block Calendar
          </h3>
        </div>

        <CardContent className="p-0 h-[320px] overflow-hidden">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            selectable={false}
            onSelectEvent={handleSelectEvent}
            style={{ height: "100%", backgroundColor: "#fff", borderRadius: "0.5rem" }}
          />
        </CardContent>
      </Card>

      {/* Block Confirmation Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle className="text-lg font-semibold text-gray-800">Block this slot?</DialogTitle>
        <DialogContent className="space-y-2">
          {selectedEvent && (
            <div className="text-sm text-gray-700">
              <p className="font-medium">
                {moment(selectedEvent.start).format("dddd, MMMM Do YYYY")}
              </p>
              <p>
                {moment(selectedEvent.start).format("hh:mm A")} -{" "}
                {moment(selectedEvent.end).format("hh:mm A")}
              </p>
            </div>
          )}
        </DialogContent>
        <Divider />
        <DialogActions className="px-4 py-3">
          <Button variant="text" onClick={() => setDialogOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleBlock}>
            Block
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BlockCalendarCard;
