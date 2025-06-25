
import { Card, CardContent, Dialog, IconButton } from "@mui/material";
import { Maximize2, Table } from "lucide-react";
import React, { useState } from "react";

const ChartCardWrapper = ({ title, chartContent, tableContent, defaultView = "chart"  }) => {
  const [showTable, setShowTable] = useState(defaultView === "table");
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullScreen = () => setFullscreen(!fullscreen);
  const toggleView = () => setShowTable(!showTable);

  return (
    <>
      <Card className="w-full !rounded-2xl shadow-md">
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <div className="flex gap-2">
              <IconButton
                onClick={toggleView}
                size="small"
                title="Toggle Table View"
              >
                <Table size={18} />
              </IconButton>
              <IconButton
                onClick={toggleFullScreen}
                size="small"
                title="Fullscreen"
              >
                <Maximize2 size={18} />
              </IconButton>
            </div>
          </div>
          {showTable ? tableContent : chartContent}
        </CardContent>
      </Card>

      <Dialog open={fullscreen} onClose={toggleFullScreen} fullWidth maxWidth="md">
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <button onClick={toggleFullScreen} className="text-sm text-blue-600">
              Close
            </button>
          </div>
          {showTable ? tableContent : chartContent}
        </div>
      </Dialog>
    </>
  );
};

export default ChartCardWrapper;
