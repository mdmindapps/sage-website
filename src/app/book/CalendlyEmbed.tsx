"use client";

import { useEffect, useRef } from "react";

const CALENDLY_URL = "https://calendly.com/contact-sageacademy/30min";

// Calendly's inline widget is a plain script that hydrates a div, so it has to run in the browser.
// The colour params are sent even though they are a paid feature — Calendly ignores what the plan
// does not cover, and the moment the account moves off Free the embed picks up the Sage teal with
// no code change.
const PARAMS = new URLSearchParams({
  hide_gdpr_banner: "1",
  primary_color: "0E9AAE",
  text_color: "11181C",
  background_color: "ffffff",
});

export default function CalendlyEmbed() {
  const loaded = useRef(false);

  useEffect(() => {
    // React 18 runs effects twice in development; without this the script tag is appended twice
    // and Calendly renders the calendar on top of itself.
    if (loaded.current) return;
    loaded.current = true;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      // The height has to be ours: Calendly's iframe never resizes itself, so anything we leave too
      // short gets a scrollbar inside the page — scroll-inside-scroll, and worst on the phone, which
      // is where most of these links get opened. Narrow, Calendly stacks the profile above the
      // calendar and needs ~1050px; from 1000px wide it puts them side by side and 700px is enough.
      className="calendly-inline-widget h-[1050px] md:h-[700px]"
      data-url={`${CALENDLY_URL}?${PARAMS.toString()}`}
      style={{ minWidth: 320 }}
    />
  );
}
