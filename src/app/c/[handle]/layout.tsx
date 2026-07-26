import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sage Creator",
  robots: { index: false, follow: false },
};

export default function CreatorRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
