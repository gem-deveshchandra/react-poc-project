
import profile from "../../assets/profile/profile-1.jpg";

const ProfileHeader = () => {
  return (
    <div className="min-h-[180px] bg-gradient-to-r from-[#202a38] to-[#205072c9] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between rounded-2xl shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={profile}
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 object-cover"
        />
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Test user</h2>
          <p className="text-sm text-gray-300">HR Manager</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-sm text-gray-300">
            <span>test.hr@company.com</span>
            <span className="hidden sm:inline">|</span>
            <span>test.hr@company.com</span>
          </div>
        </div>
      </div>

      {/* <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition">
        <Pencil className="w-5 h-5 text-gray-100" />
      </button> */}
    </div>
  );
};

export default ProfileHeader;