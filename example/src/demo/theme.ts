export type DemoUiThemeId = 'ocean' | 'ember' | 'paper' | 'dark';

export type DemoUiPalette = {
  panelBg: string;
  surface: string;
  surfacePressed: string;
  border: string;
  text: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  chipBg: string;
  chipBorder: string;
  chipEmphasisBorder: string;
  chipSelectedBg: string;
  chipSelectedBorder: string;
  ripple: string;
  rippleMedium: string;
  rippleStrong: string;
  tabBarBorder: string;
  sectionBorder: string;
  sectionDivider: string;
  floorPillBg: string;
  floorPillBorder: string;
  floorPillSelectedBorder: string;
  viewMapToolEmphasisBorder: string;
  eventRowBorder: string;
  shellBg: string;
  floorOverlayBg: string;
};

const ocean: DemoUiPalette = {
  panelBg: 'rgba(15, 23, 42, 0.94)',
  surface: 'rgba(255, 255, 255, 0.06)',
  surfacePressed: 'rgba(255, 255, 255, 0.1)',
  border: 'rgba(148, 163, 184, 0.22)',
  text: '#F8FAFC',
  textMuted: '#94A3B8',
  accent: '#38BDF8',
  accentSoft: 'rgba(56, 189, 248, 0.18)',
  chipBg: 'rgba(51, 65, 85, 0.85)',
  chipBorder: 'rgba(148, 163, 184, 0.25)',
  chipEmphasisBorder: 'rgba(56, 189, 248, 0.35)',
  chipSelectedBg: 'rgba(56, 189, 248, 0.22)',
  chipSelectedBorder: '#38BDF8',
  ripple: 'rgba(255,255,255,0.08)',
  rippleMedium: 'rgba(255,255,255,0.12)',
  rippleStrong: 'rgba(255,255,255,0.15)',
  tabBarBorder: 'rgba(148, 163, 184, 0.12)',
  sectionBorder: 'rgba(148, 163, 184, 0.12)',
  sectionDivider: 'rgba(148, 163, 184, 0.1)',
  floorPillBg: 'rgba(51, 65, 85, 0.65)',
  floorPillBorder: 'rgba(148, 163, 184, 0.2)',
  floorPillSelectedBorder: 'rgba(56, 189, 248, 0.45)',
  viewMapToolEmphasisBorder: 'rgba(56, 189, 248, 0.4)',
  eventRowBorder: 'rgba(148, 163, 184, 0.12)',
  shellBg: '#0F172A',
  floorOverlayBg: 'rgba(15, 23, 42, 0.94)',
};

const ember: DemoUiPalette = {
  panelBg: 'rgba(28, 18, 20, 0.96)',
  surface: 'rgba(255, 248, 240, 0.07)',
  surfacePressed: 'rgba(255, 248, 240, 0.12)',
  border: 'rgba(251, 191, 181, 0.2)',
  text: '#FFF7ED',
  textMuted: '#C4A69D',
  accent: '#FB923C',
  accentSoft: 'rgba(251, 146, 60, 0.22)',
  chipBg: 'rgba(60, 36, 32, 0.88)',
  chipBorder: 'rgba(251, 191, 181, 0.24)',
  chipEmphasisBorder: 'rgba(251, 146, 60, 0.45)',
  chipSelectedBg: 'rgba(251, 146, 60, 0.24)',
  chipSelectedBorder: '#FB923C',
  ripple: 'rgba(255,255,255,0.08)',
  rippleMedium: 'rgba(255,255,255,0.12)',
  rippleStrong: 'rgba(255,255,255,0.16)',
  tabBarBorder: 'rgba(251, 191, 181, 0.14)',
  sectionBorder: 'rgba(251, 191, 181, 0.16)',
  sectionDivider: 'rgba(251, 191, 181, 0.12)',
  floorPillBg: 'rgba(60, 36, 32, 0.75)',
  floorPillBorder: 'rgba(251, 191, 181, 0.22)',
  floorPillSelectedBorder: 'rgba(251, 146, 60, 0.55)',
  viewMapToolEmphasisBorder: 'rgba(251, 146, 60, 0.5)',
  eventRowBorder: 'rgba(251, 191, 181, 0.14)',
  shellBg: '#1C1210',
  floorOverlayBg: 'rgba(28, 18, 20, 0.96)',
};

