export type MapEventRow = {
  id: string;
  time: string;
  name: string;
  detail?: string;
};

export function formatEventTime(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
    d.getSeconds(),
  )}.${String(d.getMilliseconds()).padStart(3, '0')}`;
}

export function serializeEventDetail(detail: unknown): string | undefined {
  if (detail === undefined) return undefined;
  if (typeof detail === 'string') return detail;
  try {
    return JSON.stringify(detail);
  } catch {
    return String(detail);
  }
}
