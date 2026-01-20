import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme, toggleTheme } from '../../features/theme/themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => dispatch(toggleTheme()),
    setTheme: (mode) => dispatch(setTheme(mode)),
    isDark,
    isLight,
  };
};
