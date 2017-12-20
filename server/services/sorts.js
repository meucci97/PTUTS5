'use strict';
// var Promise = require('bluebird');
// var Rates = Promise.promisifyAll(require('../database/rates'));


exports.mergingSort = function (data, attrToSort) {
  //data = tableau d'objet
  //attrToSort = le nom de l'attribut sur lequel il faut trier

  var startTime = Date.now();
  var elapsedTime = 0;

  var sortedData = mergingSortPrivate(data, attrToSort);

  elapsedTime = Date.now() - startTime;

  console.log('Tri Fusion executé en '+elapsedTime+ 'ms');

  return sortedData;

};

function mergingSortPrivate(data, attrToSort){

  if (data.length === 0 || data.length === 1) { //tableau vide ou à un élément considéré trié
    return data;
  }
  else{
    var sortedData  = [];
    var tab1 = mergingSortPrivate( data.slice(0,(data.length/2)), attrToSort);
    var tab2 = mergingSortPrivate(data.slice(data.length/2,data.length), attrToSort);

    var smallest;
    var length = data.length;
    for(var i = 0; i < length; i++){
      smallest = tab1[0]===undefined ? tab2.splice(0,1) : tab2[0]===undefined? tab1.splice(0,1) : tab1[0][attrToSort]>tab2[0][attrToSort]? tab2.splice(0,1):tab1.splice(0,1) ;
      sortedData.push(smallest[0]);
    }

    return sortedData
  }
}


exports.selectionSort = function (data, attrToSort) {

  //data = tableau d'objet
  //attrToSort = le nom de l'attribut sur lequel il faut trier

  var startTime = Date.now();
  var elapsedTime = 0;

  var sortedData = selectionSortPrivate(data, attrToSort);

  elapsedTime = Date.now() - startTime;

  console.log('Tri par sélection executé en '+elapsedTime+ 'ms');

  return sortedData;

  return false;
};

function selectionSortPrivate(data, attrToSort){

  var smallestIndex;
  var length = data.length;

  for(var indexTri=0; indexTri < length; indexTri++){
    smallestIndex = indexTri;

    for(var i = indexTri; i < length; i++){
      smallestIndex = data[smallestIndex][attrToSort]>data[i][attrToSort]? i:smallestIndex;

    }
    var b = data[indexTri];
    data[indexTri] = data[smallestIndex];
    data[smallestIndex] = b;

  }
  return data;

}
