export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / ML",
    skills: ["PyTorch", "Transformers", "LLMs", "NLP", "scikit-learn"],
  },
  {
    label: "Data & evaluation",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    label: "Computer vision",
    skills: ["OpenCV", "MediaPipe", "YOLO"],
  },
  {
    label: "Systems",
    skills: ["Flask", "Git", "Arduino", "ESP32"],
  },
];
