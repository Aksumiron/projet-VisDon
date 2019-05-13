import bb from 'billboard.js';
import "billboard.js/dist/billboard.css";
import './src/styles.css';
import * as formatJson from './src/formatJson.js';
import json from './src/vinConsom.json'

/*
console.log(json)
console.log(formatJson.swissProduction(json, "Total"))
console.log(formatJson.swissProduction(json, "Rouge"))
console.log(formatJson.swissProduction(json, "Blanc"))
console.log(formatJson.years(json))
console.log(formatJson.vinImport(json, "Total"))
console.log(formatJson.vinExport(json, "Total"))
console.log(formatJson.consomTot(json, "Total"))
console.log(formatJson.pourcentLocal(json, "Total"))
*/

var ConsomChart = bb.generate({
  data: {
    columns: [
      ["Rouge", ...formatJson.swissProduction(json, "Rouge")],

    ],
    type: "bar",
    colors: {
      Rouge: "#690707",
      Blanc: "#fff59d"
    },
  },
  bar: {
    width: {
      ratio: 0.5
    }
  },
  axis: {
    x: {
      label: "Année",
      type: "category",
      categories: formatJson.years(json)
    },
    y: {
      label: "hl",
      tick: {
        format: x => `${x/1000}k`
      }
    }
  },

  bindto: "#barChart"
});

setTimeout(function() {
  ConsomChart.load({
    columns: [
      ["Blanc", ...formatJson.swissProduction(json, "Blanc")]
    ]
  });
}, 1000);

/****/
var ProdVSImportChart = bb.generate({
  data: {
    columns: [
      ["Suisse", ...formatJson.swissProduction(json, "Total")],
    ],
    types: {
      Suisse: "area",
      Import: "area-spline",
      Export: "area-spline"
    },
    colors: {
      Suisse: "#d52b1e",
      Import: "#d8ccc0",
      Export: "#28285a"
    }
  },
  axis: {
    x: {
      label: "   Année",
      type: "category",
      categories: formatJson.years(json)
    },
    y: {
      label: "hl",
      tick: {
        format: x => `${x/1000}k`
      }
    }
  },
  bindto: "#areaChart"
});

setTimeout(function() {
  ProdVSImportChart.load({
    columns: [
      ["Import", ...formatJson.vinImport(json, "Total")]
    ]
  });
}, 2000);

setTimeout(function() {
  ProdVSImportChart.load({
    columns: [
      ["Export", ...formatJson.vinExport(json, "Total")]
    ]
  });
}, 2800);
/****/


/**Evol Consom**/
var chart = bb.generate({
  data: {
    columns: [
      ["ConsommationTotale", ...formatJson.consomTot(json, "Total")],
    ],
    type: "spline",
    colors: {
      ConsommationTotale: "#690707"
    }
  },
  axis: {
    x: {
      label: "Année",
      type: "category",
      categories: formatJson.years(json)
    },
    y: {
      label: "hl",
      tick: {
        format: x => `${x/1000}k`
      }
    }
  },
  bindto: "#splineChart"
});
/****/

/****/
var chart = bb.generate({
  data: {
    columns: [
      ["PourcentLocal", formatJson.pourcentLocal(json)]
    ],
    type: "gauge",
  },
  color: {
    pattern: [
      "#d52b1e",
    ],
  },
  size: {
    height: 130
  },
  bindto: "#gaugeChartTot"
});
/****/

/****/
var chart = bb.generate({
  data: {
    columns: [
      ["pourcentLocalBlanc", formatJson.pourcentLocalBlanc(json)]
    ],
    type: "gauge",
  },
  color: {
    pattern: [
      "#fff59d",
    ],
  },
  size: {
    height: 130
  },
  bindto: "#gaugeChartBlanc"
});
/****/

/****/
var chart = bb.generate({
  data: {
    columns: [

      ["pourcentLocalRouge", formatJson.pourcentLocalRouge(json)]
    ],
    type: "gauge",
  },
  color: {
    pattern: [
      "#690707",
    ],
  },
  size: {
    height: 130
  },
  bindto: "#gaugeChartRouge"
});
/****/
