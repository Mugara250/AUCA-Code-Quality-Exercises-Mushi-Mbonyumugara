function numberCommaFormater(n: number) {
    // const numStr = String(n);
    // let charCount = 0;
    // let newNumStr = "";
    // for (let i = numStr.length - 1; i >= 0; i--) {
    //     if (charCount > 0 && charCount % 3 === 0) {
    //         newNumStr += ",";
    //     }
    //     newNumStr += numStr[i];
    //     charCount++;
    // }
    // const result = newNumStr.split("").reverse().join("");
    // return isNaN(+result[0]) && isNaN(+result[1]) ? result[0] + result.slice(2)  : result;
    return n.toLocaleString("en-US");
}

console.log(numberCommaFormater(-420902));
console.log(numberCommaFormater(5678545));