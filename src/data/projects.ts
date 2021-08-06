export const projects: IProject[] = [
  {
    name: "Wave Chat",
    tools: ["Express", "MongoDB", "EJS", "Socket.io"],
    image: "https://i.ibb.co/hKGygtx/wave.jpg",
    description:
      "Web app that matches students into 1:1 video chats based on interests.",
  },
  {
    name: "ApplyAI",
    tools: ["HTML/CSS", "Flask", "Firebase"],
    image: "https://i.ibb.co/k4p8bnF/applyai.jpg",
    description:
      "Web app that parses resumes to find and apply to jobs based on skills + experience.",
  },
  {
    name: "Lynz",
    tools: ["Express", "MongoDB", "React"],
    image: "https://i.ibb.co/m96m8nc/lynz-Cropped.png",
    description:
      "Web app that calculates how busy nearby grocery stores are based on crowd-sourced data.",
  },
];

export interface IProject {
  name: string;
  tools: string[];
  image: string;
  description: string;
}
