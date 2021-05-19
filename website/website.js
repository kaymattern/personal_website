function drawSkills() {

const margin = {top:80, right:50, left:120, bottom:80}; 
    
const outerHeight = 800; 
const outerWidth = 1000;
   

let skillsData = [
                  {skill: "Python", amount: 100},
                  {skill: "R", amount: 100},
                  {skill: "HTML", amount: 85},
                  {skill: "CSS", amount: 85},
                  {skill: "Excel VBA", amount: 75},
                  {skill: "JavaScript", amount: 70},
                  {skill: "SQL", amount: 65},
                  {skill: "Stata", amount: 40},
                  {skill: "Tableau", amount: 30},
                  {skill: "SAS", amount: 25}
               ]

let skillsLabels = [
                    {skill: "SAS"},
                    {skill: "Tableau"},
                    {skill: "Stata"},
                    {skill: "SQL"},
                    {skill: "JavaScript"},
                    {skill: "Excel VBA"},
                    {skill: "CSS"},
                    {skill: "HTML"},
                    {skill: "R"},
                    {skill: "Python"}
]

const innerHeight = outerHeight - margin.top - margin.bottom; 
const innerWidth = outerWidth - margin.left - margin.right;   
    
    
const largeSkills = d3.select("body").append("svg")
                    .attr("id", "solar-main")
                    .attr("height", outerHeight)
                    .attr("width", outerWidth)
                    .style("background-color","aliceblue")
                    ;

const innerSkills = largeSkills.append("g"); 
innerSkills.attr("transform", "translate(" +margin.left+","+margin.top+")")
; 

var x = d3.scaleLinear()
    .range([0, innerWidth])
    .domain([0, 100]);

var y = d3.scaleBand()
    .range([innerHeight, 0])
    .padding(0.1)
    .domain(skillsData.map(function (d) {return d.skill; }));

innerSkills.selectAll(".bar")
    .data(skillsData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("width", 0)
    .attr("y", function(d) { return y(d.skill); })
    .attr("height", y.bandwidth() - 20)
    .style("fill", "#20B2AA");

innerSkills.append("g")
    .attr("transform", "translate(0," + innerHeight + ")")
    .style("font-size", "16px")
    .style("font-family", "Verdana")
    .style("stroke", "#191970")
    .style("fill", "#191970")
    .call(d3.axisBottom(x).tickSize(5));

innerSkills.append("g")
    .style("fill", "#191970")
    .call(d3.axisLeft(y).tickValues(['', '', '', '', '']));

innerSkills.selectAll(".bar")
    .transition()
    .duration(3000)
    .attr("width", function(d) { return x(d.amount); });

let text = innerSkills.selectAll()
   .data(skillsLabels)
   .join("text")
   .text(d =>  d.skill)
   .attr("y", (d,i) =>  i * 63 + 30)
   .attr("x", 25)
   .style("fill", "white")
   .style("font-weight","1000")
   .style("font-family", "Verdana")
   .style("text-anchor", "right");
}

drawSkills();