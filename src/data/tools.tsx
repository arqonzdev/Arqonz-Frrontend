import {
  PenTool,
  ShoppingCart,
  Factory,
  Share2,
  ClipboardList,
  PhoneIncoming,
  BriefcaseBusiness,
  Brain,
} from "lucide-react";

import { Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    id: "design",
    title: "Design tools",
    subtitle: "Visualize. Customize. Approve",
    description:
      "AI-powered design visualization and customization for professionals to get faster client approvals.",
    icon: <PenTool size={18} />,
    href: "/tools/design",
  },
  {
    id: "procurement",
    title: "Procurement tools",
    subtitle: "Compare. Negotiate. Procure",
    description:
      "Streamline material sourcing and pricing with AI-driven e-negotiation.",
    icon: <ShoppingCart size={18} />,
    href: "/tools/procurement",
  },
  {
    id: "supplier",
    title: "Supplier tools",
    subtitle: "Showcase. Connect. Expand",
    description:
      "Empower suppliers to list and reach verified buyers.",
    icon: <Factory size={18} />,
    href: "/tools/supplier",
  },
  {
    id: "networking",
    title: "Networking",
    subtitle: "Connect. Collaborate. Grow",
    description:
      "Enable collaboration between industry professionals.",
    icon: <Share2 size={18} />,
    href: "/tools/networking",
  },
  {
    id: "operation",
    title: "Operation tools",
    subtitle: "Plan. Track. Deliver",
    description:
      "Manage construction projects end-to-end.",
    icon: <ClipboardList size={18} />,
    href: "/tools/operation",
  },
  {
    id: "sales",
    title: "Sales & Marketing",
    subtitle: "Reach. Engage. Convert",
    description:
      "Boost visibility & generate leads.",
    icon: <PhoneIncoming size={18} />,
    href: "/tools/sales",
  },
  {
    id: "recruitment",
    title: "Recruitment tools",
    subtitle: "Match. Hire. Upskill",
    description:
      "AI-powered hiring and workforce management.",
    icon: <BriefcaseBusiness size={18} />,
    href: "/tools/recruitment",
  },
  {
    id: "intelligence",
    title: "Intelligence (AQIQ)",
    subtitle: "Analyse. Predict. Optimize",
    description:
      "Turn data into decisions using ConstructionGPT.",
    icon: <Brain size={18} />,
    href: "/tools/ai",
  },
];
