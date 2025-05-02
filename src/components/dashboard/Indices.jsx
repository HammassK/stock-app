import React, { useState } from "react";
import SideNav from "./SideNav";
import ChartComponent from "./ChartComponent";
import { Box, Grid } from "@mui/material";
import SummaryCards from "./SummaryCards";
import {
  filterOptions,
  indicesData,
  indicesList,
} from "../../constants/constant";

const Indices = () => {
  const [activeIndex, setActiveIndex] = useState("NIFTY 50");
  const [activeFilter, setActiveFilter] = useState("1D");
  const [showFilters, setShowFilters] = useState(false);

  const handleIndexChange = (index) => setActiveIndex(index);
  const handleFilterChange = (value) => {
    setActiveFilter(value);
    setShowFilters(false);
  };

  const selectedData = indicesData[activeIndex];

  return (
    <Box display="flex">
      <SideNav
        indicesList={indicesList}
        activeIndex={activeIndex}
        onIndexChange={handleIndexChange}
      />
      <Box flex={1} p={2}>
        <Grid container spacing={2}>
          <SummaryCards data={selectedData} />
          <ChartComponent
            chartData={selectedData.chart}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            filterOptions={filterOptions}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Indices;
