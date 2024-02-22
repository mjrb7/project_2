// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Loss", "Win"],
    datasets: [{
      data: [35, 65],
      backgroundColor: ['#e74a3b', '#1cc88a', '#e74a3b'],
      hoverBackgroundColor: ['#e02d1b', '#17a673', '#2c9faf'],
      hoverBorderColor: "#b7b9cc",
      borderColor: '#3a3b45',
      bodyFontColor: '#dddfeb',
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "#121321",
      bodyFontColor: "#dddfeb",
      borderColor: '#5a5c69',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 75,
  },
});
