"use client";

import { motion } from "framer-motion";
import FaqItem from "@/components/ui/FaqItem";
import { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "How does the AI in Sage work?",
    answer:
      "Sage is powered entirely by OpenAI. Their vision models analyse every meal photo you take — identifying items, estimating portions, and breaking down calories and macros in seconds. The same OpenAI models handle your coaching chat replies, remember durable facts about you (your goals, preferences, struggles), and transcribe your \"My Why\" voice recording so Sage always understands your deeper motivation. One AI provider, doing four distinct jobs seamlessly.",
  },
  {
    question: "Is my data private?",
    answer:
      "Absolutely. Your health and nutrition data is encrypted in transit and at rest, stored on secure servers in the EU (Frankfurt). We never sell your data to third parties. You can request a full export or deletion of your data at any time. See our Privacy Policy for full details.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription anytime from your device's App Store or Play Store subscription settings. If you cancel within the 3-day free trial period, you won't be charged anything. After that, you'll retain access until the end of your current billing period.",
  },
  {
    question: "Does it work for vegetarian/vegan diets?",
    answer:
      "Yes, Sage fully supports all dietary preferences including vegetarian, vegan, plant-based, pescatarian, and more. When you set up your profile, you tell Sage your preferences and it personalises all coaching and meal suggestions accordingly. The AI coach understands plant-based nutrition deeply.",
  },
  {
    question: "What if Sage gets a meal wrong?",
    answer:
      "No AI is perfect, and Sage knows it. If the photo recognition gets something wrong, you can easily tap to edit the meal items or quantities. Any corrections help Sage learn your eating patterns over time. You can also type the meal manually if you prefer.",
  },
  {
    question: "Do I need a subscription to try it?",
    answer:
      "No! Every new user gets a 3-day free trial with full access to all features — no credit card required to start. After the trial, you choose a monthly or annual plan. There's no free tier, but the trial gives you enough time to see real value before committing.",
  },
  {
    question: "Which countries is Sage available in?",
    answer:
      "Sage is available worldwide on both the Apple App Store and Google Play Store. The app is currently in English, with more languages coming soon. The AI coach handles food from cuisines around the world.",
  },
  {
    question: "Can I work with a real coach, or is it just AI?",
    answer:
      "Both. Your Sage AI coach is always on — and you can also work 1:1 with vetted human coaches, nutritionists and trainers who run their programs, plans and communities right inside the app. AI keeps you on track day to day; a real coach adds the human accountability when you want it.",
  },
  {
    question: "I'm a coach — can I offer my services on Sage?",
    answer:
      "Yes. Coaches, nutritionists and trainers can launch their programs on Sage and keep 80% — while we handle payments, currency conversion, taxes and invoices. Every creator is reviewed by hand. Head to the \"Launch on Sage\" page to apply.",
  },
  {
    question: "Is Sage a replacement for a dietitian?",
    answer:
      "No, and we want to be upfront about this. Sage is a coaching tool powered by AI — it's designed to educate, motivate, and help you make better daily choices. But it's not a substitute for professional medical or dietary advice. If you have a medical condition, please consult a qualified healthcare provider.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mb-5 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Questions? We&apos;ve got answers.
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Still not sure? Reach out to our team and we&apos;ll reply within 24 hours.
            </p>
            <Button href="/support" variant="outline" size="md">
              Contact support
            </Button>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
