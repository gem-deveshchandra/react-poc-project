
// src/pages/Profile/components/PersonalInfoSection.tsx
import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Pencil } from "lucide-react";
import EditPersonalInfoModal from "./EditPersonalInfoModal";

const PersonalInfoSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [info, setInfo] = useState({
    about:
      "Passionate HR professional with 5+ years of experience in recruitment, talent management, and employee engagement.",
    email: "test.hr@company.com",
    phone: "+91-98XXXXXX",
    location: "Bengaluru, India",
    joined: "Jan 2021",
  });

  return (
    <section className="bg-white p-4 sm:p-6 rounded-2xl shadow-md relative space-y-4">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={() => setOpenModal(true)}
      >
        <Pencil className="w-4 h-4" />
      </button>

      {/* About */}
      <div>
        <h3 className="text-lg font-semibold mb-1 text-[#05174b]">About</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{info.about}</p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <span>{info.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-gray-500" />
          <span>{info.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>{info.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>Joined: {info.joined}</span>
        </div>
      </div>

      {/* Modal */}
      <EditPersonalInfoModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={info}
        onSave={setInfo}
      />
    </section>
  );
};

export default PersonalInfoSection;
