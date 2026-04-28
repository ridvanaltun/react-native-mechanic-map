import * as React from 'react';

import {
  DEMO_UI_THEMES,
  type DemoUiPalette,
  type DemoUiThemeId,
} from './theme';

type DemoUiThemeContextValue = {
  themeId: DemoUiThemeId;
  setThemeId: (id: DemoUiThemeId) => void;
  palette: DemoUiPalette;
};

const DemoUiThemeContext = React.createContext<DemoUiThemeContextValue | null>(
  null,
);

export function DemoUiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [themeId, setThemeId] = React.useState<DemoUiThemeId>('paper');
  const palette = DEMO_UI_THEMES[themeId];
  const value = React.useMemo(
    () => ({ themeId, setThemeId, palette }),
    [themeId, palette],
  );
  return (
    <DemoUiThemeContext.Provider value={value}>
      {children}
    </DemoUiThemeContext.Provider>
  );
}

export function useDemoUiTheme() {
  const ctx = React.useContext(DemoUiThemeContext);
  if (!ctx) {
    throw new Error('useDemoUiTheme must be used within DemoUiThemeProvider');
  }
  return ctx;
}
