import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Box, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { indicesStyles } from "../../styles/dashboard/indicesStyles";

const ChartComponent = ({
  chartData,
  activeFilter,
  onFilterChange,
  setShowFilters,
  filterOptions,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const styles = indicesStyles;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowFilters(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowFilters(false);
  };

  const handleSelect = (value) => {
    onFilterChange(value);
    handleClose();
  };

  const chartOptions = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: chartData.categories,
    },
    theme: {
      mode: "dark",
    },
    colors: ["#00E396", "#FEB019"],
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" color="white">
          {activeFilter} Chart
        </Typography>
        <IconButton onClick={handleClick} sx={{ color: "white" }}>
          <FilterListIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {filterOptions.map((option) => (
            <MenuItem
              key={option.value}
              selected={activeFilter === option.value}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box
        sx={{
          ...styles.chartContainer,
          bgcolor: "#0b1221",
          borderRadius: 2,
        }}
      >
        <Chart
          options={chartOptions}
          series={chartData.series}
          type="line"
          height={300}
        />
      </Box>
    </Box>
  );
};

export default ChartComponent;
