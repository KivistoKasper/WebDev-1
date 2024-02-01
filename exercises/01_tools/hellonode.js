const _ = require("lodash");
const ver = _.VERSION;
console.log(ver);

//var arr = ['eki', 'jouni', 'markku'];

hithere = function(array){
    return _.last(array) + ' and ' + _.head(array);
}

//console.log(arr);
//console.log(hithere(arr));

module.exports = hithere;