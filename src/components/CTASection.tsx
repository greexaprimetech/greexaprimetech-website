import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="gx-final-cta-section">
      <div className="gx-final-cta-shell">
        <div className="gx-final-cta-card">
          <div className="gx-final-cta-copy">
            <span>
              <MessageCircle size={16} />
              Free project roadmap
            </span>
            <h2>Turn your idea into a clear build plan.</h2>
            <p>
              Send us your goal, timeline, and must-have features. We will
              reply with a practical first-version plan, budget direction, and
              the next steps to launch with confidence.
            </p>

            <div className="gx-final-cta-points">
              <small>
                <CheckCircle2 size={16} />
                Scope clarity
              </small>
              <small>
                <CheckCircle2 size={16} />
                Feature priority
              </small>
              <small>
                <CheckCircle2 size={16} />
                Launch path
              </small>
            </div>
          </div>

          <div className="gx-final-cta-actions">
            <Link href="/contact" className="gx-final-cta-primary">
              Get my roadmap
              <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="gx-final-cta-secondary">
              See project examples
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
