import { calculateScrabbleScore } from "./scrabble-score";
import { expect, test } from 'vitest'

/*
test('A', () => {
  expect.soft(calculateScrabbleScore("A")).toBe(1)
  })
*/

test.each(
  [ "A", 1],
  [ "A", 1],
  [ "B", 3],
  [ "E", 1],
  [ "I", 1],
  [ "L", 1],
  [ "N", 1],
  [ "O", 1],
  [ "R", 1],
  [ "S", 1],
  [ "T", 1],
  [ "U", 1])(
  'calculateScrabbleScore(%s) => %i', (a, expected) => {
    expect(calculateScrabbleScore(a)).toBe(expected)
  }
)