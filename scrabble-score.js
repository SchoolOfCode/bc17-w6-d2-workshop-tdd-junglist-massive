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

  let score=0;

  for(let j = 0; j < word.length; j++){
    let letter=word.substring(j,1)
    for (let i = 0; i < bigLetterArray.length; i++){

      if (bigLetterArray[i].includes(letter)){
        score=score+i+1;
      }
    }

  }
  return score;
}