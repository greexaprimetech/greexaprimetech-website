import { ArrowRight } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GlowButton } from "./GlowButton";

export function CTASection() {
  return (
    <section className="premium-section bg-[#f8fbff] px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-5xl">
        <GlassCard className="premium-card relative overflow-hidden text-center space-y-7 p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50 to-sky-50" />
          <div className="premium-ambient absolute -right-20 -top-24 h-56 w-56 rounded-full bg-teal-200/55 blur-3xl" />
          <div className="premium-ambient absolute -bottom-28 -left-20 h-60 w-60 rounded-full bg-sky-200/55 blur-3xl" />

          <div className="relative z-10 space-y-6">
            <h2 className="gradient-text text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Let's discuss how we can help bring your vision to life with our
              premium development services.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-3 sm:flex-row">
              <GlowButton href="/contact" size="lg">
                Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </GlowButton>
              <GlowButton href="/portfolio" variant="outline" size="lg">
                View Our Work
              </GlowButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
