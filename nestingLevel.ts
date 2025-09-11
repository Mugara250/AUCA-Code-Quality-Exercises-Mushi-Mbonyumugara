function nestingLevel(arr: any[], nestedCount = 0) {
    if (!arr.some(item => Array.isArray(item))) return { nestingLevel: nestedCount, flattenedArray: arr };
    nestedCount++;
    return nestingLevel(arr.flat(), nestedCount);
}

console.log(nestingLevel([1, 2, 3, 4, [3, 4, 6, [2, 3, 5]]]));