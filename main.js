function getCounter() {
    var result = 0;
    return function sum(a) {
        return result += a;
    }
}

var counter = getCounter();
counter(4);
var a = counter(1);
console.log(a);

function getValueStore() {
    var array = [];
    return function() {
        if (arguments.length == 0) {
            array.length = 0;
        }
        for (var i = 0; i < arguments.length; i++) {
            array.push(arguments[i]);
        }
        return [...array];
    }
}

var valueStore = getValueStore();
valueStore(3);
valueStore(3,5);
 var result = valueStore({name:'Vasyl'});
console.log(result);
valueStore();
console.log(valueStore(4));