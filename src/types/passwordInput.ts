export interface InputObject {
  value: string;
  status: string;
}

export enum SafetyLevels {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  STRONG = 'STRONG',
  INVALID = 'INVALID',
}
