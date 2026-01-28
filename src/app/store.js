import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice';
import skillsReducer from '../features/home/skillsSlice';
import experienceReducer from '../features/home/experienceSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    skills: skillsReducer,
    experience: experienceReducer,
  },
})
