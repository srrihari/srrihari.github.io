import React from "react";
import ProjectCards from "./ProjectCards";

export default function Projects() {
  const projects = [
    {
      title: "Age-Calculator",
      desc: "A responsive web tool that calculates your exact age in years, months, and days from your date of birth.",
      href: "https://github.com/srrihari/ageCalculator",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "ToDo-List",
      desc: "The To-Do List app helps users manage their daily tasks with ease by allowing them to add, edit, delete, and mark tasks as complete.",
      href: "https://github.com/srrihari/ToDo",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Calculator",
      desc: "This is a basic calculator that allows users to perform arithmetic operations such as addition, subtraction, multiplication, and division. ",
      href: "https://github.com/srrihari/calculator",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "IEEE-754",
      desc: "This project converts a decimal floating-point number into its IEEE 754 single and double precision binary formats.",
      href: "https://github.com/srrihari/IEEE",
      tech: ["JavaScript", "Python", "HTML"],
    },
    {
      title: "Event-Management-System",
      desc: "An Event Management System is a platform designed to streamline the planning, organizing, and execution of events.",
      href: "https://github.com/srrihari/Project_DBMS",
      tech: ["TypeScript", "JavaScript", "CSS", "Python", "HTML"],
    },
    {
      title: "Text-To-QR",
      desc: "This web application lets users enter text and instantly generates a QR code from it. After submission, the user is taken to a confirmation page displaying the QR code.",
      href: "https://github.com/srrihari/TextToQR",
      tech: ["JavaScript", "EJS", "CSS"],
    },
    {
      title: "Text-To-QR-PDF",
      desc: "This command-line application prompts the user to enter text and generates a QR code in response. The generated QR code is then provided as a downloadable PDF file.",
      href: "https://github.com/srrihari/TestToQR-PDF-",
      tech: ["JavaScript"],
    },
    {
      title: "Contact-Management-System",
      desc: "A simple Contact Management System built using Flask and MySQL as part of my 12th-grade Database Management project.",
      href: "https://github.com/srrihari/Contact_Management",
      tech: ["HTML", "Python"],
    },
    {
      title: "Pixel-Testing",
      desc: "This is a test project to practice using CSS media queries. The background color changes based on screen width to simulate responsive design for different devices.",
      href: "https://github.com/srrihari/px_test",
      tech: ["HTML"],
    },
    {
      title: "LetZ-Chat",
      desc: (
        <>
          This is a real-time chat application.
          <br />
          Access Code:{" "}
          <span style={{ color: "white", fontSize: "large" }}>123456</span>
        </>
      ),

      href: "https://letz-chat.netlify.app/",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "LetZ-Talk",
      desc: (
        <>
          This is a real-time Video/Audio call application.
          <br />
          <span style={{ color: "white", fontSize: "medium" }}>
            A <span style={{ color: "#ff8f20" }}>6-digit</span> code will be
            generated to connect
          </span>
        </>
      ),

      href: "https://letztalk.netlify.app/",
      tech: ["JavaScript", "CSS", "HTML"],
    },
  ];

  return (
    <div className="project">
      {projects.map((proj, index) => (
        <div className="procard-container" key={index}>
          <ProjectCards {...proj} />
        </div>
      ))}
    </div>
  );
}
