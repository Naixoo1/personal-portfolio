"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Alvaro's core technical specialization?",
    answer: "Full-stack systems architecture with deep specialization in AI/ML integration, real-time data pipelines, and high-availability distributed systems. I operate across the entire stack — from infrastructure provisioning to pixel-level frontend polish."
  },
  {
    question: "Does Alvaro work independently or with teams?",
    answer: "Both. I've led cross-functional teams of up to 12 engineers and also operate as a high-output individual contributor. My approach adapts to whatever structure delivers the best outcome for the project."
  },
  {
    question: "What industries has Alvaro delivered production systems for?",
    answer: "Enterprise analytics (fintech), healthcare (HIPAA-compliant AI), and payments infrastructure ($50M+/month processing). Each engagement required navigating domain-specific compliance and regulatory constraints."
  },
  {
    question: "What is Alvaro's availability and engagement model?",
    answer: "Currently accepting new engagements. I typically work on 3–6 month contracts with the option to extend. I'm based in San Francisco (PST) and work with distributed teams globally."
  },
  {
    question: "How quickly can Alvaro ramp up on a new codebase or domain?",
    answer: "Typically productive within the first week. I prioritize understanding existing architecture patterns before introducing changes. My onboarding process includes a systematic architecture review, dependency audit, and stakeholder alignment."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recruiter Quick Facts
          </h2>
          <p className="text-foreground-muted text-lg max-w-xl mx-auto">
            High-intent questions frequently asked by technical IT/AI recruiters
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-surface-border bg-surface overflow-hidden
                  transition-colors hover:border-accent/25 duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left
                    font-medium text-foreground hover:text-accent transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground-muted flex-shrink-0 transition-transform duration-300
                      ${isOpen ? "rotate-180 text-accent" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.25, ease: "linear" }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.2, ease: "linear" }
                        }
                      }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-sm md:text-base text-foreground-muted border-t border-surface-border/50 pt-4 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
