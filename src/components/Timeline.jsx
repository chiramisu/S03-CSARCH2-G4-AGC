import { useState } from "react";
import "../styles/timeline.css";

import IC1960s from "../assets/IC1960s.png";
import DSKY from "../assets/DSKY.png";

export default function Timeline() {
  const events = [
    {
      year: "1961",
      title: "The Rise of Integrated Circuits",
      image: IC1960s.src,
      description:
        "By the early 1960s, computers were large, heavy, and built from thousands of individual electronic parts called transistors. A new invention called the integrated circuit (IC) could combine several components into a single, much smaller chip. Although these early chips were expensive and still unproven, their small size and low power consumption made them ideal for spacecraft, where every gram of weight and every watt of power mattered. In 1961, engineers demonstrated that hundreds of integrated circuits could replace thousands of separate electronic components, proving that compact computers were possible. This breakthrough convinced engineers that integrated circuits could make space computers smaller, lighter, and more reliable—an important step toward the Apollo Guidance Computer."
    },
    {
      year: "1962",
      title: "AGC Development Starts",
      image: DSKY.src, 
      description:
        "In 1962, the MIT Instrumentation Laboratory began designing the Apollo Guidance Computer (AGC). The AGC would become one of the first computers built almost entirely with integrated circuits, using about 4,000 logic chips. Not everyone believed this was the right decision. Since integrated circuits were still new technology, engineers from Bellcomm and members of the U.S. Congress questioned whether the computer would be reliable enough to safely take astronauts to the Moon. Some even suggested using a different computer made by International Business Machines Corporation (IBM), which relied on older but better-tested technology. Despite these concerns, NASA continued with MIT's design. The success of the Apollo Guidance Computer would later prove that integrated circuits were reliable enough for one of history's most ambitious space missions. NASA's decision helped prove that integrated circuits could be trusted in critical missions, paving the way for modern computers, smartphones, and spacecraft."
    },
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="timeline-container">
       
      <div className="timeline-carousel-wrapper">
        <div className="timeline-axis-line"></div>

        <div className="timeline-carousel">
          {events.map((item, index) => {
            let cardPosition = "card-hidden";
            
            if (index === current) {
              cardPosition = "card-active";
            } else if (index === (current + 1) % events.length) {
              cardPosition = "card-next"; 
            } else if (index === (current - 1 + events.length) % events.length) {
              cardPosition = "card-prev";
            }

            return (
              <div key={index} className={`timeline-card ${cardPosition}`}>
                <div className="card-year-header">{item.year}</div>
                <div className="card-image-frame">
                  <img src={item.image} alt={item.title} />
                  <div className="wireframe-cross"></div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="nav-arrow arrow-left" onClick={handlePrev} aria-label="Previous">
          ←
        </button>
        <button className="nav-arrow arrow-right" onClick={handleNext} aria-label="Next">
          →
        </button>
      </div>

      <div className="timeline-details-panel">
        <h2 className="details-title">{events[current].year} — {events[current].title}</h2>
        <p className="details-text">{events[current].description}</p>
        <button 
          className="back-button" 
          onClick={() => window.history.back()}
        >
          ← Return to Home Page
        </button>
      </div>

    </div>
  );
}