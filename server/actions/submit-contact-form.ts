"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/helpers";
import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const submitContactForm = async (formData: FormData) => {
  const absender = formData.get("email");
  const message = formData.get("message");
  

  if (!validateString(process.env.MY_EMAIL, 100)) {
    throw new Error("No email address found in the environment variables")
  }

  if (!validateString(absender, 100)) {
    return {
      message: "Invalid email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      message: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Website <joboffer@resend.dev>",
      to: process.env.MY_EMAIL,
      subject: `New message from a recruiter!`,
      reply_to: absender,
      react: React.createElement(ContactFormEmail, {
        message: message,
        absender: absender,
      }),
    });
    return {
      message: "Thanks for your message! I will get back to you asap.",
      status: 200,
      isError: false,
    }
  } catch (error) {
    return {
      message: getErrorMessage(error),
      status: 503,
      isError: true,
    };
  }
};

export default submitContactForm;
