export default function () {
  const colors = [
    "#b0003a",
    "#001970",
    "#666ad1",
    "#303f9f",
    "#42a5f5",
    "#80d6ff",
    "#0077c2",
    "#84ffff",
    "#00b8d4",
    "#0088a3",
  ];
  const { length } = colors;

  return colors[Math.floor(Math.random() * length)];
}
