import { beginner } from '@/data/question';
import { Problem } from '@/types/problem';

export const typingEn = ({
  key,
  comparisonChar,
}: {
  key: string;
  comparisonChar: string;
}): 'ok' | 'failure' => {
  const result = key.toLowerCase() === comparisonChar.toLowerCase() ? 'ok' : 'failure';
  return result;
};

/**
 * ランダムな問題を返す
 */
export const randomProblem = ({ type }: { type: 'Lowercase' | 'Uppercase' }): Problem => {
  const randomIndex = Math.floor(Math.random() * beginner.length);
  return {
    textJp: beginner[randomIndex].textJp,
    textEn:
      type === 'Lowercase'
        ? beginner[randomIndex].textEn.toLocaleLowerCase()
        : beginner[randomIndex].textEn.toUpperCase(),
  };
};

/**
 * スコアのポイントを計算する
 */
export const calculatePoint = ({
  correctTypeCount,
  missTypeCount,
}: {
  correctTypeCount: number;
  missTypeCount: number;
}) => {
  const point = correctTypeCount * 10 - missTypeCount * 15;
  return point > 0 ? point : 0;
};
