let removeFromArray = function(...args) {
    const myArr = args[0];
    return myArr.filter((val) => !args.includes(val))
    };

// Do not edit below this line
module.exports = removeFromArray;
