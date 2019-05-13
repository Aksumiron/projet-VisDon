# Consommation de Vin en Suisse

Le travail effectué a consisté à analyser les derniers de 20 ans (de 1997 à 2017) de la consommation de vin en Suisse.


## Les données

Le jeux de données était pris de la ressource opendata.swiss sur les sujet "Consummation de vin".
 [lien](https://opendata.swiss/fr/dataset/weinverbrauch1)

 - Comme vous pouvez remarquer, il est possible de télécharger les données seulement dans le format .xls depuis le site web (ce qui a été fait).

  ![fichier '.xls'](https://github.com/Aksumiron/projet-VisDon/blob/master/img/consomVinExel.png)
  *Source [data/consomVin-dataOrigin.xlsx](https://github.com/Aksumiron/projet-VisDon/blob/master/data/consomVin-dataOrigin.xlsx)*


 - En deuxième temps il a fallu de transformer le fichier en format "Comma-separated values" .csv, pour ensuite pouvoir les transformer dans un json adapté.

   ![Le fichier modifié et converti en .csv](https://github.com/Aksumiron/projet-VisDon/blob/master/img/consomVinCsv.png)
   *Source [data/vin.csv](https://github.com/Aksumiron/projet-VisDon/blob/master/data/vin.csv)*

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
   *Source (src/vinConsom.json)*

   *Dans le but d'éviter les éventuelles erreurs au niveau de la conversation le fichier .csv a été transformé avec un générateur [CSVJSON](https://www.csvjson.com/csv2json)*


   Les données de base étaient simplifiées et re-structures dans le but d'avoir une meilleure implémentation.
   Seules les données nécessaires pour la visualisation ont été gardées :

   |JSON| Les données|
   |--|--|
   | Years| -> L'année de production|
   |  Type|  -> Type de vin (Rouge / Blanc / Total(répresent la somme de deux))|
   |  ProdInd|  -> Production indigène|
   |  Import|   -> Importation de vin de table|
   |  Export|   -> Exportation|
   |  ConsomTot|  -> La quantité de vin consommée par type Rouge / Blanc / les deux (Total) d'origine Suisse et importé|
   |  ConsomLocal|  -> La quantité de vin consommée par type Rouge / Blanc / les deux (Total) seulement d'origine Suisse|
   |  PourcentLocal|  -> Le pourcentage qui répresent la quantité de vin d'origine Suisse consommée par type Rouge / Blanc / les deux (Total)|



   *Les informations sur le Vin destiné à la fabrication du vinaigre et sur les Stocks à la fin de l'année n'ont pas été retenues.*

## Le choix de données


  - Production indigène

    La quantité de vin (par type : Rouge ou Blanc) produite par année depuis 1997 et jusqu'au 2017 en hectolitres (1 hl = 100 l).

  - Production indigène • Import • Export

    La comparaison des totaux du vin produite en Suisse avec les totaux du vin importé exporté.

  - Consommation

    20 ans sur une ligne

    Pourcentage de vin d'origine Suisse consommé en Suisse
    Vin blanc d'origine Suisse consommé par rapport à tout le vin produit en Suisse
    Vin rouge d'origine Suisse consommé par rapport à tout le vin produit en Suisse

## Visualisation de données choisies

Pour la construction des graphiques la librairie [billboard.js](https://naver.github.io/billboard.js/) a été choisie et
[Webpack](https://webpack.js.org/) pour afficher tout le contenu sur une page web.


## Le choix du type de représentation

- Bar Chart pour la production indigène pour pouvoir comparer la production de vin blanc vs. la production de vin rouge.
- Area Chart pour démontrer la quantité de vin produit en Suisse vis-versa le vin importé ou exporté.
- Line Chart pour visualiser la tendance de consommation sur les derniers 20 ans
- Gauge Chart pour démontrer les pourcentages qui concernent les taux de consommation différents

## Le but de la visualisation

La visualisation était réalisée dans le but uniquement informatif dans le cadre du cours DataVis.  
Attirer attention sur le sujet de la consommation de vin.
Examiner les tendances de la consommation pendant les dernières 20 années.


##  Le publique cible

Les étudiants en ingénierie des médias qui cherchent à savoir les tendances générales dans le domaine du vin.
Les amateurs du vin qui veulent s'informer sur les tendances dans le domaine du vin de 20 ans derniers.
