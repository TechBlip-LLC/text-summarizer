import { extractKeywords } from './textProcessing';
import { cleanSentence } from './textCleaner';
import { scoreSentences } from './sentenceScoring';
import { conciseSentence } from './sentenceCleaner';

export function summarizeText(text: string, pointCount: number = 3): string {
  // Split text into sentences
  const sentences = text
    .replace(/([.!?])\s+/g, '$1|')
    .split('|')
    .filter(s => s.length > 10)
    .map(cleanSentence);

  if (sentences.length <= pointCount) {
    return sentences.join('. ');
  }

  // Get important keywords and their scores
  const keywords = extractKeywords(text);
  const keywordScores = new Map(
    keywords.map(k => [k.text, Math.log(1 + k.frequency)])
  );

  // Score and sort sentences
  const scoredSentences = scoreSentences(sentences, keywordScores);
  
  // Select top sentences and make them concise
  return scoredSentences
    .sort((a, b) => b.score - a.score)
    .slice(0, pointCount)
    .sort((a, b) => sentences.indexOf(a.text) - sentences.indexOf(b.text))
    .map(s => conciseSentence(s.text))
    .join('. ');
}