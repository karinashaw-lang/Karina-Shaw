/**
 * A small fixed list rather than a free-text field — ElevenLabs supports
 * many more languages, but this keeps the picker simple and every value
 * guaranteed valid. Split out from src/lib/integrations/elevenlabs.ts
 * (which is server-only) since the request form needs this list client-side.
 */
export const DUB_LANGUAGES = [
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "pt", label: "Portuguese" },
  { code: "ja", label: "Japanese" },
  { code: "hi", label: "Hindi" },
] as const;

export type DubLanguageCode = (typeof DUB_LANGUAGES)[number]["code"];

export function dubLanguageLabel(code: string): string {
  return DUB_LANGUAGES.find((l) => l.code === code)?.label ?? code;
}
