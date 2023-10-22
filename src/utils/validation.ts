import { SafetyLevels } from 'src/types';

const regexArray = [
  { name: 'letters', regex: /[a-zA-Z]+/ },
  { name: 'symbols', regex: /[$-/:-?{-~!"^_@`\[\]]/ },
  { name: 'numbers', regex: /[0-9]+/ },
];

export function checkPasswordSafety(password: string) {
  const passwordComplexity = regexArray.reduce<number>((acc, item) => {
    if (item.regex.test(password)) {
      acc++;
    }

    return acc;
  }, 0);

  switch (passwordComplexity) {
    case 1: {
      return SafetyLevels.EASY;
    }
    case 2: {
      return SafetyLevels.MEDIUM;
    }
    case 3: {
      return SafetyLevels.STRONG;
    }
    default: {
      return '';
    }
  }
}
