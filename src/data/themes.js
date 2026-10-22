/**
 * Centralized Brand Design System for Navkar Realty
 * Unified Brand Direction: Lacoste-Inspired Green
 *
 * Official Palette Specifications:
 * - Primary Lacoste-inspired green: #176B3A
 * - Deep green (hover/selected/dark): #104D2A
 * - Light green background: #F0F6F0
 * - White: #FFFFFF
 * - Main text: #202923
 * - Secondary text: #66716A
 * - Borders: #DCE5DD
 * - Subtle green accent: #DCEBDD
 */

export const BRAND_COLORS = {
  primary: '#176B3A',
  deep: '#104D2A',
  lightBg: '#F0F6F0',
  white: '#FFFFFF',
  textMain: '#202923',
  textSecondary: '#66716A',
  border: '#DCE5DD',
  accentSubtle: '#DCEBDD',
  darkBg: '#092615'
};

export const LACOSTE_THEME = {
  id: 'lacoste',
  name: 'Lacoste Green',
  subtitle: 'Fresh, Sophisticated & Prestigious Real Estate Identity',
  primaryHex: BRAND_COLORS.primary,
  deepHex: BRAND_COLORS.deep,
  bgHex: BRAND_COLORS.lightBg,
  textHex: BRAND_COLORS.textMain,
  secondaryTextHex: BRAND_COLORS.textSecondary,
  borderHex: BRAND_COLORS.border,
  accentHex: BRAND_COLORS.accentSubtle,
  whiteHex: BRAND_COLORS.white,
  paletteChips: [
    { name: 'Primary Lacoste Green', hex: BRAND_COLORS.primary },
    { name: 'Deep Green', hex: BRAND_COLORS.deep },
    { name: 'Light Green Background', hex: BRAND_COLORS.lightBg },
    { name: 'Main Text', hex: BRAND_COLORS.textMain },
    { name: 'Secondary Text', hex: BRAND_COLORS.textSecondary },
    { name: 'Borders', hex: BRAND_COLORS.border },
    { name: 'Subtle Accent', hex: BRAND_COLORS.accentSubtle }
  ]
};

export const THEMES = [LACOSTE_THEME];
export const DEFAULT_THEME_ID = 'lacoste';
