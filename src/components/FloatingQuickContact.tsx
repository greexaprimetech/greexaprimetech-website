import { Phone } from "lucide-react";
import { trackEvent } from "../utils/analytics";

const whatsappNumber = "919561436105";
const displayNumber = "+91 9561436105";
const whatsappMessage = encodeURIComponent(
  "Hi Greexa PrimeTech, I want to discuss a project.",
);

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className="gx-floating-contact-whatsapp-icon"
    >
      <path
        fill="currentColor"
        d="M16.02 4.01c-6.62 0-12 5.34-12 11.91 0 2.23.63 4.39 1.82 6.26L4 28l5.99-1.81a12.11 12.11 0 0 0 6.03 1.61c6.62 0 12-5.34 12-11.9 0-6.56-5.38-11.89-12-11.89Zm0 21.75c-1.93 0-3.81-.56-5.43-1.63l-.43-.28-3.1.94.96-3-.29-.46a9.75 9.75 0 0 1-1.57-5.41c0-5.43 4.43-9.85 9.87-9.85s9.87 4.42 9.87 9.84c0 5.43-4.43 9.85-9.88 9.85Zm5.42-7.37c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.78-1.48-1.75-1.66-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.19 5.09 4.47.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  );
}

export function FloatingQuickContact() {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="gx-floating-contact" aria-label="Quick contact options">
      <a
        className="gx-floating-contact-call"
        href="tel:+919561436105"
        aria-label={`Call Greexa PrimeTech at ${displayNumber}`}
        onClick={() =>
          trackEvent("quick_contact_click", {
            method: "phone",
            location: "floating_contact",
          })
        }
      >
        <Phone size={18} aria-hidden="true" />
        <span>Call</span>
      </a>

      <a
        className="gx-floating-contact-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with Greexa PrimeTech on WhatsApp at ${displayNumber}`}
        onClick={() =>
          trackEvent("quick_contact_click", {
            method: "whatsapp",
            location: "floating_contact",
          })
        }
      >
        <span className="gx-floating-contact-copy">
          <span>Chat on WhatsApp</span>
        </span>
        <span className="gx-floating-contact-icon-wrap">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  );
}
