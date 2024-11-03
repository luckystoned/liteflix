import { DefaultTheme } from 'styled-components';
import { leftFadeIn, topFadeIn, rightFadeIn, kenBurnsIn } from './animations';

export const liteflixTheme: DefaultTheme = {
  colors: {
    primary: '#64EEBC',
    dark: '#242424',
    light: '#FFFFFF',
    gray: 'rgba(255, 255, 255, .5)',
    error: '#FF0000',
    transparent: 'rgba(36, 36, 36, .5)',
    scrollbarTrack: 'rgba(0, 0, 0, 0.2)',
    placeholder: 'gray',
  },
  container: {
    width: '90%',
    maxWidth: '1200px',
  },
  typography: {
    fontFamily: 'BebasNeue, sans-serif',
    letterSpacing: '4px',
    lineHeight: 1,
    sizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '28px',
      xxl: '34px',
    },
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadow: {
    light: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    heavy: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '800px',
    desktop: '1024px',
    largeDesktop: '1440px',
  },
  animation: {
    leftFadeIn,
    topFadeIn,
    rightFadeIn,
    kenBurnsIn,
  },
};
