export const defaultTheme = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#446DF6',
    light: 'rgb(105, 138, 247)',
    dark: 'rgb(47, 76, 172)',
    contrastText: '#fff',
  },
  secondary: {
    main: '#FF715B',
    light: 'rgb(255, 141, 123)',
    dark: 'rgb(178, 79, 63)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  error: {
    main: '#FF3366',
    light: 'rgb(255, 91, 132)',
    dark: 'rgb(178, 35, 71)',
    contrastText: '#fff',
  },
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2',
    contrastText: '#fff',
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    contrast: 'rgba(255, 255, 255, 0.9)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#FBFBFB',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

const dark: typeof defaultTheme = {
  ...defaultTheme,
};

export const darkTheme = { ...dark };
export const lightTheme = { ...defaultTheme };
