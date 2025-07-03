'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};

const prefersDark = () => typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme: Theme) => {
    const html = document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark());
    html.classList.toggle('dark', isDark);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>('system');

    useEffect(() => {
        const saved = localStorage.getItem('appearance') as Theme;
        setThemeState(saved || 'system');
    }, []);

    useEffect(() => {
        applyTheme(theme);
        localStorage.setItem('appearance', theme);
    }, [theme]);

    const setTheme = (value: Theme) => {
        setThemeState(value);
    };

    const toggleTheme = () => {
        setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
