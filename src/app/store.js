import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projects/projectsSlice'
import themeReducer from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    theme: themeReducer
  },
})
