import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('portfolio-theme');
  
  if (!savedTheme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  
  return savedTheme;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('portfolio-theme', state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('portfolio-theme', action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;