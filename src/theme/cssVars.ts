import { tokens, type ThemeTokens } from './tokens';

type TokenGroup = Record<string, string>;

type TokenEntries = [keyof ThemeTokens, TokenGroup][];

const prefixMap: Record<keyof ThemeTokens, string> = {
  colors: 'color',
  space: 'space',
  radii: 'radius',
  fontSizes: 'font-size',
  shadows: 'shadow',
};

const toTokenEntries = (theme: ThemeTokens): TokenEntries => [
  ['colors', theme.colors],
  ['space', theme.space],
  ['radii', theme.radii],
  ['fontSizes', theme.fontSizes],
  ['shadows', theme.shadows],
];

export const createCssVars = (theme: ThemeTokens): string => {
  const lines = toTokenEntries(theme).flatMap(([groupName, group]) =>
    Object.entries(group).map(([key, value]) => {
      const prefix = prefixMap[groupName];
      const varName = `--${prefix}-${key}`;
      return `  ${varName}: ${value};`;
    })
  );

  return `:root {\n${lines.join('\n')}\n}`;
};

export const cssVars = createCssVars(tokens);
