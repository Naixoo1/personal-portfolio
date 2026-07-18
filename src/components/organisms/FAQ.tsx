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
    question: "What is Alvaro's core technical focus?",
    answer: "I specialize in frontend and backend web development, coding, and data analysis. I also enjoy leveraging AI tools as a 'second hand' to optimize my workflow and build smarter applications."
  },
  {
    question: "Does Alvaro work independently or in teams?",
    answer: "Both. I regularly collaborate on group projects and coordinate school initiatives as the chairperson of Sekbid 8 in OSIS. I also enjoy building independent full-stack web applications and spreadsheet architectures."
  },
  {
    question: "What kinds of projects has Alvaro developed?",
    answer: "I have designed an Advanced Student Progress Tracker spreadsheet for guidance counselors, coordinated the event scheduling framework for 'Archidelle' (a major school festival), and written policy proposals for AI ethics in education."
  },
  {
    question: "What is Alvaro's location, timezone, and availability?",
    answer: "I am based in West Java, Indonesia (WIB, UTC+7). I'm currently looking to participate in web design competitions, hackathons, and collaborative full-stack projects."
  },
  {
    question: "How does Alvaro approach computational problem solving?",
    answer: "I focus on mental mathematics, spreadsheet data modeling, and algorithmic problem-solving. I am passionate about finding logical and clean ways to organize data and solve academic and real-world challenges."
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
            Developer Quick Facts
          </h2>
          <p className="text-foreground-muted text-lg max-w-xl mx-auto">
            Frequently asked questions about my background, availability, and projects
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
