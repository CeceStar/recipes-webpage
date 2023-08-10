import { OneRecipe } from "myTypes";

export default function shuffleArray(props: OneRecipe[]) {
  const shuffled = props
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
}
