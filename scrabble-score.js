export function calculateScrabbleScore(word) {
  const onePointLetters = ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"]
  if (onePointLetters.includes(word)) {
    return(1);
  }
}
