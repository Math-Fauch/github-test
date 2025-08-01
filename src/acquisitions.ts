import Chart from 'chart.js/auto'

interface DataPoint {
  year: number;
  count: number;
}
(async function(): Promise<void> {
  const data: DataPoint[] = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  const chartElement = document.getElementById('acquisitions') as HTMLCanvasElement

  new Chart(
    chartElement,
    {
      type: 'line',
      data: {
        labels: data.map((row: DataPoint) => row.year.toString()),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row: DataPoint) => row.count)
          }
        ]
      }
    }
  );
})();
