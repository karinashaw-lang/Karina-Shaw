import type { Condition } from './types';

export interface BankQuestion {
  question: string;
  ticker: string;
  condition: Condition;
  benchmark?: string;
}

// Rotating across indices, mega-caps, crypto (spec §3.1).
export const QUESTION_BANK: BankQuestion[] = [
  { question: 'Will SPY close green today?', ticker: 'SPY', condition: 'close>open' },
  { question: 'Will NVDA beat the market today?', ticker: 'NVDA', condition: 'outperform', benchmark: 'SPY' },
  { question: 'Will Bitcoin be higher at 4:00 PM than yesterday at 4:00 PM?', ticker: 'BTC', condition: 'close>prevClose' },
  { question: 'Will the Nasdaq-100 (QQQ) close green today?', ticker: 'QQQ', condition: 'close>open' },
  { question: 'Will TSLA beat the market today?', ticker: 'TSLA', condition: 'outperform', benchmark: 'SPY' },
  { question: 'Will small caps (IWM) beat the S&P today?', ticker: 'IWM', condition: 'outperform', benchmark: 'SPY' },
  { question: 'Will AAPL close green today?', ticker: 'AAPL', condition: 'close>open' },
  { question: 'Will ETH be higher at 4:00 PM than yesterday at 4:00 PM?', ticker: 'ETH', condition: 'close>prevClose' },
  { question: 'Will META beat the market today?', ticker: 'META', condition: 'outperform', benchmark: 'SPY' },
  { question: 'Will MSFT close green today?', ticker: 'MSFT', condition: 'close>open' },
  { question: 'Will AMZN beat the Nasdaq-100 today?', ticker: 'AMZN', condition: 'outperform', benchmark: 'QQQ' },
  { question: 'Will the Dow (DIA) close green today?', ticker: 'DIA', condition: 'close>open' },
];

export const READINGS = [
  'Tape looked heavy all afternoon. Sellers into close.',
  'Breadth is fine, this is a buy-the-dip crowd.',
  'Gap fill is the path of least resistance.',
  'Rate cut chatter + month-end flows. Easy.',
  'Everyone is long, so I fade it.',
  'Vol crush after the print, drift up.',
  'Chart says nothing. Gut says yes.',
  'Dollar ripping, risk-off into the bell.',
  'Same setup as Tuesday. Same answer.',
  'Semis lead, everything else follows.',
  'Closing auction imbalance leans buy.',
  'Coin flip, but I trust the trend.',
];
