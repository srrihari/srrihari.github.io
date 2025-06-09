import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const cur_date = new Date();
  const [scrollY, setScrollY] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxMove = 100; // max move up 100px
  const moveY = Math.min(scrollY * 0.3, maxMove);

  return (
    <>
      <section className="hero">
        <div className="hello">Hello!</div>

        <div className="circle-bg"></div>

        <div className="hero-content">
          <div className="leftCont">
            <h6>Passionate about clean code, </h6>
            <h6>pixel-perfect UI, and performance.</h6>
          </div>
          <div className="hero-text">
            <h2>
              I'm <span>Srri Hari</span>,
            </h2>
            <h1 className="typing-text">Web Developer</h1>
          </div>

          <img
            src="My.png"
            alt="SrriHari"
            className="hero-image"
            style={{
              transform: `translateY(-${moveY}px)`,
              transition: "transform 0.1s ease-out",
            }}
            onClick={() => navigate(`/about`)}
          />

          <div className="rightCont">
            <div className="star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h2>{cur_date.getFullYear() - 2023} Years</h2>
            <h3>Experience</h3>
          </div>
        </div>
      </section>
    </>
  );
}
