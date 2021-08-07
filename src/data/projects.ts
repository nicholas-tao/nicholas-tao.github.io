export const projects: IProject[] = [
  {
    name: "Wave Chat",
    tools: ["Express", "MongoDB", "EJS", "Socket.io"],
    image: "https://i.ibb.co/hKGygtx/wave.jpg",
    description:
      "Web app that connects university students by matching them into 1:1 video chats based on interests. 1500+ users.",
    link: "https://omegu.herokuapp.com/",
    award: "Winner at DefHacks 2020",
  },
  {
    name: "ApplyAI",
    tools: ["HTML/CSS", "Flask", "Firebase"],
    image: "https://i.ibb.co/k4p8bnF/applyai.jpg",
    description:
      "Web app that parses resumes to find and apply to jobs based on skills + experience.",
    link: "https://devpost.com/software/applyai",
    award: "Winner at MHacks 13",
  },
  {
    name: "Lynz",
    tools: ["Express", "MongoDB", "React"],
    image: "https://i.ibb.co/m96m8nc/lynz-Cropped.png",
    description:
      "Web app that calculates how busy nearby grocery stores are based on crowd-sourced data.",
    link: "https://devpost.com/software/lynz",
  },
];

export interface IProject {
  name: string;
  tools: string[];
  image: string;
  description: string;
  link: string;
  award?: string;
}
