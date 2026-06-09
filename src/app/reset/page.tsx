"use client";

import { useEffect, useRef, useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";

/* Sage — password reset page. Host at https://www.sageacademy.app/reset
   The "Forgot password?" button in the app emails a link that opens THIS page with a recovery token.
   Supabase JS (detectSessionInUrl, default true) picks up the token → updateUser sets the new password.
   The anon/publishable key is safe in client code (same one the app ships). */
const SUPABASE_URL = "https://flchqdspfidwcljtuttq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6JflakxdG19uLJfGXvIotA_kLFroJKC";

type MsgKind = "" | "ok" | "err";

export default function ResetPage() {
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [msg, setMsg] = useState("");
  const [msgKind, setMsgKind] = useState<MsgKind>("");
  const [busy, setBusy] = useState(false);

  const supabaseRef = useRef<SupabaseClient | null>(null);
  const recoveryReadyRef = useRef(false);

  // detectSessionInUrl (default true in the browser) reads the recovery token from the email link.
  useEffect(() => {
    let active = true;
    (async () => {
      const { createClient } = await import("@supabase/supabase-js");
      if (!active) return;
      const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
      supabaseRef.current = supabase;

      // Fires when Supabase has parsed the recovery token and a recovery session is ready.
      supabase.auth.onAuthStateChange((event) => {
        if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
          recoveryReadyRef.current = true;
        }
      });
      // Also check after load in case the event already fired.
      supabase.auth.getSession().then(({ data }) => {
        if (data.session) recoveryReadyRef.current = true;
      });
    })();
    return () => {
      active = false;
    };
  }, []);

  const handleUpdate = async () => {
    setMsg("");
    setMsgKind("");
    if (pw.length < 6) {
      setMsg("Password must be at least 6 characters.");
      setMsgKind("err");
      return;
    }
    if (pw !== pw2) {
      setMsg("Passwords do not match.");
      setMsgKind("err");
      return;
    }
    const supabase = supabaseRef.current;
    if (!supabase) return;

    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);

    if (error) {
      setMsg(
        recoveryReadyRef.current
          ? error.message
          : "This reset link is invalid or has expired. Request a new one from the app.",
      );
      setMsgKind("err");
      return;
    }
    setMsg("Password updated! You can now log in to the Sage app.");
    setMsgKind("ok");
  };

  const msgColor = msgKind === "ok" ? "#18A957" : msgKind === "err" ? "#E5484D" : undefined;

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
        }}
      >
        <h1 style={{ fontSize: 22, margin: "0 0 6px", color: "#0C242B" }}>
          Reset your password
        </h1>
        <p style={{ color: "#5A6B70", fontSize: 14, margin: "0 0 18px", lineHeight: 1.4 }}>
          Enter a new password for your Sage account.
        </p>

        <input
          id="pw"
          type="password"
          placeholder="New password (6+ characters)"
          autoComplete="new-password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          style={inputStyle}
        />
        <input
          id="pw2"
          type="password"
          placeholder="Confirm new password"
          autoComplete="new-password"
          value={pw2}
          onChange={(e) => setPw2(e.target.value)}
          style={inputStyle}
        />

        <button
          id="btn"
          onClick={handleUpdate}
          disabled={busy}
          style={{
            width: "100%",
            height: 50,
            border: 0,
            borderRadius: 14,
            background: "#109EAF",
            color: "#fff",
            fontSize: 16,
            fontWeight: 700,
            cursor: busy ? "default" : "pointer",
            opacity: busy ? 0.6 : 1,
          }}
        >
          Update password
        </button>

        <div
          id="msg"
          style={{
            fontSize: 14,
            marginTop: 14,
            textAlign: "center",
            lineHeight: 1.4,
            color: msgColor,
          }}
        >
          {msg}
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  height: 48,
  border: "1px solid #E2E6E8",
  borderRadius: 12,
  padding: "0 14px",
  fontSize: 16,
  marginBottom: 12,
};
