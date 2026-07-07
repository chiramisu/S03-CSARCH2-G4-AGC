import React, { useState } from 'react';
import q1img from '../assets/q1img.webp';
import q2img from '../assets/q2img.webp';
import ansminigame from '../assets/ansminigame.jpg';

export default function AGCMinigame() {
  // Core game states
  const [activeStep, setActiveStep] = useState(1);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [unlockedModules, setUnlockedModules] = useState({
    ic: false,
    rope: false
  });

  // Reset the minigame state entirely
  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset? Your minigame progress will be completely lost."
    );
    if (confirmReset) {
      setActiveStep(1);
      setShowEvaluation(false);
      setIsCorrect(false);
      setExplanation('');
      setUnlockedModules({ ic: false, rope: false });
    }
  };

  // Evaluate selected answers
  const handleSelection = (stepId, correct, text) => {
    setIsCorrect(correct);
    setExplanation(text);
    setShowEvaluation(true);

    if (correct) {
      setUnlockedModules((prev) => ({
        ...prev,
        [stepId === 1 ? 'ic' : 'rope']: true
      }));
    }
  };

  // Workflow engine shifting steps or managing retries
  const handleWorkflowShift = () => {
    setShowEvaluation(false);

    if (isCorrect) {
      if (activeStep === 1) {
        setActiveStep(2);
      } else if (activeStep === 2) {
        alert("Congratulations! Both Apollo modules are successfully mapped out and built! (More questions will be added)");
        // Auto-reset safely
        setActiveStep(1);
        setUnlockedModules({ ic: false, rope: false });
      }
    }
  };

  return (
    <>
      {/* Retain beautiful console style-rules encapsulated natively in the component */}
      <style>{`
        :root {
          --bg-deep-navy: #0B132B;   
          --panel-beige: #F4F1EA;    
          --text-dark: #1C2A4A;     
          --accent-gold: #E5A93B;    
          --accent-blue: #6B8EA7;    
          --font-heading: 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-retro: 'IBM Plex Mono', monospace;
        }

        .main-canvas {
          width: 100%;
          background-color: var(--panel-beige);
          color: var(--text-dark);
          border-radius: 8px;
          padding: 2rem;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .game-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 2rem;
        }

        @media (max-width: 850px) {
          .game-grid { grid-template-columns: 1fr; }
        }

        .blueprint-card {
          background: #111A30;
          color: #EAEAEA;
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(107, 142, 167, 0.3);
        }

        .blueprint-title {
          font-family: var(--font-retro);
          color: var(--accent-gold);
          font-size: 0.8rem;
          text-align: center;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
          border-bottom: 1px dashed rgba(107, 142, 167, 0.3);
          padding-bottom: 0.5rem;
        }

        .hardware-chassis {
          width: 100%;
          height: 320px;
          border: 2px dashed rgba(244, 241, 234, 0.15);
          position: relative;
          background: rgba(0, 0, 0, 0.15);
          border-radius: 4px;
        }

        .chassis-component {
          position: absolute;
          background: rgba(107, 142, 167, 0.08);
          border: 1px dashed rgba(107, 142, 167, 0.4);
          color: rgba(244, 241, 234, 0.3);
          font-family: var(--font-retro);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0.75rem;
          box-sizing: border-box;
          border-radius: 4px;
          transition: all 0.5s ease-in-out;
        }

        .chassis-component.unlocked {
          color: #FFFFFF;
          border: 2px solid var(--accent-gold);
          background: rgba(229, 169, 59, 0.2);
          box-shadow: 0 0 15px rgba(229, 169, 59, 0.3);
          font-weight: bold;
        }

        .comp-ic-pos { top: 8%; left: 8%; width: 84%; height: 40%; }
        .comp-rope-pos { top: 52%; left: 8%; width: 84%; height: 40%; }

        .interactive-viewport {
          background: #FFFFFF;
          border: 1px solid rgba(107, 142, 167, 0.25);
          border-radius: 8px;
          padding: 2rem;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
          position: relative;
        }

        .exit-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: 1px solid rgba(107, 142, 167, 0.3);
          color: var(--accent-blue);
          font-family: var(--font-retro);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.35rem 0.7` + `rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 10;
        }

        .exit-btn:hover {
          background: #FFF5F5;
          color: #C92A2A;
          border-color: #FFA8A8;
        }

        .challenge-tag {
          font-family: var(--font-retro);
          color: var(--accent-blue);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .challenge-headline {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          line-height: 1.4;
          color: var(--text-dark);
          margin-top: 0;
          margin-bottom: 1.5rem;
        }

        .image-placeholder-frame {
          width: 100%;
          height: 200px;
          background-color: #F8F9FA;
          border: 2px dashed rgba(107, 142, 167, 0.4);
          border-radius: 6px;
          margin-bottom: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-retro);
          font-size: 0.8rem;
          color: var(--accent-blue);
          text-transform: uppercase;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .image-placeholder-frame img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; 
        }

        .options-stack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .choice-row-btn {
          width: 100%;
          background: #FFFFFF;
          color: var(--text-dark);
          border: 1.5px solid rgba(107, 142, 167, 0.4);
          padding: 1rem 1.25rem;
          text-align: left;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .choice-row-btn:hover {
          background: #F1F5F9;
          border-color: var(--accent-gold);
          transform: translateY(-1px);
        }

        .feedback-banner-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          margin-top: 0;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .feedback-banner-title.success { color: #2B8A3E; }
        .feedback-banner-title.failure { color: #C92A2A; }

        .feedback-body-text {
          font-size: 1.05rem;
          line-height: 1.55;
          color: var(--text-dark);
          margin-bottom: 2rem;
        }

        .navigation-cta-btn {
          background-color: var(--text-dark);
          color: #FFFFFF;
          border: none;
          padding: 0.9rem 1.8rem;
          font-family: var(--font-retro);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }

        .navigation-cta-btn:hover { opacity: 0.9; }
      `}</style>

        <div class="main-canvas">
          <div class="game-grid">
            
            {/* Left Column: Interactive Blueprint Chassis Layout */}
            <div class="blueprint-card">
              <div class="blueprint-title">// ARCHITECTURAL ASSEMBLY AREA</div>
              <div class="hardware-chassis">
                <div class={`chassis-component comp-ic-pos ${unlockedModules.ic ? 'unlocked' : ''}`}>
                  {unlockedModules.ic ? '[MODULE 01: INTEGRATED CIRCUITS]' : '[MODULE 01]'}
                </div>
                <div class={`chassis-component comp-rope-pos ${unlockedModules.rope ? 'unlocked' : ''}`}>
                  {unlockedModules.rope ? '[MODULE 02: ROPE MEMORY]' : '[MODULE 02]'}
                </div>
              </div>
            </div>

            {/* Right Column: Game Interactive Screen Viewport */}
            <div class="interactive-viewport">
              <button class="exit-btn" onClick={handleReset}>✕ Reset Game</button>

              {!showEvaluation && activeStep === 1 && (
                <div class="question-block">
                  <div class="challenge-tag">Challenge 01</div>
                  <p class="challenge-headline">Pre-Apollo computers are so large they take up entire rooms. To successfully compress navigation hardware into a tiny rocket capsule, what micro solution must you choose?</p>
                  <div className="image-placeholder-frame">
                    <img src={q1img.src} alt="Logic Constraints" />
                  </div>
                  <div class="options-stack">
                    <button class="choice-row-btn" onClick={() => handleSelection(1, false, "Vacuum tubes are far too heavy and bulky to fit onboard the spacecraft framework.")}>
                      A) Rearrange layout space for standard Vacuum Tubes
                    </button>
                    <button class="choice-row-btn" onClick={() => handleSelection(1, true, "Correct! Transitioning early to integrated circuits solved the problems within structural load space parameters.")}>
                      B) Implement newly developed Integrated Logic Circuits
                    </button>
                    <button class="choice-row-btn" onClick={() => handleSelection(1, false, "Modern flash micro-drives were not invented yet in this era of the Space Race.")}>
                      C) Wire up automated Solid State Micro-Drives
                    </button>
                  </div>
                </div>
              )}

              {!showEvaluation && activeStep === 2 && (
                <div class="question-block">
                  <div class="challenge-tag">Challenge 02</div>
                  <p class="challenge-headline">If critical computer guidance programs suffer from dynamic logic corruption or accidental overwrites mid-flight, the mission will fail. How do you isolate operational software code securely?</p>
                  <div className="image-placeholder-frame">
                    <img src={q2img.src} alt="Core Logic Design" />
                  </div>
                  <div class="options-stack">
                    <button class="choice-row-btn" onClick={() => handleSelection(2, false, "Erasable core parameters process transient calculations, but has high corruption risks for permanent system programming.")}>
                      A) Commit operational flight programs to Erasable Core Memory elements
                    </button>
                    <button class="choice-row-btn" onClick={() => handleSelection(2, true, "Correct! Hardwiring through the read-only magnetic rope structures renders the program unalterable and completely safe from deep space hazards.")}>
                      B) Manufacture software logic into physical Read-Only Magnetic Rope Memory
                    </button>
                    <button class="choice-row-btn" onClick={() => handleSelection(2, false, "Spinning platter disks are highly susceptible to crashing under structural launch environments.")}>
                      C) Initialize code maps directly onto Magnetic Spinning Drum Disks
                    </button>
                  </div>
                </div>
              )}

              {showEvaluation && (
                <div class="feedback-block">
                  <div class={`feedback-banner-title ${isCorrect ? 'success' : 'failure'}`}>
                    {isCorrect ? '✓ Component Accepted & Integrated' : '⚠ Assembly Error: Design Rejected'}
                  </div>
                  <div className="image-placeholder-frame">
                    <img src={ansminigame.src} alt="Correct Answer" />
                  </div>
                  <p class="feedback-body-text">{explanation}</p>
                  <button class="navigation-cta-btn" onClick={handleWorkflowShift}>
                    {isCorrect ? (activeStep === 2 ? 'Complete Core Phase' : 'Unlock Next Module') : 'Retry'}
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
    </>
  );
}