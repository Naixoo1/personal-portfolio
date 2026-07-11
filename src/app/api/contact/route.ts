import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your name";
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      errors.email = "Please enter a valid email address";
    }
    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10
    ) {
      errors.message = "Please include a brief message (min 10 characters)";
    }
    if (message && typeof message === "string" && message.length > 2000) {
      errors.message = "Message must be under 2000 characters";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Log the submission (in production, send via Resend or store in DB)
    console.log("[Contact Submission]", {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "",
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
