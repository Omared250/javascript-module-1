var randomArray = [ 
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
];

function arrayOnlyStrings(strs) {
    var isString = strs.filter((str) => typeof str === 'string');
    var upperStrings = isString.map((str2) => str2.toUpperCase());
    return upperStrings;    
}
console.log(arrayOnlyStrings(randomArray));