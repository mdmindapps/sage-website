import Link from "next/link";

/* Sage — account & data deletion page. Host at https://www.sageacademy.app/delete-account
   Required by Google Play (Data safety → "Delete account URL") and Apple for any app that lets
   users create an account. Static page — just clearly documents how a user deletes their account
   and what data is removed vs kept. No JS / no keys needed. */

const TEAL = "#109EAF";
const HEADING = "#0C242B";
const BODY = "#5A6B70";

const pageStyle: React.CSSProperties = {
  fontFamily: '-apple-system, system-ui, "Segoe UI", sans-serif',
  background: "#F3F4F6",
  margin: 0,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 24,
  color: HEADING,
  width: "100%",
  boxSizing: "border-box",
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: 20,
  padding: 32,
  maxWidth: 560,
  width: "100%",
  boxShadow: "0 10px 30px rgba(12,36,43,.08)",
};

const h1Style: React.CSSProperties = { fontSize: 24, margin: "0 0 4px", color: HEADING };
const h2Style: React.CSSProperties = { fontSize: 16, margin: "24px 0 8px", color: HEADING };
const pStyle: React.CSSProperties = { color: BODY, fontSize: 15, lineHeight: 1.55 };
const listStyle: React.CSSProperties = { paddingLeft: 20, margin: "8px 0", color: BODY };
const liStyle: React.CSSProperties = { color: BODY, fontSize: 15, lineHeight: 1.55, marginBottom: 6 };
const noteStyle: React.CSSProperties = {
  background: "#F0FAFB",
  borderRadius: 12,
  padding: "14px 16px",
  marginTop: 18,
  fontSize: 14,
  color: BODY,
  lineHeight: 1.55,
};
const footStyle: React.CSSProperties = { marginTop: 24, fontSize: 13, color: "#8A9499" };
const linkStyle: React.CSSProperties = { color: TEAL };

export default function DeleteAccountPage() {
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={h1Style}>
          Delete your <span style={{ color: TEAL, fontWeight: 800 }}>Sage</span> account
        </h1>
        <p style={pStyle}>
          This page explains how to delete your Sage account and what data is removed. Sage is
          published by Friday Technologies SRL.
        </p>

        <h2 style={h2Style}>Delete your account from the app</h2>
        <ol style={listStyle}>
          <li style={liStyle}>
            Open the <strong>Sage</strong> app and sign in.
          </li>
          <li style={liStyle}>
            Tap the <strong>profile icon</strong> in the top-right of the Today screen.
          </li>
          <li style={liStyle}>
            Scroll to the bottom and tap <strong>Delete account</strong>.
          </li>
          <li style={liStyle}>Confirm. Your account and data are deleted immediately.</li>
        </ol>

        <h2 style={h2Style}>What gets deleted</h2>
        <p style={pStyle}>
          Deleting your account permanently removes all data associated with it from our servers,
          including:
        </p>
        <ul style={listStyle}>
          <li style={liStyle}>Your profile (name, email, age, height, weight and goals)</li>
          <li style={liStyle}>Weight and meal logs, habits, and fasting history</li>
          <li style={liStyle}>Progress photos and meal photos</li>
          <li style={liStyle}>Voice recordings (&ldquo;My Why&rdquo;) and their transcripts</li>
          <li style={liStyle}>Your coaching chat history and coach memory</li>
        </ul>

        <h2 style={h2Style}>What may be retained</h2>
        <ul style={listStyle}>
          <li style={liStyle}>
            Minimal billing/transaction records held by the app stores and payment processors
            (Google Play, Apple) as required by law — Sage does not store your payment details.
          </li>
          <li style={liStyle}>
            Anonymized, aggregated analytics that cannot be used to identify you.
          </li>
        </ul>
        <p style={pStyle}>
          Personal data is deleted as soon as you confirm; residual copies in encrypted backups are
          purged within 30 days.
        </p>

        <div style={noteStyle}>
          <strong>Can&apos;t access the app?</strong> Email{" "}
          <a href="mailto:contact@sageacademy.app" style={linkStyle}>
            contact@sageacademy.app
          </a>{" "}
          from the email address on your account and we&apos;ll delete your account and data for
          you.
        </div>

        <p style={footStyle}>
          Friday Technologies SRL ·{" "}
          <Link href="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
