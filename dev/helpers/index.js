export function stringContains(firstString, secondString) {
  const firstStringLowerCase = firstString.toLocaleLowerCase();
  const secondStringLowerCase = secondString.toLocaleLowerCase();
  return firstStringLowerCase.includes(secondStringLowerCase);
}
