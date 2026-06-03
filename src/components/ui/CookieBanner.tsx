"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sage_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("sage_cookie_consent", "all");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("sage_cookie_consent", "essential");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-ink text-white rounded-2xl p-5 md:p-6 shadow-2xl border border-white/10">
            {!showManage ? (
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">We use cookies</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We use essential cookies to make Sage work, and optional analytics cookies to
                    understand how you use the site.{" "}
                    <Link href="/cookies" className="text-primary underline underline-offset-2">
                      Cookie Policy
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0 flex-wrap">
                  <button
                    onClick={() => setShowManage(true)}
                    className="px-4 h-9 text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    Manage
                  </button>
                  <button
                    onClick={reject}
                    className="px-4 h-9 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={accept}
                    className="px-5 h-9 text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-semibold">Manage cookie preferences</p>
                <div className="space-y-3">
                  <label className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-sm">Essential cookies</p>
                      <p className="text-white/50 text-xs">Required for the site to function. Cannot be disabled.</p>
                    </div>
                    <div className="w-10 h-6 rounded-full bg-primary flex items-center justify-end px-1 cursor-not-allowed">
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </label>
                  <label className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-sm">Analytics cookies</p>
                      <p className="text-white/50 text-xs">Help us understand site usage via PostHog (anonymised).</p>
                    </div>
                    <div className="w-10 h-6 rounded-full bg-white/20 flex items-center px-1 cursor-pointer" onClick={() => {}}>
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </div>
                  </label>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={reject}
                    className="px-4 h-9 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Save preferences
                  </button>
                  <button
                    onClick={accept}
                    className="px-5 h-9 text-sm font-semibold rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
