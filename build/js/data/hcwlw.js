var chart = Highcharts.chart('pwlyl', {
	chart: {
		type: 'pie',
		options3d: {
			enabled: true,
			alpha: 45,
			beta: 0
		}
	},
	title: false,
	tooltip: false,
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			depth: 35,
			dataLabels: false
		}
	},
	series: [{
		type: 'pie',
		name: '浏览器占比',
		data: [
			{
				name: 'Chrome',
				y: 12.8,
				sliced: true,
				selected: true
			},
			['Safari',    8.5]
		]
	}]
});