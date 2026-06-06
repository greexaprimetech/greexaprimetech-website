"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MIN_VISIBLE_MS = 220;
const FALLBACK_HIDE_MS = 1600;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

function getInternalHref(anchor: HTMLAnchorElement) {
  if (!anchor.href) return null;

  const target = new URL(anchor.href);
  if (target.origin !== window.location.origin) return null;
  if (anchor.target && anchor.target !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;

  return `${target.pathname}${target.search}${target.hash}`;
}

export function RouteTransition() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const previousPath = useRef(pathname);
  const startedAt = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fallbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function clearTimers() {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    }

    function showTransition() {
      clearTimers();
      startedAt.current = performance.now();
      setIsVisible(true);
      fallbackTimer.current = setTimeout(() => {
        setIsVisible(false);
      }, FALLBACK_HIDE_MS);
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || isModifiedClick(event)) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const href = getInternalHref(anchor);
      if (!href) return;

      const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
      if (href === current || href.startsWith(`${window.location.pathname}#`)) {
        return;
      }

      showTransition();
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => {
      clearTimers();
      document.removeEventListener("click", onClick, { capture: true });
    };
  }, []);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    if (!isVisible) return;

    const elapsed = performance.now() - startedAt.current;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 80);

    if (fallbackTimer.current) clearTimeout(fallbackTimer.current);
    if (hideTimer.current) clearTimeout(hideTimer.current);

    hideTimer.current = setTimeout(() => {
      setIsVisible(false);
    }, remaining);
  }, [pathname]);

  return (
    <div
      className={`gx-route-loader${isVisible ? " is-visible" : ""}`}
      aria-hidden={!isVisible}
    >
      <div className="gx-route-loader-bar" />
      <div className="gx-route-loader-mark">
        <img src="/favicon.png" alt="" width={52} height={52} />
      </div>
    </div>
  );
}
