"use client";

const restaurants = [
  { name: "Ekstedt", cuisine: "Nordisk eldmat", rating: "4.9", bg: "#1E1510" },
  { name: "Oaxen Krog", cuisine: "Skärgårdsnordiskt", rating: "4.8", bg: "#101E15" },
  { name: "Frantzén", cuisine: "Japanskt-nordiskt", rating: "5.0", bg: "#10101E" },
  { name: "Babette", cuisine: "Europeisk bistro", rating: "4.7", bg: "#1E1010" },
  { name: "Sushi Sho", cuisine: "Omakase", rating: "4.9", bg: "#101E1E" },
  { name: "Gastrologik", cuisine: "Säsongsbaserat", rating: "4.8", bg: "#1E1E10" },
  { name: "Taverna Brillo", cuisine: "Italienskt", rating: "4.6", bg: "#10151E" },
  { name: "Djuret", cuisine: "Kött & vilt", rating: "4.7", bg: "#1A1010" },
];

function Card({ r }: { r: (typeof restaurants)[0] }) {
  return (
    <div
      style={{
        width: "200px",
        flexShrink: 0,
        margin: "0 12px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const card = e.currentTarget.querySelector(".card-img") as HTMLElement;
        if (card) card.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget.querySelector(".card-img") as HTMLElement;
        if (card) card.style.transform = "translateY(0)";
      }}
    >
      <div
        className="card-img"
        style={{
          aspectRatio: "3/4",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "12px",
          transition: "transform 200ms ease",
          background: `linear-gradient(145deg, ${r.bg} 0%, #0A0A0A 100%)`,
          display: "flex",
          alignItems: "flex-end",
          padding: "1rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "1.25rem",
              color: "white",
              lineHeight: 1.2,
            }}
          >
            {r.name}
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>
            {r.cuisine}
          </p>
        </div>
      </div>
      <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)" }}>{r.name}</p>
      <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "2px" }}>
        ★ {r.rating}
      </p>
    </div>
  );
}

export default function RestaurantCarousel() {
  const doubled = [...restaurants, ...restaurants];
  const doubledRev = [...restaurants, ...restaurants].reverse();

  return (
    <section
      style={{
        padding: "5rem 0",
        backgroundColor: "var(--bg-primary)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          marginBottom: "2.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "2rem",
            color: "var(--text-primary)",
          }}
        >
          Restauranger folk älskar
        </h2>
      </div>

      <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
        <div className="marquee-animate" style={{ display: "flex" }}>
          {doubled.map((r, i) => (
            <Card key={`r1-${i}`} r={r} />
          ))}
        </div>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="marquee-animate-reverse" style={{ display: "flex" }}>
          {doubledRev.map((r, i) => (
            <Card key={`r2-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
