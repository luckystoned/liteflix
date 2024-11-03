import 'styled-components';
import { AnimationType } from './animations';

export interface ThemeColors {
  primary: string;
  dark: string;
  light: string;
  gray: string;
  error: string;
  transparent: string;
  scrollbarTrack: string;
  placeholder: string;
}

export interface themeTypography {
  fontFamily: string;
  letterSpacing: string;
  lineHeight: number;
  sizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export interface ThemeBorderRadius {
  small: string;
  medium: string;
  large: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeShadow {
  light: string;
  medium: string;
  heavy: string;
}

export interface ThemeBreakpoints {
  mobile: string;
  tablet: string;
  desktop: string;
  largeDesktop: string;
}

export interface ThemeContainer {
  width: string;
  maxWidth: string;
}

export interface ThemeAnimations {
  leftFadeIn: AnimationType;
  topFadeIn: AnimationType;
  rightFadeIn: AnimationType;
  kenBurnsIn: AnimationType;
}

export interface LiteflixTheme {
  color: ThemeColors;
  container: ThemeContainer;
  animation: ThemeAnimations;
}


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    container: ThemeContainer;
    typography: themeTypography;
    borderRadius: ThemeBorderRadius;
    spacing: ThemeSpacing;
    shadow: ThemeShadow;
    breakpoints: ThemeBreakpoints;
    animation: ThemeAnimations;
  }
}
