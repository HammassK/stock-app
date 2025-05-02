export const indicesList = ["NIFTY 50", "SENSEX", "IT", "PHARMA"];

export const filterOptions = [
  { label: "1 Day", value: "1D" },
  { label: "5 Days", value: "5D" },
  { label: "1 Month", value: "1M" },
  { label: "3 Months", value: "3M" },
  { label: "6 Months", value: "6M" },
  { label: "1 Year", value: "1Y" },
  { label: "5 Years", value: "5Y" },
];

export const indicesData = {
  "NIFTY 50": {
    new: 1859,
    submitted: 268,
    archived: 268,
    chart: {
      total: 240800,
      series: [
        {
          name: "Total Product",
          data: [10, 20, 15, 30, 40, 25, 35, 45, 30, 20, 15, 40],
        },
        {
          name: "Operating Status",
          data: [5, 15, 10, 20, 30, 20, 25, 30, 25, 15, 10, 30],
        },
      ],
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
  SENSEX: {
    new: 1920,
    submitted: 310,
    archived: 300,
    chart: {
      total: 220000,
      series: [
        {
          name: "Total Product",
          data: [12, 22, 18, 28, 38, 24, 33, 42, 29, 21, 19, 36],
        },
        {
          name: "Operating Status",
          data: [6, 18, 12, 22, 28, 22, 27, 32, 26, 17, 12, 32],
        },
      ],
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
  IT: {
    new: 1500,
    submitted: 250,
    archived: 200,
    chart: {
      total: 210000,
      series: [
        {
          name: "Total Product",
          data: [8, 18, 14, 24, 34, 20, 30, 40, 26, 18, 12, 38],
        },
        {
          name: "Operating Status",
          data: [4, 14, 8, 18, 26, 18, 22, 28, 23, 14, 9, 28],
        },
      ],
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
  PHARMA: {
    new: 1600,
    submitted: 270,
    archived: 220,
    chart: {
      total: 230000,
      series: [
        {
          name: "Total Product",
          data: [9, 19, 13, 26, 36, 22, 31, 43, 28, 19, 14, 39],
        },
        {
          name: "Operating Status",
          data: [5, 16, 9, 19, 29, 19, 24, 29, 24, 16, 11, 29],
        },
      ],
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};
