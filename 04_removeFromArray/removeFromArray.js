let removeFromArray = function(...args) {
    const myArr = args[0];
    console.log(myArr);
    return myArr.filter(item => !args.includes(item))
    };

// Do not edit below this line
module.exports = removeFromArray;
