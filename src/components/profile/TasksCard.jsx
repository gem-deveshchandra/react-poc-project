// src/pages/Profile/components/TasksCard.tsx
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
  IconButton,
  Checkbox,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { GripVertical, Clock, Trash2, Pencil, Plus } from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Review employee feedback forms",
    description: "Go through the feedback collected this month.",
    due: "Today",
  },
  {
    id: 2,
    title: "Finalize training schedule",
    description: "Confirm training topics and speakers.",
    due: "Tomorrow",
  },
  {
    id: 3,
    title: "Update HR policies document",
    description: "Ensure all 2024 changes are reflected.",
    due: "Next Week",
  },
];

function SortableTask({ task, onDelete, onEdit, onCheck, completed }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-start gap-3 bg-gray-50 hover:bg-white p-4 border border-gray-200 rounded-xl shadow-sm relative"
    >
      <span {...listeners} className="cursor-grab pt-1">
        <GripVertical size={18} className="text-gray-400" />
      </span>
      <Checkbox
        checked={completed}
        onChange={() => onCheck(task.id)}
        size="small"
      />
      <div className="flex-1">
        <p
          className={`font-semibold text-base ${
            completed ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {task.title}
        </p>
        <p
          className={`text-sm mt-0.5 ${
            completed ? "line-through text-gray-300" : "text-gray-700"
          }`}
        >
          {task.description}
        </p>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <Clock size={12} /> <span>Due: {task.due}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <IconButton size="small" onClick={() => onEdit(task)}>
          <Pencil size={16} />
        </IconButton>
        <IconButton size="small" onClick={() => onDelete(task.id)}>
          <Trash2 size={16} />
        </IconButton>
      </div>
    </div>
  );
}

const TasksCard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [completedIds, setCompletedIds] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    due: "",
  });
  const [editingTask, setEditingTask] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tasks.findIndex((t) => t.id === active.id);
      const newIndex = tasks.findIndex((t) => t.id === over?.id);
      setTasks((prev) => arrayMove(prev, oldIndex, newIndex));
    }
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setCompletedIds((prev) => prev.filter((x) => x !== id));
  };

  const handleCheck = (id) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleAdd = () => {
    if (!newTask.title.trim()) return;
    const id = Date.now();
    setTasks((prev) => [...prev, { id, ...newTask }]);
    setNewTask({ title: "", description: "", due: "" });
  };

  const handleEditSave = () => {
    if (!editingTask.title.trim()) return;
    setTasks((prev) =>
      prev.map((task) => (task.id === editingTask.id ? editingTask : task))
    );
    setEditingTask(null);
  };

  return (
    <>
      <Card className="p-4 sm:p-6 h-[550px] flex flex-col overflow-hidden rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">My Tasks</h3>

        <div className="flex flex-col sm:flex-row gap-2 mb-3 flex-wrap">
          <TextField
            size="small"
            variant="outlined"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          
          />
          <TextField
            size="small"
            variant="outlined"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <TextField
            size="small"
            type="date"
            variant="outlined"
            value={newTask.due}
            onChange={(e) => setNewTask({ ...newTask, due: e.target.value })}
          />
          <Button
            onClick={handleAdd}
            variant="contained"
            size="small"
            startIcon={<Plus size={16} />}
          >
            Add
          </Button>
        </div>

        <div className="overflow-y-auto pr-1 space-y-3">
          <CardContent className="space-y-3 p-0">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={tasks.map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                {tasks.map((task) => (
                  <SortableTask
                    key={task.id}
                    task={task}
                    completed={completedIds.includes(task.id)}
                    onDelete={handleDelete}
                    onEdit={setEditingTask}
                    onCheck={handleCheck}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </CardContent>
        </div>
      </Card>

      <Dialog
        open={!!editingTask}
        onClose={() => setEditingTask(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent className="space-y-4 mt-2">
          <TextField
            label="Title"
            fullWidth
            value={editingTask?.title || ""}
            onChange={(e) =>
              setEditingTask({ ...editingTask, title: e.target.value })
            }
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={3}
            value={editingTask?.description || ""}
            onChange={(e) =>
              setEditingTask({ ...editingTask, description: e.target.value })
            }
          />
          <TextField
            type="date"
            fullWidth
            value={editingTask?.due || ""}
            onChange={(e) =>
              setEditingTask({ ...editingTask, due: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditingTask(null)}>Cancel</Button>
          <Button onClick={handleEditSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TasksCard;
