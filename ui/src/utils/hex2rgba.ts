export function hex2rgba(hex: string, opacity = 0.5) {
  const tempHex = hex.replace('#', '');
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
}
