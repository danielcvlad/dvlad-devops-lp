import en from './en.json';
import de from './de.json';

export type Language = 'en' | 'de';

export const translations = { en, de };

export function t(key: string, lang: Language, params: Record<string, string> = {}): string {
  const keys = key.split('.');
  let value: unknown = translations[lang];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // fallback to key if not found
    }
  }
  if (typeof value !== 'string') return key;
  // Replace {placeholder} params
  return value.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? `{${k}}`);
}
