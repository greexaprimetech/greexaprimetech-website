import type { ReactNode } from "react";

export type LegalSection = {
  title: string;
  text: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updatedDate: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updatedDate,
  sections,
}: LegalPageProps) {
  return (
    <section style={styles.section}>
      <div style={styles.shell}>
        <div style={styles.hero}>
          <span style={styles.eyebrow}>{eyebrow}</span>
          <h1 style={styles.title}>{title}</h1>
          <p style={styles.intro}>{intro}</p>
          <p style={styles.updated}>Last updated: {updatedDate}</p>
        </div>

        <div style={styles.card}>
          {sections.map((section, index) => (
            <article
              key={section.title}
              style={{
                ...styles.item,
                ...(index === sections.length - 1 ? styles.lastItem : {}),
              }}
            >
              <h2 style={styles.itemTitle}>{section.title}</h2>
              <p style={styles.itemText}>{section.text}</p>
            </article>
          ))}
        </div>

        <div style={styles.contactCard}>
          <span style={styles.contactLabel}>Questions about this page?</span>
          <a href="mailto:greexaprimetech@gmail.com" style={styles.contactLink}>
            greexaprimetech@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "clamp(4.25rem, 8vw, 7.5rem) 1rem",
  },
  shell: {
    width: "min(100%, 940px)",
    margin: "0 auto",
  },
  hero: {
    border: "1px solid rgba(20,184,166,0.18)",
    borderRadius: "1rem",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(240,253,250,0.78))",
    padding: "clamp(1.25rem, 4vw, 2rem)",
    boxShadow: "0 24px 70px rgba(15,23,42,0.08)",
  },
  eyebrow: {
    display: "inline-flex",
    border: "1px solid rgba(20,184,166,0.24)",
    borderRadius: 999,
    background: "#f0fdfa",
    color: "#0f766e",
    padding: "0.5rem 0.85rem",
    fontSize: "0.75rem",
    fontWeight: 900,
    letterSpacing: "0.12em",
    lineHeight: 1,
    textTransform: "uppercase",
  },
  title: {
    maxWidth: "13ch",
    marginTop: "1.1rem",
    color: "#0f172a",
    fontSize: "clamp(2.15rem, 6vw, 4.1rem)",
    fontWeight: 950,
    lineHeight: 1,
    letterSpacing: "-0.04em",
  },
  intro: {
    maxWidth: "760px",
    marginTop: "1rem",
    color: "#475569",
    fontSize: "clamp(1rem, 2vw, 1.12rem)",
    lineHeight: 1.75,
  },
  updated: {
    display: "inline-flex",
    marginTop: "1rem",
    border: "1px solid rgba(20,184,166,0.16)",
    borderRadius: 999,
    background: "rgba(240,253,250,0.78)",
    padding: "0.45rem 0.7rem",
    color: "#0f766e",
    fontSize: "0.86rem",
    fontWeight: 850,
  },
  card: {
    display: "grid",
    marginTop: "1.25rem",
    border: "1px solid rgba(148,163,184,0.22)",
    borderRadius: "1rem",
    background: "rgba(255,255,255,0.94)",
    padding: "clamp(1rem, 3vw, 1.5rem)",
    boxShadow: "0 24px 70px rgba(15,23,42,0.08)",
  },
  item: {
    borderBottom: "1px solid rgba(226,232,240,0.9)",
    padding: "0 0 1.05rem",
    marginBottom: "1.05rem",
  },
  lastItem: {
    borderBottom: "none",
    paddingBottom: 0,
    marginBottom: 0,
  },
  itemTitle: {
    color: "#0f172a",
    fontSize: "clamp(1.02rem, 2vw, 1.16rem)",
    fontWeight: 900,
    lineHeight: 1.25,
  },
  itemText: {
    marginTop: "0.5rem",
    color: "#475569",
    fontSize: "0.98rem",
    lineHeight: 1.75,
  },
  contactCard: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.75rem 1rem",
    marginTop: "1rem",
    border: "1px solid rgba(20,184,166,0.18)",
    borderRadius: "0.875rem",
    background: "#0f172a",
    padding: "1rem",
    color: "#e2e8f0",
  },
  contactLabel: {
    fontSize: "0.95rem",
    fontWeight: 800,
  },
  contactLink: {
    color: "#99f6e4",
    fontSize: "0.95rem",
    fontWeight: 900,
    overflowWrap: "anywhere",
  },
} as const;
