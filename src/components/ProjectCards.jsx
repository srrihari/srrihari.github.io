import React from "react";
import { LuExternalLink } from "react-icons/lu";

export default function ProjectCards({ title, desc, href, tech }) {
  return (
    <div>
      <div className="procard">
        <h6 style={{ color: "rgb(243, 123, 59)" }}>
          <a
            href={href}
            target="_blank"
            style={{ color: "inherit" }}
            rel="noopener noreferrer"
          >
            {title}
            <LuExternalLink />
          </a>
        </h6>
        <p style={{ color: "rgb(198, 193, 190)", fontSize: "small" }}>{desc}</p>
      </div>
      <div className="tech-stack">
        {tech.map((item, index) => (
          <div className="tech-stack-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