const paper: DemoUiPalette = {
  panelBg: 'rgba(255, 255, 255, 0.97)',
  surface: 'rgba(15, 23, 42, 0.05)',
  surfacePressed: 'rgba(15, 23, 42, 0.09)',
  border: 'rgba(15, 23, 42, 0.1)',
  text: '#0F172A',
  textMuted: '#64748B',
  accent: '#0D9488',
  accentSoft: 'rgba(13, 148, 136, 0.14)',
  chipBg: 'rgba(248, 250, 252, 0.98)',
  chipBorder: 'rgba(15, 23, 42, 0.12)',
  chipEmphasisBorder: 'rgba(13, 148, 136, 0.38)',
  chipSelectedBg: 'rgba(13, 148, 136, 0.16)',
  chipSelectedBorder: '#0D9488',
  ripple: 'rgba(15, 23, 42, 0.06)',
  rippleMedium: 'rgba(15, 23, 42, 0.08)',
  rippleStrong: 'rgba(15, 23, 42, 0.1)',
  tabBarBorder: 'rgba(15, 23, 42, 0.08)',
  sectionBorder: 'rgba(15, 23, 42, 0.1)',
  sectionDivider: 'rgba(15, 23, 42, 0.08)',
  floorPillBg: 'rgba(241, 245, 249, 0.98)',
  floorPillBorder: 'rgba(15, 23, 42, 0.1)',
  floorPillSelectedBorder: 'rgba(13, 148, 136, 0.5)',
  viewMapToolEmphasisBorder: 'rgba(13, 148, 136, 0.45)',
  eventRowBorder: 'rgba(15, 23, 42, 0.08)',
  shellBg: '#F1F5F9',
  floorOverlayBg: 'rgba(255, 255, 255, 0.96)',
};

/** Neutral near-black UI with violet accent (distinct from Ocean / Ember). */
const dark: DemoUiPalette = {
  panelBg: 'rgba(9, 9, 11, 0.95)',
  surface: 'rgba(255, 255, 255, 0.05)',
  surfacePressed: 'rgba(255, 255, 255, 0.09)',
  border: 'rgba(161, 161, 170, 0.24)',
  text: '#FAFAFA',
  textMuted: '#A1A1AA',
  accent: '#A78BFA',
  accentSoft: 'rgba(167, 139, 250, 0.2)',
  chipBg: 'rgba(39, 39, 42, 0.92)',
  chipBorder: 'rgba(161, 161, 170, 0.28)',
  chipEmphasisBorder: 'rgba(167, 139, 250, 0.48)',
  chipSelectedBg: 'rgba(167, 139, 250, 0.22)',
  chipSelectedBorder: '#A78BFA',
  ripple: 'rgba(255,255,255,0.08)',
  rippleMedium: 'rgba(255,255,255,0.12)',
  rippleStrong: 'rgba(255,255,255,0.16)',
  tabBarBorder: 'rgba(161, 161, 170, 0.14)',
  sectionBorder: 'rgba(161, 161, 170, 0.16)',
  sectionDivider: 'rgba(161, 161, 170, 0.12)',
  floorPillBg: 'rgba(39, 39, 42, 0.85)',
  floorPillBorder: 'rgba(161, 161, 170, 0.22)',
  floorPillSelectedBorder: 'rgba(167, 139, 250, 0.55)',
  viewMapToolEmphasisBorder: 'rgba(167, 139, 250, 0.5)',
  eventRowBorder: 'rgba(161, 161, 170, 0.14)',
  shellBg: '#09090B',
  floorOverlayBg: 'rgba(9, 9, 11, 0.95)',
};

export const DEMO_UI_THEMES: Record<DemoUiThemeId, DemoUiPalette> = {
  ocean,
  ember,
  paper,
  dark,
};

export const DEMO_UI_THEME_OPTIONS: {
  id: DemoUiThemeId;
  label: string;
  swatch: string;
}[] = [
  { id: 'ocean', label: 'Ocean', swatch: ocean.accent },
  { id: 'ember', label: 'Ember', swatch: ember.accent },
  { id: 'paper', label: 'Paper', swatch: paper.accent },
  { id: 'dark', label: 'Dark', swatch: dark.accent },
];
