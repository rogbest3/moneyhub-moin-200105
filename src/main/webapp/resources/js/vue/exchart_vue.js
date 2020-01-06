var exchart_vue = exchart_vue || {}
exchart_vue = {
	exchart_head : ()=>{`<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		<script src="./Chart.min.js"></script>`
	},	
	exchart : ()=>{	`<div style="width: 60%">
		<canvas id="canvas" height="450" width="600"></canvas>
	</div>
	<input type="button" id="btnAdd" value="add data">

	<script type="text/javascript">
		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var months = ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"];
		var lineChart = null;
		var lineChartData = {
			labels : ["11","12","March","April","May","June","July"],
			datasets : [
				
				{
					label: "My Second dataset",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [1200, 1250, 1230, 1240, 1260, 1220]
				}
			]

		};

		$(function() {
			var ctx = document.getElementById("canvas").getContext("2d");
			lineChart = new Chart(ctx).Line(lineChartData, {
				///Boolean - Whether grid lines are shown across the chart
				scaleShowGridLines : false,
				//String - Colour of the grid lines
				scaleGridLineColor : "rgba(0,0,0,0.05)",
				//Number - Width of the grid lines
				scaleGridLineWidth : 1,
				//Boolean - Whether the line is curved between points
				bezierCurve : false,
				//Number - Tension of the bezier curve between points
				bezierCurveTension : 0.4,
				//Boolean - Whether to show a dot for each point
				pointDot : true,
				//Number - Radius of each point dot in pixels
				pointDotRadius : 5,
				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,
				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius : 20,
				//Boolean - Whether to show a stroke for datasets
				datasetStroke : true,
				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,
				//Boolean - Whether to fill the dataset with a colour
				datasetFill : false,
				onAnimationProgress: function() {
					console.log("onAnimationProgress");
				},
				onAnimationComplete: function() {
					console.log("onAnimationComplete");
				}
			});
		});

		$("input#btnAdd").on("click", function() {
			lineChart.addData(
				[randomScalingFactor(),randomScalingFactor()], 
				months[(lineChart.datasets[0].points.length)%12]
			);
		});

		$("canvas").on("click", function(e) {
			var activePoints = lineChart.getPointsAtEvent(e);
			console.log(activePoints);

			for(var i in activePoints) {
				console.log(activePoints[i].value);
			}
		});

	</script>`
	}
}