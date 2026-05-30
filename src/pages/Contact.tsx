import { PageLayout } from "../components/PageLayout";
import { GlassCard } from "../components/GlassCard";
import { GlowButton } from "../components/GlowButton";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  X,
} from "lucide-react";
import { useState, FormEvent, useRef, useEffect } from "react";
import type { CSSProperties } from "react";
import emailjs from "@emailjs/browser";
import { SEO } from "../components/SEO";
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

// async function uploadToCloudinary(file: File): Promise<string> {
//   const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
//   const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

//   if (!cloudName || !uploadPreset) {
//     throw new Error("Cloudinary env vars not configured properly.");
//   }

//   const form = new FormData();
//   form.append("file", file);
//   form.append("upload_preset", uploadPreset);

//   // ✅ important for PDF/DOC/ZIP
//   // This makes it go to /raw/upload/...
//   form.append("resource_type", "raw");

//   const res = await fetch(
//     `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
//     { method: "POST", body: form },
//   );

//   if (!res.ok) {
//     const err = await res.text();
//     throw new Error(`Cloudinary upload failed: ${err}`);
//   }

//   const data = await res.json();
//   return data.secure_url as string; // ✅ returns https://res.cloudinary.com/.../raw/upload/...
// }

// export default function Contact() {
//   const formRef = useRef<HTMLFormElement | null>(null);

//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     service: "",
//     budget: "",
//     message: "",
//   });

//   const [file, setFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errorMsg, setErrorMsg] = useState<string>("");

//   const inputBase =
//     "w-full px-4 py-3 glass-card rounded-lg text-gray-200 placeholder-gray-500 " +
//     "focus:outline-none focus:ring-2 focus:ring-[#00d9ff]/50 focus:border-[#00d9ff]/50 transition-all " +
//     "bg-transparent";

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const selected = e.target.files[0];

//       const maxBytes = 10 * 1024 * 1024;
//       if (selected.size > maxBytes) {
//         setErrorMsg("File too large. Max allowed size is 10MB.");
//         e.target.value = "";
//         return;
//       }

//       setErrorMsg("");
//       setFile(selected);
//     }
//   };

//   const removeFile = () => setFile(null);

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       company: "",
//       service: "",
//       budget: "",
//       message: "",
//     });
//     setFile(null);
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (isSubmitting) return;

//     setErrorMsg("");
//     setIsSubmitting(true);

//     try {
//       const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//       const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//       const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//       if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
//         throw new Error(
//           "EmailJS environment variables not configured properly.",
//         );
//       }

//       let fileUrl = "";
//       let fileDownloadUrl = "";
//       let fileName = "";
//       let fileType = "";
//       let fileSizeKb: number | "" = "";

//       if (file) {
//         // fileUrl = await uploadToCloudinary(file);

//         fileDownloadUrl = fileUrl.includes("/raw/upload/")
//           ? fileUrl.replace("/raw/upload/", "/raw/upload/fl_attachment/")
//           : fileUrl;

//         fileName = file.name;
//         fileType = file.type || "unknown";
//         fileSizeKb = Math.ceil(file.size / 1024);
//       }

//       const templateParams: Record<string, any> = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         company: formData.company || "N/A",
//         service: formData.service,
//         budget: formData.budget,
//         message: formData.message,

//         file_url: fileUrl,
//         file_download_url: fileDownloadUrl,
//         file_name: fileName || "No file attached",
//         file_type: fileType || "-",
//         file_size_kb: fileSizeKb || "-",
//       };

//       const response = await emailjs.send(
//         SERVICE_ID,
//         TEMPLATE_ID,
//         templateParams,
//         PUBLIC_KEY,
//       );

//       console.log("Email sent:", response);

//       setIsSubmitted(true);
//       resetForm();

//       setTimeout(() => setIsSubmitted(false), 2500);
//     } catch (err: any) {
//       console.error("EmailJS error:", err);
//       setErrorMsg(
//         err?.text ||
//           err?.message ||
//           "Failed to send message. Please try again later.",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <PageLayout>
//       {/* Hero Section */}
//       <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-5xl text-center flex flex-col items-center">
//           <h1 className="gradient-text text-glow-cyan text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
//             Get In Touch
//           </h1>

