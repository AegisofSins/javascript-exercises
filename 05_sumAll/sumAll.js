let sumAll = function(val1, val2) {
    let sumAdded =0;

    if ((!Number.isInteger(val1)) || (!Number.isInteger(val2))) return 'ERROR';
    if ((val1 < 0 || val2 < 0)) return 'ERROR';
    if(val1 >= val2){
        [val1,val2]=[val2,val1]
    };
   
    for (let i = val1; i <= val2; i++){
                sumAdded += i;
        }
        return sumAdded;
    };

// Do not edit below this line
module.exports = sumAll;
