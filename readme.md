# Consommation de Vin en Suisse

Le travail effectué a consisté à analyser les derniers de 20 ans (de 1997 à 2017) de la consommation de vin en Suisse.


## Les données

Le jeux de données était pris de la ressource opendata.swiss sur les sujet "Consummation de vin".
 [lien](https://opendata.swiss/fr/dataset/weinverbrauch1)

 - Comme vous pouvez remarquer, il est possible de télécharger les données seulement dans le format .xls depuis le site web (ce qui a été fait).

  ![fichier '.xls'](https://github.com/Aksumiron/projet-VisDon/blob/master/img/consomVinExel.png)
  *Source data/consomVin-dataOrigin.xlsx*


 - En deuxième temps il a fallu de transformer le fichier en format "Comma-separated values" .csv, pour ensuite pouvoir les transformer dans un json adapté.

   ![Le fichier modifié et converti en .csv](https://github.com/Aksumiron/projet-VisDon/blob/master/img/consomVinCsv.png)
   *Source data/vin.csv*

   ![Le fichier '.json' après la conversion](https://github.com/Aksumiron/projet-VisDon/blob/master/img/exJson.png)
   *Source src/vinConsom.json*
   *Dans le but d'éviter les éventuelles erreurs au niveau de la conversation le fichier .csv a été transformé avec un générateur [CSVJSON](https://www.csvjson.com/csv2json)*


   Les données de base étaient simplifiées et re-structures dans le but d'avoir une meilleure implémentation.
   Seules les données nécessaires pour la visualisation ont été gardées :


   | "Years": "1996/1997", | -> L'année de production|
   |--|--|
   |  "Type": "Rouge",     |  -> Type de vin (Rouge / Blanc / Total(répresent la somme de deux))|
   |--|--|
   |   "ProdInd": 577687,     |  -> Production indigène|
   |--|--|
   |    "Import": 1423325,     |   -> Importation de vin de table|
   |--|--|
   |    "Export": 7612,    |   -> Exportation|
   |--|--|
   |    "ConsomTot": 1992388,      |  -> La quantité de vin consommée par type Rouge / Blanc / les deux (Total) d'origine Suisse et importé|
   |--|--|
   |    "ConsomLocal": 493468,      |  -> La quantité de vin consommée par type Rouge / Blanc / les deux (Total) seulement d'origine Suisse|
   |--|--|
   |    "PourcentLocal": "24,8"      |  -> Le pourcentage qui répresent la quantité de vin d'origine Suisse consommée par type Rouge / Blanc / les deux (Total)|







   *Les informations sur le Vin destiné à la fabrication du vinaigre et sur les Stocks à la fin de l'année n'ont pas été retenues.*

## Le choix de données


  - Production indigène
    La quantité de vin (par type : Rouge ou Blanc) produite par année depuis 1997 et jusqu'au 2017 en hectolitres (1 hl = 100 l).
  - Production indigène • Import • Export
    La compairaison des totaux du vin produits en Suisse avec les totaux du vin importé exporté.
  - Consommation

    20 ans sur une ligne

    Pourcentage de vin d'origine Suisse consommé en Suisse
    Vin blanc d'origine Suisse consommé par rapport à tout le vin produit en Suisse
    Vin rouge d'origine Suisse consommé par rapport à tout le vin produit en Suisse

## Visualisation de données choisies

billboard.js
webpack pour afficher tout sur une page web


## Le choix du type de représentation

- Bar Chart
- Line - area chart  - tendance + la quantité
- Line chart -tendance
- Gauge Chart

## Le but de la visualisation

Attirer attention sur le sujet de la consommation de vin.
Examiner les tendances de la consommation pendant les dernières 20 années.

##  Le publique cible
