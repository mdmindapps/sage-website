import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Back to Sage",
  description: "Return to the Sage app after setting up payouts with Stripe.",
  robots: { index: false, follow: false },
};

export default function CoachDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
