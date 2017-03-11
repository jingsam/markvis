const fs = require('fs');
const md = require('markdown-it')();
const vis = require('./index.js');

const testStr = md.use(vis).render(`
# Hello World

I'm **testing**!

## Test

\`\`\`js
console.log('language javascript')
\`\`\`

\`\`\`vis
{
  "description": "A simple bar chart with embedded data that uses a filter and calculate.",
  "data": {
    "values": [
      {"a": "A","b": 28},
      {"a": "B","b": 55},
      {"a": "C","b": 43},
      {"a": "G","b": 19},
      {"a": "H","b": 87},
      {"a": "I","b": 52},
      {"a": "D","b": 91},
      {"a": "E","b": 81},
      {"a": "F","b": 53}
    ]
  },
  "transform": {
    "calculate": [{"field": "b2","expr": "2*datum.b"}],
    "filter": "datum.b2 > 60"
  },
  "mark": "bar",
  "encoding": {
    "y": {"field": "b2", "type": "quantitative"},
    "x": {"field": "a", "type": "ordinal"}
  }
}
\`\`\`
`);

console.log(testStr);

fs.writeFile('test.html', testStr, (err) => {
  if (err) throw err;
  console.log('test saved!');
});