//           <p className="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-center">
//             Have a project in mind? Let's discuss how we can help bring your
//             vision to life. Fill out the form below and we'll get back to you
//             within 24 hours.
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Info Section */}
//       <section className="pb-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Form Section */}
//             <div className="lg:col-span-2">
//               <GlassCard>
//                 <h2 className="text-2xl font-semibold text-white pb-4">
//                   Send us a message
//                 </h2>

//                 {errorMsg ? (
//                   <div className="mt-3 mb-4 text-sm text-red-400">
//                     {errorMsg}
//                   </div>
//                 ) : null}

//                 {isSubmitted ? (
//                   <div className="mt-3 mb-4 text-sm text-green-400">
//                     ✅ Message sent successfully. We’ll contact you soon.
//                   </div>
//                 ) : null}

//                 <form
//                   ref={formRef}
//                   onSubmit={handleSubmit}
//                   className="space-y-6 mt-4"
//                 >
//                   {/* Name & Email */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-medium text-gray-300"
//                       >
//                         Full Name <span className="text-[#00d9ff]">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         required
//                         value={formData.name}
//                         onChange={(e) =>
//                           setFormData({ ...formData, name: e.target.value })
//                         }
//                         className={inputBase}
//                         placeholder="Rahul Chavan"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium text-gray-300"
//                       >
//                         Email Address <span className="text-[#00d9ff]">*</span>
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         className={inputBase}
//                         placeholder="rahulchavan@gmail.com"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone & Company */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label
//                         htmlFor="phone"
//                         className="block text-sm font-medium text-gray-300"
//                       >
//                         Phone Number <span className="text-[#00d9ff]">*</span>
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         required
//                         value={formData.phone}
//                         onChange={(e) =>
//                           setFormData({ ...formData, phone: e.target.value })
//                         }
//                         className={inputBase}
//                         placeholder="+91 95614 36105"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <label
//                         htmlFor="company"
//                         className="block text-sm font-medium text-gray-300"
//                       >
//                         Company Name (Optional)
//                       </label>
//                       <input
//                         type="text"
//                         id="company"
//                         value={formData.company}
//                         onChange={(e) =>
//                           setFormData({ ...formData, company: e.target.value })
//                         }
//                         className={inputBase}
//                         placeholder="Greexa PrimeTech / Your Business Name"
//                       />
//                     </div>
//                   </div>

//                   {/* Service & Budget */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label
//                         htmlFor="service"
//                         className="block text-sm font-medium text-gray-300"
//                       >
//                         Service Required{" "}
//                         <span className="text-[#00d9ff]">*</span>
//                       </label>
//                       <select
//                         id="service"
//                         required
//                         value={formData.service}
//                         onChange={(e) =>
//                           setFormData({ ...formData, service: e.target.value })
//                         }
//                         className={
//                           inputBase + " appearance-none cursor-pointer"
//                         }
//                       >
//                         <option value="" className="bg-[#0a0e1a]">
//                           Select a service
//                         </option>
//                         <option
//                           value="web-development"
//                           className="bg-[#0a0e1a]"
//                         >
//                           Web Application Development
//                         </option>
//                         <option value="admin-panel" className="bg-[#0a0e1a]">
//                           Admin Panel Development
//                         </option>
//                         <option value="ecommerce" className="bg-[#0a0e1a]">
//                           E-commerce Solutions
//                         </option>
//                         <option
//                           value="api-development"
//                           className="bg-[#0a0e1a]"
//                         >
//                           API Development
//                         </option>
//                         <option
//                           value="cloud-solutions"
//                           className="bg-[#0a0e1a]"
//                         >
//                           Cloud Solutions
//                         </option>
//                         <option value="consulting" className="bg-[#0a0e1a]">
//                           Technical Consulting
//                         </option>
//                       </select>
//                     </div>

