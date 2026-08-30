import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site-config";

export const alt = `${siteConfig.name} · ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #7dd3fc 0%, #ffffff 45%, #38bdf8 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#0369a1",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span>{siteConfig.name}</span>
          <span>{siteConfig.url.replace("https://", "")}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#0b1524",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            {`Hi, I'm ${siteConfig.shortName}.`}
          </div>
          <div style={{ display: "flex", color: "#334155", fontSize: 30, marginTop: 24 }}>
            {siteConfig.role}
          </div>
        </div>

        <div style={{ display: "flex", color: "#334155", fontSize: 24 }}>
          {siteConfig.positioning.slice(0, 96)}
        </div>
      </div>
    ),
    size,
  );
}
