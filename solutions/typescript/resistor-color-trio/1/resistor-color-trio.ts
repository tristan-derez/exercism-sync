const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export function decodedResistorValue(colors: string[]): string {
  const baseNumber = COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1])
  const multiplier = COLORS.indexOf(colors[2]);
  const totalOhms = baseNumber * 10 ** multiplier;
  
  if (totalOhms >= 1e9) {
    return `${totalOhms / 1e9} gigaohms`;
  }
  
  if (totalOhms >= 1e6) {
    return `${totalOhms / 1e6} megaohms`;
  }
  
  if (totalOhms >= 1e3) {
    return `${totalOhms / 1e3} kiloohms`;
  }
  
  return `${totalOhms} ohms`;
}