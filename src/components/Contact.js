import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [gotcha, setGotcha] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=5745%20Bozeman%20Drive%2C%20Plano%2C%20TX%2075024&z=13&output=embed";
  const formEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;
  const formOpenedAtRef = React.useRef(Date.now());
  const SUBMIT_COOLDOWN_MS = 30_000;
  const HUMAN_MIN_FILL_MS = 1_500;
  const isErrorStatus = status.startsWith("Failed") || status.startsWith("Please");

  function getLastSubmitAt() {
    try {
      return Number(localStorage.getItem("contact_last_submit_at") || 0);
    } catch {
      return 0;
    }
  }

  function setLastSubmitAt(timestamp) {
    try {
      localStorage.setItem("contact_last_submit_at", String(timestamp));
    } catch {
      // Ignore storage errors (private mode/restricted storage).
    }
  }

  function openMailtoFallback() {
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:ashsabraham99@gmail.com?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formEndpoint) {
      setStatus("Form backend unavailable. Opening your email app instead.");
      openMailtoFallback();
      return;
    }

    if (gotcha.trim() !== "") {
      setStatus("Message sent successfully.");
      return;
    }

    const now = Date.now();
    const lastSubmitAt = getLastSubmitAt();
    if (lastSubmitAt && now - lastSubmitAt < SUBMIT_COOLDOWN_MS) {
      const waitSeconds = Math.ceil((SUBMIT_COOLDOWN_MS - (now - lastSubmitAt)) / 1000);
      setStatus(`Please wait ${waitSeconds}s before sending another message.`);
      return;
    }

    if (now - formOpenedAtRef.current < HUMAN_MIN_FILL_MS) {
      setStatus("Please take a second to fill out the form, then submit again.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message, _gotcha: gotcha }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully.");
      setLastSubmitAt(Date.now());
      setName("");
      setEmail("");
      setMessage("");
      setGotcha("");
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b1220] via-[#111827] to-[#0b1220]"
    >
      <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="container px-5 py-10 mx-auto flex lg:flex-nowrap flex-wrap">
        <div className="lg:w-3/4 md:w-3/4 bg-slate-900 rounded-xl overflow-hidden sm:mr-10 p-6 md:p-10 flex items-end justify-start relative border border-sky-300/20">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ filter: "opacity(0.7)" }}
            src={mapEmbedUrl}
          />
          <div className="bg-slate-950/90 relative flex flex-wrap py-6 rounded-xl shadow-md w-full max-w-2xl border border-white/10">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1">
                Dallas-Fort Worth, TX
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:ashsabraham99@gmail.com"
                className="text-sky-300 leading-relaxed hover:text-sky-200">
                ashsabraham99@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                LINKEDIN
              </h2>
              <a
                href="https://www.linkedin.com/in/ashish-s-abraham99/"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed text-sky-300 hover:text-sky-200"
              >
                linkedin.com/in/ashish-s-abraham99
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-semibold title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5">
            Do reach out if you want to collaborate or get in touch!
          </p>
          {status ? (
            <p
              className={`mb-4 text-sm ${isErrorStatus ? "text-rose-300" : "text-teal-300"}`}
              role="status">
              {status}
            </p>
          ) : null}
          <div className="relative mb-4">
            <label htmlFor="company" className="sr-only" aria-hidden="true">
              Company
            </label>
            <input
              id="company"
              name="_gotcha"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={gotcha}
              onChange={(e) => setGotcha(e.target.value)}
              className="hidden"
              aria-hidden="true"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              className="w-full bg-slate-900 rounded border border-slate-700 focus:border-teal-300 focus:ring-2 focus:ring-teal-500/20 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              className="w-full bg-slate-900 rounded border border-slate-700 focus:border-teal-300 focus:ring-2 focus:ring-teal-500/20 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              className="w-full bg-slate-900 rounded border border-slate-700 focus:border-teal-300 focus:ring-2 focus:ring-teal-500/20 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 rounded text-lg disabled:opacity-70">
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
