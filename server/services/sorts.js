'use strict';
// var Promise = require('bluebird');
// var Rates = Promise.promisifyAll(require('../database/rates'));


exports.mergingSort = function (data, attrToSort) {
  //data = tableau d'objet
  //attrToSort = le nom de l'attribut sur lequel il faut trier
  //console.log('entree'+data);
  return mergingSortPrivate(data, attrToSort);

};

function mergingSortPrivate(data, attrToSort){

  if (data.length === 0 || data.length === 1) { //tableau vide ou à un élément considéré trié
    return data;
  }
  else if (data.length === 2) {
    //console.log('test' +data);
    if(data[0][attrToSort] > data[1][attrToSort]){
      var temp = data[0];
      data[0] = data[1];
      data[1] = temp;
    }
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
      console.log(smallest[0]['num_acc']);
    }

    return sortedData
  }
}


exports.selectionSort = function (data, attrToSort) {

  //data = tableau d'objet


  return false;
};
