function add(num1, num2 = 20) {
    // old style of setting default parameter
    /**
    if(num2 == undefined){
        num2 = 0;
    }
    num2 = num2 || 0;
    */
    return num1 + num2;
}

const total = add(15, 18);
console.log(total);