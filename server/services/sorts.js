'use strict';
// var Promise = require('bluebird');
// var Rates = Promise.promisifyAll(require('../database/rates'));


exports.mergingSort = function (data, attrToSort) {
  //data = tableau d'objet
  //attrToSort = le nom de l'attribut sur lequel il faut trier

  var startTime = new Date().getTime();
  var elapsedTime = 0;

  var sortedData = mergingSortPrivate(data, attrToSort);

  elapsedTime = new Date().getTime() - startTime;

  console.log(elapsedTime);

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
    for(var i = 0; i < data.length; i++){
      smallest = tab1[0]===undefined ? tab2.splice(0,1) : tab2[0]===undefined? tab1.splice(0,1) : tab1[0][attrToSort]>tab2[0][attrToSort]? tab2.splice(0,1):tab1.splice(0,1) ;
      sortedData.push(smallest[0]);
    }

    return sortedData
  }
}


exports.selectionSort = function (data, attrToSort) {

  //data = tableau d'objet


  return false;
};
