'use strict';
// var Promise = require('bluebird');
// var Rates = Promise.promisifyAll(require('../database/rates'));


exports.mergingSort = function (data, attrToSort) {
  //data = tableau d'objet
  //attrToSort = le nom de l'attribut sur lequel il faut trier

  let startTime = Date.now();
  let elapsedTime;

  let sortedData = mergingSortPrivate(data, attrToSort);

  elapsedTime = Date.now() - startTime;

  console.log('Tri Fusion executé en '+elapsedTime+ 'ms');

  return {
    "data": sortedData,
    "time": elapsedTime
  };
};

function mergingSortPrivate(data, attrToSort){

  if (data.length === 0 || data.length === 1) { //tableau vide ou à un élément considéré trié
    return data;
  }
  else{
    let sortedData = [];
    let tab1 = mergingSortPrivate(data.slice(0, (data.length / 2)), attrToSort);
    let tab2 = mergingSortPrivate(data.slice(data.length / 2, data.length), attrToSort);

    let smallest;
    let length = data.length;
    for(let i = 0; i < length; i++){
      smallest = tab1[0]===undefined ? tab2.splice(0,1) : tab2[0]===undefined? tab1.splice(0,1) : tab1[0][attrToSort]>tab2[0][attrToSort]? tab2.splice(0,1):tab1.splice(0,1) ;
      sortedData.push(smallest[0]);
    }

    return sortedData
  }
}


exports.selectionSort = function (data, attrToSort) {

  //data = tableau d'objet
  //attrToSort = le nom de l'attribut sur lequel il faut trier

  let startTime = Date.now();
  let elapsedTime;

  let sortedData = selectionSortPrivate(data, attrToSort);

  elapsedTime = Date.now() - startTime;

  console.log('Tri par sélection executé en '+elapsedTime+ 'ms');

  return {
    "data": sortedData,
    "time": elapsedTime
  };
};

function selectionSortPrivate(data, attrToSort){

  let smallestIndex;
  let length = data.length;

  for(let indexTri=0; indexTri < length; indexTri++){
    smallestIndex = indexTri;

    for(let i = indexTri; i < length; i++){
      smallestIndex = data[smallestIndex][attrToSort]>data[i][attrToSort]? i:smallestIndex;

    }
    let b = data[indexTri];
    data[indexTri] = data[smallestIndex];
    data[smallestIndex] = b;

  }
  return data;

}
