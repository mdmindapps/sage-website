"use client";

import { useState } from "react";

/** Copy buttons. A view_key is 32 characters — nobody should ever retype one by hand. */
export default function CopyLinks({ pub, priv }: { pub: string; priv: string }) {
  const [done, setDone] = useState<"" | "pub" | "priv">("");

  async function copy(which: "pub" | "priv", value: string) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Older browsers, or a page served without https: fall back to the old selection trick.
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setDone(which);
    setTimeout(() => setDone(""), 1500);
  }

  const btn =
    "inline-flex items-center justify-center h-8 px-3 rounded-full border border-border bg-white text-xs font-semibold text-ink whitespace-nowrap hover:border-primary hover:text-primary transition-colors";

  return (
    <div className="flex flex-wrap gap-2">
      <button type="button" className={btn} onClick={() => copy("pub", pub)}>
        {done === "pub" ? "Copied" : "Public page"}
      </button>
      <button type="button" className={btn} onClick={() => copy("priv", priv)}>
        {done === "priv" ? "Copied" : "Her private link"}
      </button>
    </div>
  );
}
