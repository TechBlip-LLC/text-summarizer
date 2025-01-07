export function cleanSentence(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^\w/, c => c.toUpperCase());
}