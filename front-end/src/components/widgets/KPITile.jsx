import React from "react";
import { Users, UserPlus, Layers, Venus } from "lucide-react";
import { Card, CardContent } from "@mui/material";

const iconMap = {
  users: <Users size={28} className="text-blue-600" />,
  "user-plus": <UserPlus size={28} className="text-green-600" />,
  layers: <Layers size={28} className="text-purple-600" />,
  female: <Venus size={28} className="text-pink-500" />,
};

const KPITile = ({ label, value, icon }) => {

  return (
   
    <Card className="w-full shadow-md rounded-[16px]">
      <CardContent className="flex justify-between items-center p-4">
        <div>
     
          <h3 className="text-gray-500 text-sm font-medium">{label} </h3>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-2 rounded-full bg-gray-100">{iconMap[icon]}</div>
      </CardContent>
    </Card>
  );
};

export default KPITile;
