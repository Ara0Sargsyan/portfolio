import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "FrontEnd",
    skillsGroupe: [
      "React JS",
      "Next JS",
      "React Native",
      "HTML",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "SCSS / Styled-components",
      "Material UI",
    ],
  },
  {
    name: "BackEnd",
    skillsGroupe: ["Node JS", "Express JS", "Mongo DB"],
  },
  {
    name: "Data and State",
    skillsGroupe: [
      "Redux",
      "Redux-Observable",
      "Zustand",
      "GraphQL",
      "React Query",
      "Apollo Client",
    ],
  },
  {
    name: "Tools",
    skillsGroupe: ["git", "Figma", "Vite / Webpack"],
  },
];

const skillsSlice = createSlice({
  name: "skills",
  initialState: initialState,
  reducers: {},
});

export default skillsSlice.reducer;
