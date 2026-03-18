'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'en' | 'hi';
type Theme = 'dark' | 'light';
interface Ctx { lang: Lang; setLang: (l: Lang) => void; theme: Theme; toggleTheme: () => void; t: (en: string, hi: string) => string; }
const AppContext = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <AppContext.Provider value={{
      lang, setLang, theme,
      toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
      t: (en, hi) => lang === 'hi' ? hi : en,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const c = useContext(AppContext);
  if (!c) throw new Error('useApp outside AppProvider');
  return c;
};
