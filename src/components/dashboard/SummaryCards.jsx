import React from "react";
import { Box, Typography, Card } from "@mui/material";
import { indicesStyles } from "../../styles/dashboard/indicesStyles";

const SummaryCards = ({ data }) => {
  const styles = indicesStyles;

  if (!data) return null;

  const cards = [
    {
      title: "New",
      value: data?.new,
      trend: 2.5,
      note: "this month",
    },
    {
      title: "Submitted",
      value: data?.submitted,
      trend: -1.2,
      note: "vs last month",
    },
    {
      title: "Archived",
      value: data?.archived,
      trend: 0.0,
      note: "stable",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "2%",
        mb: 2,
        mt: 6,
      }}
    >
      {cards?.map((card) => (
        <Card key={card?.title} sx={styles.summaryCard}>
          <Typography variant="subtitle2" gutterBottom>
            {card.title}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            {card.value}
          </Typography>
          <Typography
            variant="body2"
            color={
              card?.trend > 0
                ? "success.main"
                : card?.trend < 0
                ? "error.main"
                : "#FFFFFF"
            }
            sx={{ mt: 1 }}
          >
            {card?.trend > 0 ? `+${card?.trend}%` : `${card?.trend}%`}{" "}
            {card.note}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default SummaryCards;
