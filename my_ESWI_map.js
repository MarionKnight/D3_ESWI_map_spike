var width = 960,
    height = 1160;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("uk.json", function(error, uk) {
  svg.append("path")
      .datum(topojson.feature(uk, uk.objects.subunits))
      .attr("d", d3.geo.path().projection(d3.geo.mercator()));

  var subunits = topojson.feature(uk, uk.objects.subunits);

  var projection = d3.geo.mercator()
      .scale(400)
      .translate([width / 2, height / 2]);

  var path = d3.geo.path()
      .projection(projection);

  svg.append("path")
      .datum(subunits)
      .attr("d", path);

  var projection = d3.geo.albers()
      .center([0, 55.4])
      .rotate([4.4, 0])
      .parallels([50, 60])
      .scale(6000)
      .translate([width / 2, height / 2]);
});
