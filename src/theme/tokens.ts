export const tokens = {
  colors: {
    background: '#f8f9fb',
    surface: '#ffffff',
    text: '#1b1b1f',
    muted: '#5f616e',
    border: '#e3e4e8',
    primary: '#3a63f3',
    primarySoft: '#e7ecff',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
  },
  radii: {
    sm: '6px',
    md: '12px',
    lg: '20px',
  },
  fontSizes: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2rem',
  },
  shadows: {
    sm: '0 1px 3px rgba(16, 24, 40, 0.12)',
    md: '0 8px 20px rgba(16, 24, 40, 0.12)',
  },
} as const;

export type ThemeTokens = typeof tokens;
