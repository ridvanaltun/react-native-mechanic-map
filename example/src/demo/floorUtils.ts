/** Chip label for a level `no` from map payload (unicode minus for basements). */
export function formatFloorLabel(no: number): string {
  if (no === 0) return 'Ground';
  if (no < 0) return `−${Math.abs(no)}`;
  return `+${no}`;
}
