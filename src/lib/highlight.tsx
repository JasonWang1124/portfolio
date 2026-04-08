import type { ReactNode } from 'react';

const BOLD_KEYWORDS = [
  '超過 50%',
  '降低移動端開發成本超過 50%',
  '百萬級快取請求',
  '多雲架構',
  'Testing Framework',
  'TDD 開發流程',
  '跨平台部署',
  'Docker 容器化',
];

/**
 * Highlights specific keywords in achievement text with bold styling.
 * Replaces dangerouslySetInnerHTML with safe React rendering.
 */
export function highlightAchievement(text: string): ReactNode {
  const escaped = BOLD_KEYWORDS.map((k) =>
    k.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&')
  );
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    BOLD_KEYWORDS.includes(part) ? (
      <strong key={i} className="text-text font-medium">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
