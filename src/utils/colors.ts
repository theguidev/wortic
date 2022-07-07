
import { Difficulty } from '../types';

export function getColorByDifficulty(difficulty: Difficulty) {
  switch (difficulty) {
    case "easy":
      return "green";
    case "medium":
      return "yellow";
    case "hard":
      return "orange";
    case "expert":
      return "red";
  }
}