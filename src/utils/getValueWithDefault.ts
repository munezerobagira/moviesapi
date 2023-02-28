export function getValueWithDefault<T>(value: T | null | undefined, defaultValue: T): T {
  if (!value) return defaultValue;
  return value;
}
