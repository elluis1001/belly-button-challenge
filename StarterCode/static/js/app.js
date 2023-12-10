// 1.)  Use the D3 library to read in samples.json from the URL:
    //https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'
d3.json(url).then(data => {
    console.log('Data:', data);
});

//2.)  Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//dropdown menu
function init(){
    let selector = d3.select("#selDataset");
    d3.json(url).then(data => {
        let sampleNames = data.names;
        for (let i = 0; i < sampleNames.length; i++){
            selector
              .append("option")
              .text(sampleNames[i])
              .property("value", sampleNames[i]);
          };
        let firstSample = sampleNames[0];
          buildCharts(firstSample);
    });
}

function buildCharts(sample){
    console.log(`buildChart(${sample})`);    
        
    let trace1 = {
        x: sample_values,
        y: otu_ids
        type: 'bar'
    };

    let bar = [trace1];

    let layout = {
        title = "Top 10 OTUs"
    };
        
    Plotly.newPlot('plot', bar, layout)
};
    
init();
