export function conciseSentence(text: string): string {
  return text
    // Remove introductory phrases
    .replace(/^(Additionally,\s|Furthermore,\s|Moreover,\s|Also,\s|However,\s|In addition,\s)/i, '')
    .replace(/^(I wanted to|We wanted to|Just wanted to|I would like to|We would like to)\s/i, '')
    .replace(/^(Please note that|Note that|Please|Kindly|As you know)\s/i, '')
    .replace(/^(I am|I'm|We are|We're|They are|They're)\s/i, '')
    // Remove unnecessary phrases
    .replace(/\s*(I think|I believe|In my opinion|From my perspective)\s*/i, ' ')
    .replace(/\s*(it appears that|it seems that|it looks like)\s*/i, ' ')
    // Remove redundant qualifiers
    .replace(/\s*(very|really|quite|basically|actually|literally)\s*/ig, ' ')
    // Remove unnecessary endings
    .replace(/\s*(as well|as well as|in addition to this|on top of that)[,.]\s*$/i, '')
    .replace(/[,\s]*(?:please|thank you|regards|best|sincerely)[.\s]*$/i, '')
    // Clean up whitespace and punctuation
    .replace(/\s+/g, ' ')
    .replace(/\s*[,.]\s*$/, '')
    .trim();
}