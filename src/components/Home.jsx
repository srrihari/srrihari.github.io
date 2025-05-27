import React from "react";

export default function Home() {
  return (
    // <div>
    //   <div class="circle-bg"></div>
    //   <img src="srri.png" alt="" width="250" />
    // </div>
    <>
      <section class="hero">
        <div className="hello">Hello!</div>

        <div class="circle-bg"></div>

        <div class="hero-content">
          <div class="hero-text">
            <h2>
              I'm <span>Srri Hari</span>,
            </h2>
            <h1>Web Developer</h1>
          </div>

          <img src="My.png" alt="SrriHari" class="hero-image" />
        </div>
      </section>
    </>
  );
}
