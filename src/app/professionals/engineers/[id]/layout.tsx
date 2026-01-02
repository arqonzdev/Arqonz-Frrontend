import { ReactNode } from "react";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
