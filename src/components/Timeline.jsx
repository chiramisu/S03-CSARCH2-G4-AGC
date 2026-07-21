import { useState, useEffect, useCallback } from "react";
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
    {
      year: "1962",
      title: "AGC Development Starts",
      image: DSKY.src, 
      description:
        "In 1962, the MIT Instrumentation Laboratory began designing the Apollo Guidance Computer (AGC). The AGC would become one of the first computers built almost entirely with integrated circuits, using about 4,000 logic chips. Not everyone believed this was the right decision. Since integrated circuits were still new technology, engineers from Bellcomm and members of the U.S. Congress questioned whether the computer would be reliable enough to safely take astronauts to the Moon. Some even suggested using a different computer made by International Business Machines Corporation (IBM), which relied on older but better-tested technology. Despite these concerns, NASA continued with MIT's design. The success of the Apollo Guidance Computer would later prove that integrated circuits were reliable enough for one of history's most ambitious space missions. NASA's decision helped prove that integrated circuits could be trusted in critical missions, paving the way for modern computers, smartphones, and spacecraft."
    },
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => Math.min(events.length - 1, prev + 1));
  }, [events.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div className="timeline-container">
       
      <div className="timeline-carousel-wrapper" aria-roledescription="carousel">
        
        <div className="timeline-carousel">
          {events.map((item, index) => {
            let cardPosition = "card-hidden";
            let onClickHandler = null;
            
            if (index === current) {
              cardPosition = "card-active";
            } else if (index === current + 1) {
              cardPosition = "card-next";
              onClickHandler = handleNext;
            } else if (index === current - 1) {
              cardPosition = "card-prev";
              onClickHandler = handlePrev;
            }

            return (
              <div 
                key={index} 
                className={`timeline-card ${cardPosition}`}
                onClick={onClickHandler}
                role={onClickHandler ? "button" : "presentation"}
                tabIndex={onClickHandler ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && onClickHandler) onClickHandler();
                }}
              >
                <div className="card-year-header">{item.year}</div>
                <div className="card-image-frame">
                  <img src={item.image} alt={`Historical photograph for ${item.title}`} />
                  <div className="wireframe-cross"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SUBWAY MAP PROGRESS AXIS */}
        <div className="timeline-progress-track">
          <div 
            className="timeline-progress-fill"
            style={{ width: `${events.length > 1 ? (current / (events.length - 1)) * 100 : 100}%` }}
          ></div>
          {events.map((_, index) => (
            <div 
              key={`node-${index}`}
              className={`timeline-progress-node ${index <= current ? 'node-active' : ''}`}
              style={{ left: `${events.length > 1 ? (index / (events.length - 1)) * 100 : 50}%` }}
            ></div>
          ))}
        </div>

        {current > 0 && (
          <button className="nav-arrow arrow-left" onClick={handlePrev} aria-label="Previous event">
            ←
          </button>
        )}
        {current < events.length - 1 && (
          <button className="nav-arrow arrow-right" onClick={handleNext} aria-label="Next event">
            →
          </button>
        )}
      </div>

      <div className="timeline-details-panel" aria-live="polite">
        <h2 className="details-title">
          <span className="agc-accent">{events[current].year}</span> — {events[current].title}
        </h2>
        <p className="details-text">{events[current].description}</p>
        
        <div className="back-button-container">
          <button 
            className="agc-cardButton" 
            onClick={() => window.history.back()}
          >
            ← Return to Home Page
          </button>
        </div>
      </div>

    </div>
  );
}