export function getMinutesFromMiliseconds(value: number) {
  const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, value));
  const parts = [d.getUTCMinutes(), d.getUTCSeconds()];
  const formatted = parts.map(s => String(s).padStart(2, '0')).join(':');

  return formatted;
}
export function getMinutesFromSeconds(value: number) {
  const d = new Date(Date.UTC(0, 0, 0, 0, 0, value));
  const parts = [d.getUTCMinutes(), d.getUTCSeconds()];
  const formatted = parts.map(s => String(s).padStart(2, '0')).join(':');

  return formatted;
}
