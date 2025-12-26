// src/types/tool.ts
import { ReactNode } from "react";

export interface Tool {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode; // 👈 VERY IMPORTANT
}
