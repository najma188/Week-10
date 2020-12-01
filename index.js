const data = [
  { name: 'John', score: 80 },
  { name: 'Simon', score: 76 },
  { name: 'Samantha', score: 90 },
  { name: 'Patrick', score: 82 },
  { name: 'Mary', score: 90 },
  { name: 'Christina', score: 75 },
  { name: 'Michael', score: 86 },
];

const width = 1000;
const height = 600;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

const svg = d3.select('#d3-container')
  .append('svg')
  .attr('width', width - margin.left - margin.right)
  .attr('height', height - margin.top - margin.bottom)
  .attr("viewBox", [0, 0, width, height]);

const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.05)

const y = d3.scaleLinear()
  .domain([0, 120])
  .range([height - margin.bottom, margin.top])

svg
  .append("g")
  .attr("fill", '#b7a7c7')
  .selectAll("rect")
  .data(data.sort((a, b) => d3.descending(a.score, b.score)))
  .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.score))
    .attr('title', (d) => d.score)
    .attr("class", "rect")
    .attr("height", d => y(0) - y(d.score))
    .attr("width", x.bandwidth());

function yAxis(g) {
  g.attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(null, data.format))
    .attr("font-size", '20px')
}

function xAxis(g) {
  g.attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].name))
    .attr("font-size", '20px')
}

svg.append("g").call(xAxis);
svg.append("g").call(yAxis);
svg.node();

function barChartBrush(values, bins) {
//create brush
 brush = d3.svg.brush()
    .x(mini_x)
    .on("brush", brush);

// call brush
mini
  .call(brush)
  .selectAll("rect")
  .attr("y", 0)
  .attr("height", mini_height);

// brush function
function brush() {
 
  x.domain(brush.empty() ? mini_x.domain() : brush.extent());
  main.select(".tline") .attr("d", function(d) {return line(dataset); });
  main.select(".x.axis").call(xAxis);
}
}

this.barChartBrush(1000,10);