export interface ScoredSentence {
  text: string;
  score: number;
  keywords: string[];
}

export function scoreSentences(
  sentences: string[], 
  keywordScores: Map<string, number>
): ScoredSentence[] {
  return sentences.map((sentence, index) => {
    const words = sentence.toLowerCase().split(/\s+/);
    const sentenceKeywords = words.filter(word => keywordScores.has(word));
    
    const keywordScore = sentenceKeywords.reduce(
      (score, word) => score + (keywordScores.get(word) || 0),
      0
    );
    
    const positionScore = 1 / (1 + index * 0.1);
    
    return {
      text: sentence,
      score: keywordScore * positionScore,
      keywords: sentenceKeywords
    };
  });
}