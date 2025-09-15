function reverseVowels(str: string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const strArr = str.split("");
  const strIndexes: number[] = [];
  for (let index in strArr) {
    if (vowels.includes(strArr[+index].toLowerCase())) strIndexes.push(+index);
  }
  const strIndexesReversed = [...strIndexes].reverse();
  for (let i = 0; i < strIndexes.length; i++) {
    console.log(str[strIndexesReversed[i]], strIndexesReversed[i]);
    strArr.splice(strIndexes[i], 1, str[strIndexesReversed[i]]);
  }
  return strArr.join("");
}
