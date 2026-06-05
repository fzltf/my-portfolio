"use client";

import { Send } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      return;
    }

    try {
      setStatus("loading");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API contact error:", errorData);
        throw new Error(errorData.message || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
  <form
    onSubmit={handleSubmit}
    className="animate-[slideLeftReveal_0.75s_ease-out_0.28s_forwards] opacity-0"
  >
    <div className="grid gap-4">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-black text-[#111111] dark:text-[#F5F5F5]"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border-2 border-[#111111] bg-white px-4 py-3 text-sm font-medium text-[#111111] outline-none transition placeholder:text-[#8A8A8A] focus:bg-[#FFF3B0] dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-white dark:focus:border-[#FFCC00] dark:focus:bg-[#1F1F1F]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-black text-[#111111] dark:text-[#F5F5F5]"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="w-full border-2 border-[#111111] bg-white px-4 py-3 text-sm font-medium text-[#111111] outline-none transition placeholder:text-[#8A8A8A] focus:bg-[#FFF3B0] dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-white dark:focus:border-[#FFCC00] dark:focus:bg-[#1F1F1F]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-black text-[#111111] dark:text-[#F5F5F5]"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or message..."
          className="w-full resize-none border-2 border-[#111111] bg-white px-4 py-3 text-sm font-medium text-[#111111] outline-none transition placeholder:text-[#8A8A8A] focus:bg-[#FFF3B0] dark:border-[#3A3A3A] dark:bg-[#151515] dark:text-white dark:focus:border-[#FFCC00] dark:focus:bg-[#1F1F1F]"
        />
      </div>

      {status === "success" && (
        <p className="border-2 border-[#111111] bg-[#FFCC00] px-4 py-3 text-sm font-black text-[#111111] dark:border-[#FFCC00]">
          Message sent successfully. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="border-2 border-[#111111] bg-white px-4 py-3 text-sm font-black text-[#111111] dark:border-[#FFCC00] dark:bg-[#151515] dark:text-[#F5F5F5]">
          Please check your input or try again later.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center gap-2 border-2 border-[#111111] bg-[#FFCC00] px-5 py-3 text-sm font-black text-[#111111] shadow-[4px_4px_0px_#111111] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-70 sm:px-6 dark:border-[#FFCC00] dark:shadow-[4px_4px_0px_#FFCC00]"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <Send
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  </form>
);
}