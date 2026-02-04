import { createSlice } from "@reduxjs/toolkit";
import educetionIcon from "/education.svg";
import workIcon from "/work.svg";

const initialState = [
  {
    name: "Education",
    icone: educetionIcon,
    experienceItems: [
      {
        name: "NPUA College",
        date: "2019-2023",
        description: `Qualified Mechatronics specialist, graduate of NPUA College,
                    with hands-on skills in automation, robotics, and control
                    systems. `,
      },
      {
        name: "ANAU",
        date: "2025-present",
        description: `Mechanical Engineering Architecture student, currently
                    studying part-time, developing a strong foundation in
                    engineering principles and aiming to become a professional
                    engineer in future.`,
      },
    ],
  },
  {
    name: "Work",
    icone: workIcon,
    experienceItems: [
      {
        name: "NWS LAB",
        date: "1 year 6 months",
        description: `Contributed to multiple production projects using different tech stacks, focused on large datasets and high-load user interfaces.
                      Quickly learned and applied new technologies (Next.js, GraphQL, Apollo Client, reactive state management) in real-world scenarios.
                      Optimized rendering and data flow for complex, data-heavy screens, improving performance and usability.`,
        projectLink: "",
        projectLinkName: "",
      },
      {
        name: "BeeOnCode",
        date: "2 years",
        description: `Developed and enhanced the admin panel used by the Ministry
                    of Territorial Administration and Infrastructure. Built
                    flexible UI components and implemented dynamic structure
                    control, allowing administrators to modify interface
                    elements and content. Worked closely with backend APIs to
                    ensure full functionality and smooth UI experience. Project
                    website: `,
        projectLink: "https://mtad.am/",
        projectLinkName: "Mtad.am",
      },
    ],
  },
];

const experienceSlice = createSlice({
  name: "experience",
  initialState: initialState,
  reducers: {},
});

export default experienceSlice.reducer;
