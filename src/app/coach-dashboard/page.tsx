/* Sage — return page after Stripe payout onboarding. Host at https://sageacademy.app/coach-dashboard
   Stripe account links only accept https return/refresh URLs, so stripe-connect-onboard sends creators here:
   ?payouts=done    → they left Stripe's form (finished, or tapped "Return to …" part-way)
   ?payouts=refresh → the single-use onboarding link expired or was reused
   The app re-checks the real payout status itself when this window closes, so this page never claims success. */

export default async function PayoutReturnPage({
  searchParams,
}: {
  searchParams: Promise<{ payouts?: string }>;
}) {
  const { payouts } = await searchParams;
  const state = payouts === "refresh" ? "refresh" : "done";

  const title = state === "refresh" ? "This link has expired" : "You're back from Stripe";
  const body =
    state === "refresh"
      ? "Stripe setup links only work once. Go back to the Sage app and tap Continue setup to get a fresh one."
      : "Your details went to Stripe. Go back to the Sage app to see your payout status. If Stripe still needs something, you'll see Continue setup there.";

  return (
    <div
      style={{
        fontFamily: '-apple-system, system-ui, "Segoe UI", sans-serif',
        background: "#F3F4F6",
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 28,
          maxWidth: 380,
          width: "100%",
          boxShadow: "0 10px 30px rgba(12,36,43,.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: state === "refresh" ? "#FFF4E5" : "#E4F5F7",
            color: state === "refresh" ? "#B26B00" : "#0B7F8D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          {state === "refresh" ? <ClockIcon /> : <CheckIcon />}
        </div>
        <h1 style={{ fontSize: 22, margin: "0 0 8px", color: "#0C242B" }}>{title}</h1>
        <p style={{ color: "#5A6B70", fontSize: 14.5, margin: "0 0 22px", lineHeight: 1.45 }}>{body}</p>

        <a
          href={`sage://coach-dashboard?payouts=${state}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 50,
            borderRadius: 14,
            background: "#109EAF",
            color: "#fff",
            fontSize: 16,
            fontWeight: 700,
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          Open the Sage app
        </a>
        <p style={{ color: "#8A989C", fontSize: 13, margin: "14px 0 0", lineHeight: 1.4 }}>
          Or just close this window, it takes you back to the app.
        </p>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
