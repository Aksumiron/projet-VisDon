export function filterValues(json, type) {
  return json
    .filter((x) => x.Type === type)
}

export function swissProduction(json, type) {
  return filterValues(json, type)
    .map((x) => { return x.ProdInd })
}

export function vinImport(json, type) {
  return filterValues(json, type)
    .map((x) => { return x.Import })
}

export function vinExport(json, type) {
  return filterValues(json, type)
    .map((x) => { return x.Export })
}

export function consomTot(json, type) {
  return filterValues(json, type)
    .map((x) => { return x.ConsomTot })
}


export function pourcentLocal(json) {
  const pourcentLocal = filterValues(json, "Total")
     .map((x) => {
        return parseInt(x.PourcentLocal, 10)
     })
  const pourcentageTot = pourcentLocal.reduce((x1, x2) => x1 + x2) / pourcentLocal.length
  return pourcentageTot
}

export function pourcentLocalBlanc(json) {
  const pourcentLocalBlanc = filterValues(json, "Blanc")
     .map((x) => {
        return parseInt(x.PourcentLocal, 10)
     })
  const pourcentageBlanc = pourcentLocalBlanc.reduce((x1, x2) => x1 + x2) / pourcentLocalBlanc.length
  return pourcentageBlanc
}

export function pourcentLocalRouge(json) {
  const pourcentLocalRouge = filterValues(json, "Rouge")
     .map((x) => {
        return parseInt(x.PourcentLocal, 10)
     })
  const pourcentageRouge = pourcentLocalRouge.reduce((x1, x2) => x1 + x2) / pourcentLocalRouge.length
  return pourcentageRouge
}

export function years(json) {
  return filterValues(json, "Total")
    .map((x) => {
      if((typeof x.Years) === 'string')
        return parseInt(x.Years.substring(5), 10)
      else
        return x.Years
    })
}
