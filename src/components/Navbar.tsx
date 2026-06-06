"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "../utils/analytics";
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Our Work" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const GIcon = () => (
  <svg
    viewBox="-2 0 68 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 44, height: 44, flexShrink: 0 }}
    aria-hidden="true"
  >
    <rect x="0" y="0" width="45" height="12" fill="#0f172a" />
    <rect x="0" y="0" width="12" height="62" fill="#0f172a" />
    <rect x="0" y="50" width="60" height="14" fill="#0f172a" />
    <rect x="48" y="27" width="12" height="33" fill="#0f172a" />
    <rect x="27" y="25" width="33" height="12" fill="#0f172a" />
    <rect x="48" y="0" width="12" height="12" fill="#14b8a6" />
  </svg>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);

  const isActive = (path: string) =>
    path === "/blog" ? pathname.startsWith("/blog") : pathname === path;

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (!isOpen) return;
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 900,
        padding: "12px 16px",
        transition: "padding 240ms ease, background 240ms ease",
        background: scrolled ? "rgba(248,251,255,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="gx-navbar-frame"
          style={{
            position: "relative",
            alignItems: "center",
            gap: 16,
            minHeight: 68,
            border: "1px solid rgba(148,163,184,0.26)",
            borderRadius: 16,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(248,251,255,0.84))",
            boxShadow: scrolled
              ? "0 20px 50px rgba(15,23,42,0.12)"
              : "0 14px 34px rgba(15,23,42,0.08)",
            padding: "10px 12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: 2,
              background:
                "linear-gradient(90deg, transparent, rgba(20,184,166,0.72), rgba(14,165,233,0.58), transparent)",
            }}
          />

          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Greexa PrimeTech home"
            style={{
              justifySelf: "start",
              width: "fit-content",
              minWidth: 0,
              borderRadius: 14,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                background: "#ffffff",
                padding: 7,
                boxShadow: "0 12px 28px rgba(15,23,42,0.1)",
              }}
            >
              <GIcon />
            </span>
            <span className="flex flex-col">
              <span
                style={{
                  color: "#0f172a",
                  fontSize: 22,
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                Gree<span style={{ color: "#14b8a6" }}>x</span>a
              </span>
              <span
                style={{
                  marginTop: 5,
                  color: "#64748b",
                  fontSize: 10,
                  fontWeight: 900,
                  letterSpacing: "0.26em",
                }}
              >
                PRIMETECH
              </span>
            </span>
          </Link>

          <div className="gx-navbar-desktop">
            <div style={navPillStyle}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  style={isActive(link.path) ? activeLinkStyle : navLinkStyle}
                  onClick={() =>
                    trackEvent("navbar_link_click", {
                      location: "navbar_desktop",
                      page: link.label,
                      path: link.path,
                    })
                  }
                >
                  {isActive(link.path) && (
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: "#14b8a6",
                        boxShadow: "0 0 0 4px rgba(20,184,166,0.14)",
                      }}
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="gx-navbar-desktop-cta">
            {/* <Link
                  href="/contact"
                  style={quoteButtonStyle}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = "translateY(-2px)";
                    event.currentTarget.style.background = "#0f766e";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = "translateY(0)";
                    event.currentTarget.style.background = "#0f172a";
                  }}
                >
                  Get a Quote
                  <ArrowUpRight size={16} />
                </Link> */}
            <Link
              href="/contact"
              style={quoteButtonStyle}
              onClick={() =>
                trackEvent("quote_button_click", {
                  location: "navbar_desktop",
                  button_text: "Get a Quote",
                })
              }
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-2px)";
                event.currentTarget.style.background = "#0f766e";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.background = "#0f172a";
              }}
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className="gx-navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 42,
              border: "1px solid rgba(148,163,184,0.32)",
              borderRadius: 12,
              background: "#ffffff",
              color: "#0f172a",
              boxShadow: "0 10px 24px rgba(15,23,42,0.08)",
            }}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {isOpen && (
          <div
            className="gx-navbar-mobile-menu md:hidden"
            style={{
              marginTop: 10,
              border: "1px solid rgba(148,163,184,0.24)",
              borderRadius: 16,
              background: "rgba(255,255,255,0.96)",
              boxShadow: "0 22px 50px rgba(15,23,42,0.14)",
              padding: 10,
              backdropFilter: "blur(18px)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 12,
                  padding: "13px 14px",
                  color: isActive(link.path) ? "#0f766e" : "#334155",
                  background: isActive(link.path) ? "#f0fdfa" : "transparent",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {isActive(link.path) && (
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 999,
                      background: "#14b8a6",
                    }}
                  />
                )}
                {link.label}
              </Link>
            ))}
            {/* 
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                ...quoteButtonStyle,
                width: "100%",
                marginTop: 8,
                justifyContent: "center",
              }}
              
            >
              
              Get a Quote
              <ArrowUpRight size={16} />
            </Link> */}
            <Link
              href="/contact"
              onClick={() => {
                trackEvent("quote_button_click", {
                  location: "navbar_mobile",
                  button_text: "Get a Quote",
                });
                setIsOpen(false);
              }}
              style={{
                ...quoteButtonStyle,
                width: "100%",
                marginTop: 8,
                justifyContent: "center",
              }}
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

const navPillStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  border: "1px solid rgba(148,163,184,0.22)",
  borderRadius: 999,
  background: "rgba(255,255,255,0.76)",
  padding: 5,
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)",
} as const;

const navLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  borderRadius: 999,
  padding: "9px 16px",
  color: "#475569",
  fontSize: 14,
  fontWeight: 800,
  transition: "background 180ms ease, color 180ms ease",
} as const;

const activeLinkStyle = {
  ...navLinkStyle,
  color: "#0f766e",
  background: "#ffffff",
  boxShadow: "0 8px 20px rgba(15,23,42,0.08)",
} as const;

const quoteButtonStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 9,
  borderRadius: 999,
  background: "#0f172a",
  color: "#ffffff",
  padding: "11px 17px",
  fontSize: 14,
  fontWeight: 900,
  boxShadow: "0 14px 28px rgba(15,23,42,0.16)",
  transition: "transform 180ms ease, background 180ms ease",
} as const;
