export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const colorCode = (color: string): number => {
  const index = COLORS.indexOf(color.toLowerCase());
  if (index === -1) {
    throw new Error(`Invalid color: ${color}. Valid colors: ${COLORS.join(', ')}`);
  }
  return index;
}