"use client";

const testimonials = [
  {
    quote: "Vaknade lördag utan planer. En timme senare satt vi på Ekstedt.",
    author: "Lisa M.",
    city: "Stockholm",
  },
  {
    quote:
      "Vår barnvakt ställde in. Mitt bord var knipat på 30 sekunder och jag fick tillbaka depositionen.",
    author: "Marcus K.",
    city: "Stockholm",
  },
  {
    quote:
      "Mina vänner fattar inte hur jag alltid hamnar på de bästa ställena. Det är alltid Reslot.",
    author: "Emma S.",
    city: "Göteborg",
  },
  {
    quote:
      "Jag har slutat boka veckor i förväg. Det bästa dyker alltid upp samma dag på Reslot.",
    author: "Johan A.",
    city: "Stockholm",
  },
  {
    quote:
      "Som restaurangägare älskar jag att bord inte står tomma. Reslot löser no-show-problemet.",
    author: "Anna L.",
    city: "Stockholm",
  },
  {
    quote: "Bästa date-appen på marknaden. Fast för restauranger.",
    author: "Daniel P.",
    city: "Malmö",
  },
];

function Card({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      style={{
        width: "320px",
        flexShrink: 0,
        margin: "0 1rem",
        backgroundColor: "white",
        borderRadius: "1.25rem",
        border: "1px solid var(--border)",
        padding: "1.75rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-instrument-serif), serif",
          fontStyle: "italic",
          fontSize: "1.0625rem",
          color: "var(--text-primary)",
          lineHeight: 1.65,
          marginBottom: "1.25rem",
        }}
      >
        "{t.quote}"
      </p>
      <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)" }}>
        {t.author}
      </p>
      <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "2px" }}>
        {t.city}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  const doubledRev = [...testimonials, ...testimonials].reverse();

  return (
    <section
      style={{
        padding: "6rem 0",
        backgroundColor: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "2.25rem",
            color: "var(--text-primary)",
          }}
        >
          Vad folk säger
        </h2>
      </div>

      <div style={{ overflow: "hidden", marginBottom: "1.25rem" }}>
        <div className="marquee-animate-slow" style={{ display: "flex" }}>
          {doubled.map((t, i) => (
            <Card key={`t1-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="marquee-animate-reverse" style={{ display: "flex" }}>
          {doubledRev.map((t, i) => (
            <Card key={`t2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
