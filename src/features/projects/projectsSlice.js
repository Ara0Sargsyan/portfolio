import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, title: 'Portfolio Website', tech: ['React', 'Redux'] },
    { id: 2, title: 'Admin Dashboard', tech: ['React', 'JavaScript'] },
  ],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
})

export default projectsSlice.reducer
