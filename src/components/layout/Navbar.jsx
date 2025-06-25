import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Settings, Moon, User } from 'lucide-react';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import profile from "../../assets/profile/profile-1.jpg";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const handleProfile = () => {
    navigate("/profile");
    handleMenuClose();
  };

  return (
    <div className="h-16 bg-white shadow-md flex justify-between items-center px-6">
      <h1 className="font-semibold text-lg text-gray-800">
        Welcome, {user?.username}
      </h1>

      <TextField
        variant="outlined"
        size="small"
        placeholder="Search..."
        className="w-1/3"
        InputProps={{ className: "bg-white" }}
      />

      <div className="flex items-center gap-4">
        <IconButton><Settings size={20} /></IconButton>
        <IconButton><Moon size={20} /></IconButton>
        <IconButton onClick={handleMenuOpen}>
          <Avatar sx={{ width: 32, height: 32 }} src={profile} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleProfile}>View Profile</MenuItem>
          <MenuItem onClick={handleLogout} sx={{ color: "red" }}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;