//                     <div className="space-y-2">
//                       <label
//                         htmlFor="budget"
//                         className="block text-sm font-medium text-gray-300"
//                       >
//                         Project Budget <span className="text-[#00d9ff]">*</span>
//                       </label>
//                       <select
//                         id="budget"
//                         required
//                         value={formData.budget}
//                         onChange={(e) =>
//                           setFormData({ ...formData, budget: e.target.value })
//                         }
//                         className={
//                           inputBase + " appearance-none cursor-pointer"
//                         }
//                       >
//                         <option value="" className="bg-[#0a0e1a]">
//                           Select budget range
//                         </option>
//                         <option value="10k-15k" className="bg-[#0a0e1a]">
//                           ₹10,000 - ₹15,000
//                         </option>
//                         <option value="20k-30k" className="bg-[#0a0e1a]">
//                           ₹20,000 - ₹30,000
//                         </option>
//                         <option value="40k-60k" className="bg-[#0a0e1a]">
//                           ₹40,000 - ₹60,000
//                         </option>
//                         <option value="1l-15l" className="bg-[#0a0e1a]">
//                           ₹1,00,000 - ₹15,00,000
//                         </option>
//                         <option value="15l+" className="bg-[#0a0e1a]">
//                           ₹15,00,000+
//                         </option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Message */}
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium text-gray-300"
//                     >
//                       Project Details <span className="text-[#00d9ff]">*</span>
//                     </label>
//                     <textarea
//                       id="message"
//                       required
//                       rows={6}
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       className={inputBase + " resize-none"}
//                       placeholder="Example: I need a business website with enquiry form, WhatsApp integration, and admin panel..."
//                     />
//                   </div>

//                   {/* File Upload */}
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="file"
//                       className="block text-sm font-medium text-gray-300"
//                     >
//                       Attach File (Optional)
//                     </label>

//                     <div className="relative">
//                       <input
//                         type="file"
//                         id="file"
//                         onChange={handleFileChange}
//                         className="hidden"
//                         accept=".pdf,.doc,.docx,.txt,.zip"
//                       />

//                       <label
//                         htmlFor="file"
//                         className="flex items-center justify-center gap-2 w-full px-4 py-3 glass-card-hover rounded-lg text-gray-300 cursor-pointer transition-all"
//                       >
//                         <Upload className="w-5 h-5 text-[#00d9ff]" />
//                         <span>
//                           {file ? file.name : "Choose a file to upload"}
//                         </span>
//                       </label>

//                       {file && (
//                         <button
//                           type="button"
//                           onClick={removeFile}
//                           className="absolute right-3 top-1/2 -translate-y-1/2 p-1 glass-card-hover rounded"
//                         >
//                           <X className="w-4 h-4 text-gray-400" />
//                         </button>
//                       )}
//                     </div>

//                     <p className="text-xs text-gray-500">
//                       Accepted formats: PDF, DOC, DOCX, TXT, ZIP (Max 10MB)
//                     </p>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="pt-4">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="
//                         w-full flex items-center justify-center gap-2
//                         px-6 py-3 rounded-lg
//                         bg-gradient-to-r from-[#00d9ff] to-[#0084ff]
//                         text-white font-semibold
//                         transition-all duration-300
//                         hover:shadow-lg hover:shadow-[#00d9ff]/30
//                         disabled:opacity-60 disabled:cursor-not-allowed
//                       "
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader2 className="w-5 h-5 animate-spin" />
//                           Sending...
//                         </>
//                       ) : isSubmitted ? (
//                         "Message Sent! ✓"
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5" />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </GlassCard>
//             </div>

//             {/* Contact Info Section (unchanged) */}
//             <div className="space-y-6">
//               <GlassCard>
//                 <h3 className="text-xl font-semibold text-white mb-6">
//                   Contact Information
//                 </h3>

