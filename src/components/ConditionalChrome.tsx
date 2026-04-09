"use client";

import { usePathname } from "next/navigation";

// Pages that render their own nav/footer and must hide the global sanadidari chrome
const STANDALONE_PAGES = ["/witi/nour"];

export default function ConditionalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (STANDALONE_PAGES.some((p) => pathname === p || pathname.startsWith(p + "/"))) return null;
  return <>{children}</>;
}
