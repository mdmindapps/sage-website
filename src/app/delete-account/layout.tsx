import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete your Sage account",
  description: "How to delete your Sage account and what data is removed.",
  robots: { index: true, follow: true },
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
