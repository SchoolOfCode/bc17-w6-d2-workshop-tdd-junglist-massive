export function calculateScrabbleScore(word) {
  const onePointLetters = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"]
  const bigLetterArray = [
    ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
    ["D", "G"],
    ["B", "C", "M", "P"],
    ["F", "H", "V", "W", "Y"],
    ["K"],
    [],
    [],
    ["J", "X"],
    [],
    ["Q", "Z"]
  ]
  for (let i = 0; i < bigLetterArray.length; i++){
    if (bigLetterArray[i].includes(word)){
      return(i+1);
    }
  }
  return(0);
}
