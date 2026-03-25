"use client";

export default function SocialProofBar() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          className="pulse-dot"
          style={{
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--success)",
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            16
          </span>{" "}
          bord tillgängliga ikväll i Stockholm
        </p>
      </div>
    </div>
  );
}