//                 <div className="space-y-6 mt-4">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00d9ff]/10 to-[#0084ff]/10 flex items-center justify-center text-[#00d9ff] border border-[#00d9ff]/20 flex-shrink-0">
//                       <Mail className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white mb-1">Email</h4>
//                       <a
//                         href="mailto:greexaprimetech@gmail.com"
//                         className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm break-all"
//                       >
//                         greexaprimetech@gmail.com
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00d9ff]/10 to-[#0084ff]/10 flex items-center justify-center text-[#00d9ff] border border-[#00d9ff]/20 flex-shrink-0">
//                       <MapPin className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white mb-1">
//                         Location
//                       </h4>
//                       <p className="text-gray-400 text-sm">Hyderabad, India</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#00d9ff]/10 to-[#0084ff]/10 flex items-center justify-center text-[#00d9ff] border border-[#00d9ff]/20 flex-shrink-0">
//                       <Phone className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-white mb-2">Phone</h4>
//                       <div className="space-y-2">
//                         <div>
//                           <p className="text-xs text-gray-500">Rahul Chavan</p>
//                           <a
//                             href="tel:+919561436105"
//                             className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm"
//                           >
//                             +91 9561436105
//                           </a>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500">Nitin Chavan</p>
//                           <a
//                             href="tel:+919325997861"
//                             className="text-gray-400 hover:text-[#00d9ff] transition-colors text-sm"
//                           >
//                             +91 9325997861
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </GlassCard>
//               <GlassCard>
//                 {" "}
//                 <h3 className="text-xl font-semibold text-white mb-4">
//                   {" "}
//                   Business Hours{" "}
//                 </h3>{" "}
//                 <div className="space-y-3 text-sm mt-4">
//                   {" "}
//                   <div className="flex justify-between">
//                     {" "}
//                     <span className="text-gray-400">Monday - Friday</span>{" "}
//                     <span className="text-white">9:00 AM - 6:00 PM</span>{" "}
//                   </div>{" "}
//                   <div className="flex justify-between">
//                     {" "}
//                     <span className="text-gray-400">Saturday-Sunday</span>{" "}
//                     <span className="text-white">10:00 AM - 4:00 PM</span>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </GlassCard>{" "}
//               <GlassCard className="relative overflow-hidden">
//                 {" "}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#00d9ff]/5 to-[#0084ff]/5" />{" "}
//                 <div className="relative space-y-2">
//                   {" "}
//                   <h3 className="text-lg font-semibold text-white">
//                     {" "}
//                     Quick Response Guarantee{" "}
//                   </h3>{" "}
//                   <p className="text-sm text-gray-400">
//                     {" "}
//                     We typically respond to all inquiries within 24 hours during
//                     business days.{" "}
//                   </p>{" "}
//                 </div>{" "}
//               </GlassCard>
//             </div>
//           </div>
//         </div>
//       </section>
//     </PageLayout>
//   );
// }

function SuccessPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          border: "1px solid rgba(148,163,184,0.3)",
          borderRadius: "1.25rem",
          boxShadow: "0 24px 70px rgba(15,23,42,0.22)",
          padding: "2.5rem 2rem",
          maxWidth: "420px",
          width: "100%",
          textAlign: "center",
          animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        {/* Glow ring around icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(20,184,166,0.16) 0%, transparent 70%)",
            border: "2px solid rgba(20,184,166,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
            animation: "pulseGlow 2s ease-in-out infinite",
          }}
        >
          <CheckCircle2 style={{ width: 40, height: 40, color: "#14b8a6" }} />
        </div>

        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          Message Sent! 🎉
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            marginBottom: "0.5rem",
          }}
        >
          Thank you for reaching out to{" "}
          <span style={{ color: "#0f766e", fontWeight: 600 }}>
            Greexa PrimeTech
          </span>
          .
        </p>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          We've received your message and will get back to you within{" "}
          <span style={{ color: "#0f172a", fontWeight: 500 }}>24 hours</span>{" "}
          during business days.
        </p>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.625rem",
            background: "#0f172a",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.95rem",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 14px 34px rgba(15,23,42,0.18)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 18px 40px rgba(15,23,42,0.22)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 4px 24px rgba(0,217,255,0.3)";
            (e.currentTarget as HTMLButtonElement).style.transform =
              "translateY(0)";
          }}
        >
          Got it, thanks!
        </button>
      </div>

      <style>{`
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.8) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,217,255,0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(0,217,255,0); }
        }
      `}</style>
    </div>
  );
}

// ─── Premium Spinner ───────────────────────────────────────────────────────────
function PremiumSpinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.25)",
        borderTopColor: "#ffffff",
        animation: "spinPremium 0.7s linear infinite",
        flexShrink: 0,
      }}
    />
  );
}

// ─── Main Contact Component ────────────────────────────────────────────────────
export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  // ── Input base style ──
  const inputBase =
    "contact-premium-field w-full text-slate-900 placeholder-slate-400";

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error(
          "EmailJS environment variables not configured properly.",
        );
      }

      const templateParams: Record<string, any> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "N/A",
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        file_name: "No file attached",
        file_type: "-",
        file_size_kb: "-",
        file_url: "",
        file_download_url: "",
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY,
      );
      console.log("Email sent:", response);

      resetForm();
      setIsSubmitted(true); // show popup
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setErrorMsg(
        err?.text ||
          err?.message ||
          "Failed to send message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Shared hover handlers for glow + cursor ──
  const btnHoverEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.cursor = "pointer";
    e.currentTarget.style.boxShadow = "0 16px 34px rgba(15, 23, 42, 0.18)";
    e.currentTarget.style.transform = "translateY(-1px)";
  };
  const btnHoverLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <PageLayout>
      <SEO
        title="Contact Greexa PrimeTech | Website & Software Development Company"
        description="Contact Greexa PrimeTech to discuss website development, custom software, SaaS platforms, CRM systems, dashboards, APIs, and AI automation solutions."
        keywords="contact Greexa PrimeTech, software development enquiry, website development company contact, custom software consultation"
        canonical="https://www.greexaprimetech.com/contact"
      />
      {/* ── Keyframes injected once ── */}
      <style>{`
        @keyframes spinPremium {
          to { transform: rotate(360deg); }
        }
        @keyframes contactFormRise {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes contactFieldRise {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes contactBorderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes contactSheen {
          0% { transform: translateX(-120%) rotate(10deg); opacity: 0; }
          18% { opacity: 0.55; }
          42%, 100% { transform: translateX(145%) rotate(10deg); opacity: 0; }
        }
        @keyframes contactFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }
        .contact-form-shell {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(20, 184, 166, 0.2);
          border-radius: 1.5rem;
          padding: clamp(1.2rem, 2.4vw, 1.9rem);
          background:
            linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.94)),
            #ffffff;
          box-shadow:
            0 34px 90px rgba(15,23,42,0.12),
            inset 0 1px 0 rgba(255,255,255,0.96);
          animation: contactFormRise 680ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .contact-form-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background: linear-gradient(120deg, rgba(20,184,166,0.68), rgba(14,165,233,0.18), rgba(20,184,166,0.5));
          background-size: 240% 240%;
          opacity: 0.68;
          pointer-events: none;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: contactBorderFlow 6s ease infinite;
        }
        .contact-form-shell::after {
          content: "";
          position: absolute;
          top: -40%;
          left: 0;
          width: 34%;
          height: 180%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.72), transparent);
          pointer-events: none;
          animation: contactSheen 5.8s ease-in-out infinite;
        }
        .contact-form-glow {
          position: absolute;
          z-index: 0;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(4px);
          animation: contactFloat 7s ease-in-out infinite;
        }
        .contact-form-glow.one {
          width: 190px;
          height: 190px;
          right: -70px;
          top: -70px;
          background: rgba(20, 184, 166, 0.12);
        }
        .contact-form-glow.two {
          width: 170px;
          height: 170px;
          left: -78px;
          bottom: 13%;
          background: rgba(14, 165, 233, 0.1);
          animation-delay: -2.5s;
        }
        .contact-form-content {
          position: relative;
          z-index: 1;
        }
        .contact-field-group {
          animation: contactFieldRise 520ms ease both;
        }
        .contact-field-group:nth-child(2) { animation-delay: 70ms; }
        .contact-field-group:nth-child(3) { animation-delay: 140ms; }
        .contact-field-group:nth-child(4) { animation-delay: 210ms; }
        .contact-field-group:nth-child(5) { animation-delay: 280ms; }
        .contact-field-group:nth-child(6) { animation-delay: 350ms; }
        .glow-btn {
          transition: box-shadow 0.25s ease, transform 0.25s ease, background 0.25s ease;
        }
        .glow-btn:hover {
          cursor: pointer;
          box-shadow: 0 20px 42px rgba(20, 184, 166, 0.24), 0 12px 24px rgba(15, 23, 42, 0.16);
          transform: translateY(-2px);
        }
        .glow-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }
        .contact-premium-field {
          min-height: 52px;
          width: 100%;
          padding: 0.82rem 1rem;
          border-radius: 0.95rem;
          border: 1px solid rgba(20, 184, 166, 0.16);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(248, 252, 255, 0.9));
          color: #0f172a !important;
          -webkit-text-fill-color: #0f172a;
          caret-color: #0f766e;
          font-weight: 700;
          box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.9);
          outline: none;
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease, background 0.22s ease;
        }
        .contact-premium-field:-webkit-autofill,
        .contact-premium-field:-webkit-autofill:hover,
        .contact-premium-field:-webkit-autofill:focus {
          -webkit-text-fill-color: #0f172a;
          caret-color: #0f766e;
          box-shadow:
            0 14px 34px rgba(15, 23, 42, 0.06),
            inset 0 0 0 1000px #ffffff;
        }
        .contact-premium-field:hover {
          border-color: rgba(20, 184, 166, 0.34);
          transform: translateY(-1px);
        }
        .contact-premium-field:focus {
          border-color: rgba(20, 184, 166, 0.75);
          background: #ffffff;
          box-shadow: 0 20px 48px rgba(15, 23, 42, 0.09), 0 0 0 4px rgba(20, 184, 166, 0.13);
          transform: translateY(-2px);
        }
        .contact-premium-field::placeholder {
          color: #94a3b8;
          -webkit-text-fill-color: #94a3b8;
          font-weight: 500;
        }
        textarea.contact-premium-field {
          min-height: 124px;
          resize: vertical;
        }
        select.contact-premium-field {
          appearance: none;
          cursor: pointer;
        }
        /* Responsive helpers */
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid-2 { grid-template-columns: 1fr !important; }
          .hero-title  { font-size: 1.875rem !important; }
          .hero-sub    { font-size: 1rem !important; }
          .section-pad { padding: 2.5rem 1rem 1.5rem !important; }
        }
        @media (max-width: 980px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-form-shell,
          .contact-form-shell::before,
          .contact-form-shell::after,
          .contact-form-glow,
          .contact-field-group {
            animation: none !important;
          }
        }
      `}</style>

      {/* ── Success Popup ── */}
      {isSubmitted && <SuccessPopup onClose={() => setIsSubmitted(false)} />}

      {/* ── Page wrapper (replace with your <PageLayout> in real usage) ── */}
      <div>
        {/* Hero */}
        <section
          className="section-pad"
          style={{
            padding: "3.5rem 1rem 2.25rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              maxWidth: "1280px",
              margin: "0 auto",
              border: "1px solid rgba(20,184,166,0.22)",
              borderRadius: "1.75rem",
              padding: "clamp(2.5rem, 6vw, 5.75rem) 1.5rem",
              background:
                "linear-gradient(135deg, rgba(240,253,250,0.9), rgba(255,255,255,0.86) 45%, rgba(239,246,255,0.92))",
              boxShadow:
                "0 30px 90px rgba(15,23,42,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 420,
                height: 420,
                left: -150,
                top: -170,
                borderRadius: "50%",
                background: "rgba(20,184,166,0.16)",
                filter: "blur(24px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 440,
                height: 440,
                right: -170,
                bottom: -210,
                borderRadius: "50%",
                background: "rgba(14,165,233,0.15)",
                filter: "blur(24px)",
              }}
            />
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                marginBottom: "1.15rem",
                padding: "0.65rem 1.1rem",
                borderRadius: 999,
                border: "1px solid rgba(20,184,166,0.24)",
                background: "rgba(236,253,245,0.75)",
                color: "#0f766e",
                fontSize: "0.78rem",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Start your project
            </span>
            <h1
              className="hero-title gradient-text text-glow-cyan"
              style={{
                position: "relative",
                margin: 0,
                color: "#0f172a",
                fontSize: "clamp(3.2rem, 7vw, 6.8rem)",
                lineHeight: 0.92,
                fontWeight: 950,
                letterSpacing: "-0.045em",
              }}
            >
              Get In Touch
            </h1>
            <p
              className="hero-sub"
              style={{
                position: "relative",
                maxWidth: "760px",
                margin: "1.5rem auto 0",
                color: "#64748b",
                fontSize: "clamp(1.05rem, 2vw, 1.45rem)",
                lineHeight: 1.6,
              }}
            >
              Tell us what you want to build. We will help shape the right
              website, dashboard, API, or automation system with a clean plan
              and a polished execution path.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section style={{ paddingBottom: "6rem", padding: "0 1rem 6rem" }}>
          <div
            className="contact-grid"
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.35fr) minmax(300px, 0.65fr)",
              gap: "1.75rem",
              alignItems: "start",
            }}
          >
            {/* ── Form Card ── */}
            <div className="contact-form-shell">
              <span className="contact-form-glow one" />
              <span className="contact-form-glow two" />
              <div className="contact-form-content">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    marginBottom: "0.85rem",
                    border: "1px solid rgba(20,184,166,0.2)",
                    borderRadius: 999,
                    background: "rgba(240,253,250,0.86)",
                    padding: "0.45rem 0.75rem",
                    color: "#0f766e",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  enquiry form
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.75rem, 3vw, 2.6rem)",
                    lineHeight: 1,
                    fontWeight: 950,
                    color: "#0f172a",
                    letterSpacing: "-0.035em",
                  }}
                >
                  Send us your project details
                </h2>
                <p
                  style={{
                    margin: "0.75rem 0 1.5rem",
                    color: "#64748b",
                    fontSize: "1rem",
                    lineHeight: 1.65,
                  }}
                >
                  Share the goal, timeline, and features. We will review it and
                  reply with the cleanest next step.
                </p>

                {/* Error */}
                {errorMsg && (
                  <div
                    style={{
                      marginBottom: "1rem",
                      color: "#f87171",
                      fontSize: "0.875rem",
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  style={{ marginTop: "1rem" }}
                >
                  {/* Name & Email */}
                  <div
                    className="form-grid-2"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        htmlFor="name"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#334155",
                        }}
                      >
                        Full Name <span style={{ color: "#14b8a6" }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={inputBase}
                        placeholder="Enter Your Name"
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        htmlFor="email"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#334155",
                        }}
                      >
                        Email Address{" "}
                        <span style={{ color: "#14b8a6" }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={inputBase}
                        placeholder="Enter Your Email Adress"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div
                    className="form-grid-2"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        htmlFor="phone"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#334155",
                        }}
                      >
                        Phone Number <span style={{ color: "#14b8a6" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={inputBase}
                        placeholder="+91 xxxxxxxxxx"
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        htmlFor="company"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#334155",
                        }}
                      >
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className={inputBase}
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div
                    className="form-grid-2"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        htmlFor="service"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#334155",
                        }}
                      >
                        Service Required{" "}
                        <span style={{ color: "#14b8a6" }}>*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className={
                          inputBase + " appearance-none cursor-pointer"
                        }
                      >
                        <option value="" className="bg-[#0a0e1a]">
                          Select a service
                        </option>
                        <option
                          value="web-development"
                          className="bg-[#0a0e1a]"
                        >
                          Web Application Development
                        </option>
                        <option value="admin-panel" className="bg-[#0a0e1a]">
                          Admin Panel Development
                        </option>
                        <option value="ecommerce" className="bg-[#0a0e1a]">
                          E-commerce Solutions
                        </option>
                        <option
                          value="api-development"
                          className="bg-[#0a0e1a]"
                        >
                          API Development
                        </option>
                        <option
                          value="cloud-solutions"
                          className="bg-[#0a0e1a]"
                        >
                          Cloud Solutions
                        </option>
                        <option value="consulting" className="bg-[#0a0e1a]">
                          Technical Consulting
                        </option>
                      </select>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        htmlFor="budget"
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "#334155",
                        }}
                      >
                        Project Budget{" "}
                        <span style={{ color: "#14b8a6" }}>*</span>
                      </label>
                      <select
                        id="budget"
                        required
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className={
                          inputBase + " appearance-none cursor-pointer"
                        }
                      >
                        <option value="" className="bg-[#0a0e1a]">
                          Select budget range
                        </option>
                        <option value="10k-15k" className="bg-[#0a0e1a]">
                          ₹10,000 - ₹15,000
                        </option>
                        <option value="20k-30k" className="bg-[#0a0e1a]">
                          ₹20,000 - ₹30,000
                        </option>
                        <option value="40k-60k" className="bg-[#0a0e1a]">
                          ₹40,000 - ₹60,000
                        </option>
                        <option value="1l-15l" className="bg-[#0a0e1a]">
                          ₹1,00,000 - ₹15,00,000
                        </option>
                        <option value="15l+" className="bg-[#0a0e1a]">
                          ₹15,00,000+
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <label
                      htmlFor="message"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "#334155",
                      }}
                    >
                      Project Details{" "}
                      <span style={{ color: "#14b8a6" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={inputBase + " resize-none"}
                      placeholder="Example: I need a business website with enquiry form, WhatsApp integration, and admin panel..."
                    />
                  </div>

                  {/* Submit Button — premium glow + hand cursor + spinner */}
                  <div style={{ paddingTop: "1rem" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="glow-btn"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.625rem",
                        minHeight: 60,
                        padding: "0.95rem 1.5rem",
                        borderRadius: "1rem",
                        background: "linear-gradient(135deg, #0f172a, #115e59)",
                        color: "#ffffff",
                        fontWeight: 900,
                        fontSize: "1rem",
                        border: "none",
                        letterSpacing: "0.02em",
                        boxShadow:
                          "0 22px 48px rgba(15,23,42,0.22), inset 0 1px 0 rgba(255,255,255,0.14)",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <PremiumSpinner />
                          <span>Sending your message…</span>
                        </>
                      ) : (
                        <>
                          <Send
                            style={{ width: 18, height: 18, flexShrink: 0 }}
                          />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ── Contact Info ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Contact Info Card */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                  padding: "1.9rem",
                  border: "1px solid rgba(20,184,166,0.2)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(240,253,250,0.82))",
                  boxShadow: "0 28px 75px rgba(15,23,42,0.1)",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    width: 240,
                    height: 240,
                    right: -110,
                    top: -110,
                    borderRadius: "50%",
                    background: "rgba(20,184,166,0.14)",
                    filter: "blur(12px)",
                  }}
                />
                <h3
                  style={{
                    position: "relative",
                    fontSize: "1.45rem",
                    fontWeight: 950,
                    color: "#0f172a",
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Contact Information
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {/* Email */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={iconBoxStyle}>
                      <Mail
                        style={{ width: 20, height: 20, color: "#14b8a6" }}
                      />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: 600,
                          color: "#0f172a",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Email
                      </h4>
                      <a
                        href="mailto:greexaprimetech@gmail.com"
                        style={linkStyle}
                      >
                        greexaprimetech@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={iconBoxStyle}>
                      <MapPin
                        style={{ width: 20, height: 20, color: "#14b8a6" }}
                      />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: 600,
                          color: "#0f172a",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Location
                      </h4>
                      <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
                        Hyderabad, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={iconBoxStyle}>
                      <Phone
                        style={{ width: 20, height: 20, color: "#14b8a6" }}
                      />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: 600,
                          color: "#0f172a",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Phone
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.65rem",
                        }}
                      >
                        <a href="tel:+919561436105" style={phoneLinkStyle}>
                          +91 9561436105
                        </a>
                        <a href="tel:+919325997861" style={phoneLinkStyle}>
                          +91 9325997861
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div
                style={{
                  borderRadius: "1.5rem",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(15,23,42,0.08)",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(19,78,74,0.92))",
                  boxShadow: "0 28px 75px rgba(15,23,42,0.18)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(0,217,255,0.05), rgba(0,132,255,0.05))",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 900,
                      color: "#ffffff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Quick Response Guarantee
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(226,232,240,0.82)",
                      lineHeight: 1.6,
                    }}
                  >
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

const iconBoxStyle: CSSProperties = {
  width: "48px",
  height: "48px",
  borderRadius: "0.625rem",
  background:
    "linear-gradient(135deg, rgba(20,184,166,0.12), rgba(14,165,233,0.1))",
  border: "1px solid rgba(20,184,166,0.24)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const linkStyle: CSSProperties = {
  color: "#64748b",
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: "color 0.2s",
  wordBreak: "break-all",
};

const phoneLinkStyle: CSSProperties = {
  ...linkStyle,
  display: "inline-flex",
  width: "fit-content",
  padding: "0.5rem 0.75rem",
  borderRadius: "999px",
  border: "1px solid rgba(20,184,166,0.18)",
  background: "rgba(240,253,250,0.72)",
  color: "#0f766e",
  fontWeight: 850,
  wordBreak: "normal",
};
