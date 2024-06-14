function createChart(chartType) {
  const ctx = document.getElementById("myChart").getContext("2d");

  const chartData = {
    labels: Array.from({ length: 21 }, (_, i) => 1999 + i),
    datasets: [
      {
        label: "Sample Data",
        data: [
          50, 40, 70, 20, 90, 10, 60, 30, 80, 40, 50, 40, 70, 20, 90, 10, 60,
          30, 80, 40, 50,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: chartType,
    data: chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  new Chart(ctx, config);
}
