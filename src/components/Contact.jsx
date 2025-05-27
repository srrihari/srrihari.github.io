import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaDiscord } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "60vh",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <SocialIcon url="https://github.com/srrihari" />
        <SocialIcon url="https://www.linkedin.com/in/srri-hari-t-r-30b69829b/" />
        <SocialIcon url="https://wa.me/7339281365" />
        <SocialIcon url="https://x.com/SrriHariTR?t=3gQr5QIekGhyFrJxnKqb1Q&s=09" />
        <SocialIcon url="https://www.instagram.com/srriharitr" />
        <SocialIcon url="https://www.threads.com/@srriharitr" />

        <a href="https://discordapp.com/users/1290314750747476034">
          <FaDiscord size={40} color="#5865F2" />
        </a>
      </div>
      <div className="info">
        <a
          href="tel:+917339281365"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            fontSize: "18px",
          }}
          aria-label="Phone"
        >
          <FaPhoneAlt
            style={{ marginRight: "8px", color: "rgb(243, 123, 59)" }}
          />
          +91 7339281365
        </a>
        <a
          href="mailto:srriharitr@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            fontSize: "18px",
          }}
          aria-label="Email"
        >
          <IoIosMail
            style={{ marginRight: "8px", color: "rgb(243, 123, 59)" }}
          />
          srriharitr@gmail.com
        </a>
      </div>
    </div>
  );
}
