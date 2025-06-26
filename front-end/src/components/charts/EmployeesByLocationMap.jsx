// import { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker
// } from "react-simple-maps";
// import { Card, CardContent, Dialog, IconButton } from "@mui/material";
// import { Maximize2, Table } from "lucide-react";
// import worldTopo from "./../../data/world-topo.json";
// import locationData from "./../../data/employeeLocation.json";

// const EmployeesByLocationMap = () => {
//   const [fullscreen, setFullscreen] = useState(false);
//   const [showTable, setShowTable] = useState(false);

//   const toggleFullscreen = () => setFullscreen(!fullscreen);
//   const toggleView = () => setShowTable(!showTable);

//   const MapChart = (
//     <ComposableMap projection="geoMercator" width={600} height={400}>
//       <Geographies geography={worldTopo}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography
//               key={geo.rsmKey}
//               geography={geo}
//               fill="#E5E7EB"
//               stroke="#D1D5DB"
//               style={{
//                 default: { outline: "none" },
//                 hover: { fill: "#c7d2fe", outline: "none" },
//                 pressed: { outline: "none" }
//               }}
//             />
//           ))
//         }
//       </Geographies>
//       {locationData.map((loc) => (
//         <Marker key={loc.location} coordinates={loc.coordinates}>
//           <circle r={6} fill="#4f46e5" stroke="#fff" strokeWidth={1.5} />
//           <text textAnchor="middle" y={-10} style={{ fontSize: 10 }}>
//             {loc.count}
//           </text>
//         </Marker>
//       ))}
//     </ComposableMap>
//   );

//   const TableContent = (
//     <div className="p-4">
//       <table className="min-w-full border border-gray-200 text-left">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2">Location</th>
//             <th className="p-2">Employee Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {locationData.map((loc) => (
//             <tr key={loc.location}>
//               <td className="p-2">{loc.location}</td>
//               <td className="p-2">{loc.count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <>
//       <Card className="w-full shadow-md rounded-2xl">
//         <CardContent>
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-lg font-semibold text-gray-700">Employees by Location</h2>
//             <div className="flex gap-2">
//               <IconButton onClick={toggleView} size="small" title="Toggle Table View">
//                 <Table size={18} />
//               </IconButton>
//               <IconButton onClick={toggleFullscreen} size="small" title="Fullscreen">
//                 <Maximize2 size={18} />
//               </IconButton>
//             </div>
//           </div>
//           <div className="overflow-x-auto">
//             {showTable ? TableContent : MapChart}
//           </div>
//         </CardContent>
//       </Card>

//       <Dialog open={fullscreen} onClose={toggleFullscreen} fullWidth maxWidth="lg">
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-lg font-semibold text-gray-700">Employees by Location (Fullscreen)</h2>
//             <button onClick={toggleFullscreen} className="text-sm text-blue-600">Close</button>
//           </div>
//           <div className="overflow-x-auto">
//             {showTable ? TableContent : MapChart}
//           </div>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default EmployeesByLocationMap;

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import worldMap from "./../../data/world-topo.json";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export default function EmployeesByLocationMap({locationData}) {
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
 
        <div className="bg-white rounded-2xl shadow-md p-3 relative h-[350px]">
          <h2 className="text-lg font-semibold mb-2 text-[#05174b]">Employees by Location</h2>
          <ComposableMap
            projectionConfig={{ scale: 140 }}
            width={800}
            height={300}
            style={{ width: '100%', height: '90%' }}
          >
            <ZoomableGroup zoom={1} center={[0, 20]}>
              <Geographies geography={worldMap}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#DDD"
                      stroke="#AAA"
                      style={{
                        default: { outline: 'none' },
                        hover: { fill: '#B0C4DE', outline: 'none' },
                        pressed: { fill: '#6495ED', outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>
  
              {locationData?.map((marker, i) => (
                <Marker
                  key={i}
                  coordinates={marker.coordinates}
                //   onClick={(e) => handleMarkerClick(marker, e)}
                >
                  <circle r={5} fill="#FF5722" stroke="#fff" strokeWidth={1} />
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
  
       
        </div>
  
        {/* Bar Chart Section */}
        <div className="bg-white rounded-2xl shadow-md p-3 h-[350px]">
          <h2 className="text-lg font-semibold mb-2 text-[#05174b]">Employee Count by Location</h2>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={locationData} layout="vertical" margin={{ left: 30 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="location" width={90} />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" barSize={18} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  