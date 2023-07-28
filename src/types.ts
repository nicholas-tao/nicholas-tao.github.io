export interface IItem {
  description: string;
  emoji?: string;
  company?: string;
  link?: string;
}

export interface IProject {
  name: string;
  tools: string[];
  image: string;
  description: string;
  link: string;
  award?: string;
}
