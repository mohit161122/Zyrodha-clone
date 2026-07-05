const { Chart } = require('chart.js');
try {
  new Chart(null, {
    type: 'bar',
    data: { labels: [undefined], datasets: [{ data: [undefined] }] }
  });
  console.log("No crash");
} catch (e) {
  console.log("Crash:", e.message);
}
