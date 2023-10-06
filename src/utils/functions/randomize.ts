export function randomize<T>(array: T[]): T[] {
  const randomized = [...array];
  for (let i = randomized.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = randomized[i];
    randomized[i] = randomized[j];
    randomized[j] = tmp;
  }

  return randomized;
}
