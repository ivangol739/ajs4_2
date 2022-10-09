export default function sortHealth(data) {
  return data.sort((a, b) => b.health - a.health);
}
