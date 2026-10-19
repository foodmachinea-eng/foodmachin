"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, ChevronDown, CircleAlert, CircleCheck, LoaderCircle } from "lucide-react";
import { categories, products } from "@/data/products";

type Values = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", company: "", email: "", phone: "", product: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s\-()]{7,18}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  else if (v.name.trim().length < 2) e.name = "Name looks too short.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email, e.g. name@company.com.";
  if (!v.phone.trim()) e.phone = "Please enter a phone number so we can reach you.";
  else if (!PHONE_RE.test(v.phone.trim())) e.phone = "Please enter a valid phone number (digits, spaces, + or -).";
  if (!v.product) e.product = "Please choose the machine you're interested in.";
  if (!v.message.trim()) e.message = "Please tell us a little about your requirement.";
  else if (v.message.trim().length < 10) e.message = "Please add a few more details (at least 10 characters).";
  return e;
}

/**
 * DEMO FORM — validates on the client and simulates a successful submission.
 * Nothing is stored or sent. To go live, replace `submitEnquiry` with a call to an
 * email service, form backend (e.g. Netlify Forms, Formspree) or your own API.
 */
async function submitEnquiry(_values: Values) {
  await new Promise((r) => setTimeout(r, 900));
  return { ok: true };
}

export default function EnquiryForm() {
  const params = useSearchParams();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const successRef = useRef<HTMLDivElement>(null);

  // Pre-select a product when arriving from a "Request a Quote" button
  useEffect(() => {
    const p = params.get("product");
    if (p && products.some((x) => x.slug === p)) setValues((v) => ({ ...v, product: p }));
  }, [params]);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Values) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, company: true, email: true, phone: true, product: true, message: true });
    const first = Object.keys(errs)[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    await submitEnquiry(values);
    setStatus("sent");
    requestAnimationFrame(() => successRef.current?.focus());
  };

  const show = (k: keyof Values) => touched[k] && errors[k];
  const selected = products.find((p) => p.slug === values.product);

  if (status === "sent") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="animate-fade-up border border-steel-200 bg-white p-8 outline-none sm:p-12"
      >
        <span className="flex h-14 w-14 items-center justify-center bg-brand text-white">
          <CircleCheck size={28} aria-hidden />
        </span>
        <h3 className="mt-6 font-display text-[28px] font-extrabold tracking-tightest">
          Thank you, {values.name.trim().split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-steel-600">
          Your enquiry{selected ? ` for the ${selected.name}` : ""} has been received. Our team will contact you
          at {values.email.trim()} or {values.phone.trim()}.
        </p>
        <p className="mt-6 border-l-2 border-brand bg-brand-soft px-4 py-3 text-[13px] text-brand-dark">
          Demo preview: this form is not yet connected, so no enquiry was stored or sent.
        </p>
        <button
          type="button"
          className="btn-outline mt-8"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setTouched({});
            setStatus("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const label = "mb-2 block text-[14px] font-semibold text-ink";
  const err = "mt-2 flex items-center gap-1.5 text-[13px] font-medium text-red-600";

  return (
    <form noValidate onSubmit={onSubmit} className="border border-steel-200 bg-white p-6 sm:p-10" aria-describedby="form-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className={label}>
            Full name <span className="text-brand">*</span>
          </label>
          <input
            id="f-name"
            className="field"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            onBlur={blur("name")}
            aria-invalid={!!show("name")}
            aria-describedby={show("name") ? "e-name" : undefined}
          />
          {show("name") && (
            <p id="e-name" className={err}>
              <CircleAlert size={14} aria-hidden /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="f-company" className={label}>
            Company name <span className="font-normal text-steel-400">(optional)</span>
          </label>
          <input
            id="f-company"
            className="field"
            autoComplete="organization"
            value={values.company}
            onChange={set("company")}
          />
        </div>

        <div>
          <label htmlFor="f-email" className={label}>
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="f-email"
            type="email"
            inputMode="email"
            className="field"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            onBlur={blur("email")}
            aria-invalid={!!show("email")}
            aria-describedby={show("email") ? "e-email" : undefined}
          />
          {show("email") && (
            <p id="e-email" className={err}>
              <CircleAlert size={14} aria-hidden /> {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="f-phone" className={label}>
            Phone <span className="text-brand">*</span>
          </label>
          <input
            id="f-phone"
            type="tel"
            inputMode="tel"
            className="field"
            autoComplete="tel"
            placeholder="+91"
            value={values.phone}
            onChange={set("phone")}
            onBlur={blur("phone")}
            aria-invalid={!!show("phone")}
            aria-describedby={show("phone") ? "e-phone" : undefined}
          />
          {show("phone") && (
            <p id="e-phone" className={err}>
              <CircleAlert size={14} aria-hidden /> {errors.phone}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="f-product" className={label}>
            Interested product <span className="text-brand">*</span>
          </label>
          <div className="relative">
          <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-steel-500" aria-hidden />
          <select
            id="f-product"
            className="field appearance-none pr-10"
            value={values.product}
            onChange={set("product")}
            onBlur={blur("product")}
            aria-invalid={!!show("product")}
            aria-describedby={show("product") ? "e-product" : undefined}
          >
            <option value="">Select a machine…</option>
            {categories.map((c) => (
              <optgroup key={c.slug} label={c.name}>
                {products
                  .filter((p) => p.category === c.slug)
                  .map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
              </optgroup>
            ))}
            <option value="not-sure">Not sure — please advise</option>
          </select>
          </div>
          {show("product") && (
            <p id="e-product" className={err}>
              <CircleAlert size={14} aria-hidden /> {errors.product}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="f-message" className={label}>
            Message <span className="text-brand">*</span>
          </label>
          <textarea
            id="f-message"
            rows={5}
            className="field resize-y"
            placeholder="What do you produce, and what output per hour or day do you need?"
            value={values.message}
            onChange={set("message")}
            onBlur={blur("message")}
            aria-invalid={!!show("message")}
            aria-describedby={show("message") ? "e-message" : undefined}
          />
          {show("message") && (
            <p id="e-message" className={err}>
              <CircleAlert size={14} aria-hidden /> {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-steel-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-note" className="text-[13px] text-steel-500">
          <span className="text-brand">*</span> Required. Demo preview — submissions are not sent.
        </p>
        <button type="submit" className="btn-primary min-w-[200px]" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <LoaderCircle size={16} className="animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              Send Enquiry <ArrowRight size={16} className="arrow" aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
