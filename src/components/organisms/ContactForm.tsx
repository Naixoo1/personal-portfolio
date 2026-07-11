"use client";

import { useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/atoms/Button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

type FormStatus = "idle" | "validating" | "sending" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.length < 2) {
    errors.name = "Please enter your name";
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.message.trim() || data.message.length < 10) {
    errors.message = "Please include a brief message (min 10 characters)";
  }
  return errors;
}

export interface ContactFormProps {
  variant?: "full" | "mini";
}

export function ContactForm({ variant = "full" }: ContactFormProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("validating");

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
      setErrors({ message: "Something went wrong. Please try again." });
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 space-y-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
        >
          <CheckCircle className="w-16 h-16 text-success mx-auto" />
        </motion.div>
        <h3 className="text-2xl font-bold text-foreground">Message sent!</h3>
        <p className="text-foreground-muted max-w-md mx-auto">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-accent hover:text-accent-hover font-medium transition-colors
            cursor-pointer"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Name & Email row */}
        <div className={`grid gap-5 ${variant === "full" ? "sm:grid-cols-2" : ""}`}>
          <motion.div variants={staggerItem}>
            <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
              Name <span className="text-error">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-xl bg-background border
                text-foreground placeholder:text-foreground-subtle
                transition-all duration-200 focus:outline-none focus:ring-2
                focus:ring-accent/50 focus:border-accent
                ${errors.name ? "border-error" : "border-surface-border"}`}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1.5 text-sm text-error flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          <motion.div variants={staggerItem}>
            <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
              Email <span className="text-error">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className={`w-full px-4 py-3 rounded-xl bg-background border
                text-foreground placeholder:text-foreground-subtle
                transition-all duration-200 focus:outline-none focus:ring-2
                focus:ring-accent/50 focus:border-accent
                ${errors.email ? "border-error" : "border-surface-border"}`}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1.5 text-sm text-error flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.email}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Company (optional) */}
        {variant === "full" && (
          <motion.div variants={staggerItem}>
            <label htmlFor="contact-company" className="block text-sm font-medium text-foreground mb-2">
              Company <span className="text-foreground-subtle">(optional)</span>
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border
                text-foreground placeholder:text-foreground-subtle
                transition-all duration-200 focus:outline-none focus:ring-2
                focus:ring-accent/50 focus:border-accent"
            />
          </motion.div>
        )}

        {/* Message */}
        <motion.div variants={staggerItem}>
          <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={variant === "full" ? 6 : 4}
            maxLength={2000}
            className={`w-full px-4 py-3 rounded-xl bg-background border resize-none
              text-foreground placeholder:text-foreground-subtle
              transition-all duration-200 focus:outline-none focus:ring-2
              focus:ring-accent/50 focus:border-accent
              ${errors.message ? "border-error" : "border-surface-border"}`}
          />
          <div className="flex items-center justify-between mt-1.5">
            {errors.message ? (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-error flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </motion.p>
            ) : (
              <span />
            )}
            <span className="text-xs text-foreground-subtle">
              {formData.message.length}/2000
            </span>
          </div>
        </motion.div>

        {/* Submit */}
        <motion.div variants={staggerItem}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={status === "sending"}
            icon={<Send className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
