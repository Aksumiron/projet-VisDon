# Consommation de Vin en Suisse

Le travail consistait à analyser les derniers 20 ans (de 1997 à 2017) de la consommation de vin en Suisse.

## Les données

Le jeu de données a été pris de la ressource opendata.swiss sur les sujet "Consommation de vin". [lien](https://opendata.swiss/fr/dataset/weinverbrauch1)

Il est possible de télécharger les données seulement dans le format .xls depuis le site web.

![fichier '.xls'](https://github.com/Aksumiron/projet-VisDon/blob/master/img/consomVinExel.png)

_Source [data/consomVin-dataOrigin.xlsx](https://github.com/Aksumiron/projet-VisDon/blob/master/data/consomVin-dataOrigin.xlsx)_

Il a fallu de convertir le fichier .xls en format "Comma-separated values" .csv, pour ensuite le transformer en json adapté.

![Le fichier modifié et converti en .csv](https://github.com/Aksumiron/projet-VisDon/blob/master/img/consomVinCsv.png)

_Source [data/vin.csv](https://github.com/Aksumiron/projet-VisDon/blob/master/data/vin.csv)_

```javascript
   {
     "Years": "1996/1997",
     "Type": "Rouge",
     "ProdInd": 577687,
     "Import": 1423325,
     "Export": 7612,
     "ConsomTot": 1992388,
     "ConsomLocal": 493468,
     "PourcentLocal": "24,8"
   }
```

_Source [src/vinConsom.json](https://github.com/Aksumiron/projet-VisDon/blob/master/src/vinConsom.json)_

_Dans le but d'éviter les erreurs de la conversation possibles, le fichier .csv a été transformé avec un générateur [CSVJSON](https://www.csvjson.com/csv2json)_

Les données téléchargées ont été simplifiées et re-structures différement pour une meilleure implémentation. Seules les données nécessaires pour la visualisation ont été retenues :

JSON          | Les données
------------- | -----------------------------------------------------------------------------------------------------------------------
Years         | -> L'année de production
Type          | -> Type de vin (Rouge / Blanc / Total(répresent la somme de deux))
ProdInd       | -> Production indigène
Import        | -> Importation de vin de table
Export        | -> Exportation
ConsomTot     | -> La quantité de vin consommée par type Rouge / Blanc / les deux (Total) d'origine Suisse et importé
ConsomLocal   | -> La quantité de vin consommée par type Rouge / Blanc / les deux (Total) seulement d'origine Suisse
PourcentLocal | -> Le pourcentage qui répresent la quantité de vin d'origine Suisse consommée par type Rouge / Blanc / les deux (Total)

_Les informations sur le Vin destiné à la fabrication du vinaigre et sur les Stocks à la fin de l'année n'ont pas été retenues._

## Le choix de données

- Production indigène

  La quantité de vin (par type : Rouge ou Blanc) produite par année depuis 1997 jusqu'au 2017 en hectolitres (1 hl = 100 l).

  > Les données prises :

  > ```
  > PordInt Rourge ;
  > ProdInt Blanc ;
  > Axes : X - Years, Y - hl
  > ```

- Production indigène • Import • Export

  La comparaison de la quantité de vin produit en Suisse avec la quantité de vin importé et exporté.

  > Les données prises :

  > ```
  > ProdInt Total ;
  > Import Total ;
  > Export Total ;
  > Axes : X - Years, Y - hl
  > ```

- Consommation

  **20 ans sur une ligne** : Le graphique montre l'évolution de la consommation de vin par année.

  > Les données prises :

  > ```
  > ConsomTot Total ;
  > Axes : X - Years, Y - hl
  > ```

  **Pourcentage de vin d'origine Suisse consommé en Suisse** : Le graphique montre combien vin produit un Suisse est également consommé en Suisse

  > Les données prises :

  > ```
  > PourcentLocal Total
  > ```

  Pour calculer le moyenne de tous les pourcentages annuels la fonction suivante était utilisée :

  ```javascript
  export function pourcentLocal(json) {
      const pourcentLocal = filterValues(json, "Total")
         .map((x) => {
            return parseInt(x.PourcentLocal, 10)
         })
      const pourcentageTot = pourcentLocal.reduce((x1, x2) => x1 + x2) / pourcentLocal.length
      return pourcentageTot
    }
  ```

  **Vin blanc d'origine Suisse consommé par rapport à tout le vin produit en Suisse** : Le graphique montre combien de vin blanc d'origine Suisse est consommé en Suisse

  > Les données prises :

  > ```
  > PourcentLocal Blanc
  > ```

  Pour calculer le moyenne de tous les pourcentages annuels la fonction suivante était utilisée :

  ```javascript
  export function pourcentLocalBlanc(json) {
    const pourcentLocalBlanc = filterValues(json, "Blanc")
       .map((x) => {
          return parseInt(x.PourcentLocal, 10)
       })
    const pourcentageBlanc = pourcentLocalBlanc.reduce((x1, x2) => x1 + x2) / pourcentLocalBlanc.length
    return pourcentageBlanc
  }
  ```

  **Vin rouge d'origine Suisse consommé par rapport à tout le vin produit en Suisse** : Le graphique montre combien de vin rouge d'origine Suisse est consommé en Suisse

  > Les données prises :

  > ```
  > PourcentLocal Rouge
  > ```

  Pour calculer le moyenne de tous les pourcentages annuels la fonction suivante était utilisée :

  ```javascript
  export function pourcentLocalRouge(json) {
    const pourcentLocalRouge = filterValues(json, "Rouge")
       .map((x) => {
          return parseInt(x.PourcentLocal, 10)
       })
    const pourcentageRouge = pourcentLocalRouge.reduce((x1, x2) => x1 + x2) / pourcentLocalRouge.length
    return pourcentageRouge
  }
  ```

## Visualisation de données choisies

Pour la construction des graphiques la librairie [billboard.js](https://naver.github.io/billboard.js/) a été utilisée et [Webpack](https://webpack.js.org/) pour afficher tout le contenu sur une page web.

## Le choix du type de représentation

- **Bar Chart** pour la production indigène pour pouvoir comparer la production de vin blanc avec la production de vin rouge.
- **Area Chart** pour démontrer la quantité de vin produit en Suisse vis-versa la quantité de vin importé et exporté.
- **Line Chart** pour visualiser la tendance de consommation sur les derniers 20 ans
- **Gauge Chart** pour démontrer les pourcentages qui concernent les taux de consommation différents

## Le but de la visualisation

La visualisation était réalisée dans le but uniquement informatif dans le cadre du cours DataVis.

La principale idée était d'attirer attention des spectateurs sur le sujet de la consommation de vin afin de pouvoir définir quelques tendances autour de ce sujet.



## Le publique cible

Les étudiants en ingénierie des médias qui cherchent à savoir les tendances générales dans le domaine de vin. Les amateurs de vin qui veulent s'informer sur les tendances dans ce domaine de 20 ans derniers.
