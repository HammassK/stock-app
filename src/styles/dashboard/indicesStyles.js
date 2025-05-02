import { GRADIENTS } from "../../constants/gradient";

export const indicesStyles = {
  tabButton: (isActive) => ({
    color: isActive ? GRADIENTS.brand : "#ffffff",
    fontWeight: "bold",
    borderBottom: isActive ? `2px solid ${GRADIENTS.brand}` : "none",
    borderRadius: 0,
    flexShrink: 0,
  }),

  summaryCard: {
    p: 2,
    borderRadius: 2,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    minHeight: 100,
    width: "31%",
    backgroundColor: "#0b1221",
    color: "white",
  },

  timeRangeButton: (isActive) => ({
    textTransform: "none",
    borderRadius: "999px",
    fontWeight: isActive ? "bold" : "normal",
  }),

  chartContainer: {
    p: 2,
    height: 300,
  },

  sideNavContainer: {
    width: 200,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    bgcolor: "#0b1221",
    color: "white",
  },

  headingText: {
    pl: 2,
    pt: 3,
    fontSize: 26,
    fontWeight: 600,
    background: "linear-gradient(to right, #EC4899, #3B82F6)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  indicesList: {
    maxHeight: "74vh",
    overflowY: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  indexButton: (isActive) => ({
    mb: 1,
    background: isActive
      ? "linear-gradient(to right, #EC4899, #3B82F6)"
      : "transparent",
    borderRadius: 2,
    "&:hover": {
      background: "linear-gradient(to right, #EC4899, #3B82F6)",
    },
    cursor: "pointer",
  }),
};
