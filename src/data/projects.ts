import { IProject } from "../types";

export const projects: IProject[] = [
  {
    name: "Wave Chat",
    tools: ["Express", "MongoDB", "EJS", "Socket.io"],
    image: "https://i.ibb.co/hKGygtx/wave.jpg",
    description:
      "I built this in June 2020, the summer before entering university. With everything moving online, I was worried about how I'd meet people and make friends. So I created a platform that matches university students into 1-on-1 video chats based on shared interests. It ended up connecting 1,500+ students who were all in the same boat.",
    link: "https://devpost.com/software/omegu",
    award: "Winner at DefHacks 2020",
  },
  {
    name: "ApplyAI",
    tools: ["HTML/CSS", "Flask", "Firebase"],
    image: "https://i.ibb.co/k4p8bnF/applyai.jpg",
    description:
      "I found it really annoying to have to fill out job applications over and over again. So I built this tool that uses NLP to read your resume, figure out what jobs actually match your skills, and then automatically applies for you.",
    link: "https://devpost.com/software/applyai",
    award: "Winner at MHacks 13",
  },
  {
    name: "Lynz",
    tools: ["Express", "MongoDB", "React"],
    image: "https://i.ibb.co/m96m8nc/lynz-Cropped.png",
    description:
      "This was my response to the chaos of April 2020. Everyone was panic-buying and grocery stores were packed. I thought, what if we could crowdsource real-time data about how busy stores are? So I built a platform where people check in when they shop, and others can see which stores are less crowded. It helped people make safer shopping decisions when we all needed it most.",
    link: "https://devpost.com/software/lynz",
  },
];
