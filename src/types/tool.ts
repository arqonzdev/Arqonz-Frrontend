import { ReactNode } from "react";

export interface Tool {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  href?: string;
}
