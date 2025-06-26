import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import {
  DataGrid,
  useGridApiRef,
  gridFilteredSortedRowIdsSelector,
} from "@mui/x-data-grid";
import {
  Box,
  Button,
  IconButton,
  Input,
} from "@mui/material";
import { Search, X, FileDown } from "lucide-react";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../redux/employeeSlice";

const EmployeeTable = () => {
  const [searchFields, setSearchFields] = useState({});
  const [showSearch, setShowSearch] = useState({});
  const [filterModel, setFilterModel] = useState({ items: [] });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.employees);
  const apiRef = useGridApiRef();
  const visibleRowsRef = useRef([]);
  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  const handleFilterChange = (field, value) => {
    setSearchFields((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSearchBox = (field) => {
    setShowSearch((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const clearFilters = () => {
    setSearchFields({});
    setShowSearch({});
    setFilterModel({ items: [] });
  };

  const exportToExcel = () => {
    const filteredData = visibleRowsRef.current.map(({ id, ...rest }) => rest);
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "Filtered_Employees.xlsx");
  };

  const filteredRows = useMemo(
    () =>
      data?.filter((emp) =>
        Object.entries(searchFields).every(([field, value]) =>
          emp[field]?.toString().toLowerCase().includes(value.toLowerCase())
        )
      ),
    [searchFields, data]
  );

  const updateVisibleRows = useCallback(() => {
    if (!apiRef.current) return;
    const ids = gridFilteredSortedRowIdsSelector(apiRef.current.state);
    visibleRowsRef.current = ids
      .map((id) => filteredRows.find((row) => row.id === id))
      .filter(Boolean);
  }, [filteredRows, apiRef]);

  useEffect(() => {
    updateVisibleRows();
  }, [updateVisibleRows]);

  const columns = useMemo(() => {
    const fields = [
      "id",
      "name",
      "email",
      "joiningDate",
      "designation",
      "birthday",
      "contactNo",
      "teamName",
      "hobbies",
      "userAddedSkills",
      "trainingsDone",
      "trainingsDelivered",
      "achievements",
      "gemTalkDelivered",
      "aboutMe",
      "reportingManager",
      "certificates",
      "projects",
      "reportees",
      "photoUrl",
      "reportingManagerEmail",
      "officeLocation",
    ];

    return fields.map((field) => ({
      field,
      headerName: field,
      minWidth: 160,
      flex: 1,
      renderHeader: () => (
        <Box display="flex" alignItems="center" gap={1}>
          <span className="font-semibold capitalize text-sm text-gray-700">
            {field}
          </span>
          {!showSearch[field] ? (
            <IconButton size="small" onClick={() => toggleSearchBox(field)}>
              <Search size={14} />
            </IconButton>
          ) : (
            <>
              <Input
                size="small"
                placeholder={`Search ${field}`}
                value={searchFields[field] || ""}
                onChange={(e) => handleFilterChange(field, e.target.value)}
                sx={{ width: 140, fontSize: "0.75rem", py: 0 }}
              />
              <IconButton
                size="small"
                onClick={() => {
                  handleFilterChange(field, "");
                  setShowSearch((prev) => ({ ...prev, [field]: false }));
                }}
              >
                <X size={14} />
              </IconButton>
            </>
          )}
        </Box>
      ),
    }));
  }, [searchFields, showSearch]);

  return (
    <Box p={3} className="space-y-4">
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <h2 className="text-2xl font-semibold text-[#38a3a5]">
          Employee Directory
        </h2>
        <Box display="flex" gap={2} flexWrap="wrap">
          <Button
            variant="outlined"
            startIcon={<X size={16} />}
            onClick={clearFilters}
            sx={{'&:hover':{ backgroundColor:'#38a3a5', color:'white'}}}
            
          >
            Clear Filters
          </Button>
          <Button
            variant="contained"
            startIcon={<FileDown size={16} />}
            onClick={exportToExcel}
            sx={{backgroundColor:'#38a3a5'}}
          >
            Export Excel
          </Button>
        </Box>
      </Box>

      <Box width="100%" height={600} overflow="auto">
        <DataGrid
          apiRef={apiRef}
          rows={filteredRows}
          columns={columns}
          getRowId={(row) => row.id}
          checkboxSelection
          sortingOrder={["asc", "desc"]}
          disableRowSelectionOnClick
          filterModel={filterModel}
          onFilterModelChange={(model) => setFilterModel(model)}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f0f4f8",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row": {
              maxHeight: "100px",
            },
            "& .MuiDataGrid-cell": {
              py: 1,
              fontSize: "0.875rem",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default EmployeeTable;
