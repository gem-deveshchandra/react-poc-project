// src/pages/Profile/components/EditPersonalInfoModal.tsx

import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState, useEffect } from "react";

const EditPersonalInfoModal = ({ open, onClose, data, onSave }) => {
  const [formData, setFormData] = useState(data);

  // Sync with incoming data when modal opens
  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle className="text-lg font-semibold text-gray-800 px-6 pt-6">
        Edit Personal Info
      </DialogTitle>

      <DialogContent className="space-y-4 px-6 pb-6">
        <div className="space-y-4">
          {/* About */}
          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
              About
            </label>
            <textarea
              name="about"
              id="about"
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write something about yourself..."
              value={formData.about}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              name="location"
              id="location"
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* Joining Date */}
          <div>
            <label htmlFor="joined" className="block text-sm font-medium text-gray-700 mb-1">
              Date of Joining
            </label>
            <input
              name="joined"
              id="joined"
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.joined}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outlined" onClick={onClose} className="capitalize">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} className="bg-[#38a3a5] capitalize">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPersonalInfoModal;
