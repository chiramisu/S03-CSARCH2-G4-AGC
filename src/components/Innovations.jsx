import { useState } from 'react';
import '../styles/Innovations.css';

import i1T from '../assets/innovation-1-then.png';
import i1N from '../assets/innovation-1-now.jpg';
import i2T from '../assets/innovation-2-then.png';
import i2N from '../assets/innovation-2-now.jpg';
import i3T from '../assets/innovation-1-then.png';
import i3N from '../assets/innovation-1-then.png';
import i4T from '../assets/innovation-1-then.png';
import i4N from '../assets/innovation-1-then.png';
import i5T from '../assets/innovation-1-then.png';
import i5N from '../assets/innovation-1-then.png';
 
const innovations = [
  {
    name: "Innovation 1",
    then: "The AGC was one of the first computers to rely on integrated circuits, packing multiple electronic components onto a single small chip. This was a major step toward the miniaturization of electronics, and the huge production demand for the Apollo program guaranteed an early market that fueled further chip development.",
    now: "Today's smartphone and computer processors trace their lineage directly back to this leap in miniaturization, with modern CPUs found in everything from phones to supercomputers descending from this technology. What once filled a spacecraft's guidance bay now fits on a fingertip-sized chip.",
    thenImg: i1T,
    nowImg: i1N
  },
  {
    name: "Innovation 2",
    then: "The Apollo program's digital fly-by-wire technology, which replaced manual systems with a computer, is now used in modern-day aircraft, making them safer and more efficient. This same \"let the computer assist the pilot\" concept underpins today's commercial airliners and even modern car driver-assist systems",
    now: "That same fly-by-wire concept is now standard in modern aircraft, making them safer and more fuel-efficient than manually-controlled predecessors. It also underpins today's driver-assist and stability-control systems in cars, where a computer intervenes between human input and physical movement.",
    thenImg: i2T,
    nowImg: i2N
  },
  {
    name: "Innovation 3",
    then: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor sapien ac posuere ultrices. In mollis, eros quis tristique eleifend, quam odio dictum nibh, ornare dictum neque justo quis sem. ",
    now: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor sapien ac posuere ultrices. In mollis, eros quis tristique eleifend, quam odio dictum nibh, ornare dictum neque justo quis sem. ",
    thenImg: i3T,
    nowImg: i3N
  },
  {
    name: "Innovation 4",
    then: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor sapien ac posuere ultrices. In mollis, eros quis tristique eleifend, quam odio dictum nibh, ornare dictum neque justo quis sem. ",
    now: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor sapien ac posuere ultrices. In mollis, eros quis tristique eleifend, quam odio dictum nibh, ornare dictum neque justo quis sem. ",
    thenImg: i4T,
    nowImg: i4N
  },
  {
    name: "Innovation 5",
    then: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor sapien ac posuere ultrices. In mollis, eros quis tristique eleifend, quam odio dictum nibh, ornare dictum neque justo quis sem. ",
    now: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor sapien ac posuere ultrices. In mollis, eros quis tristique eleifend, quam odio dictum nibh, ornare dictum neque justo quis sem. ",
    thenImg: i5T,
    nowImg: i5N
  }
];

function Innovations() {
  const [active, setActive] = useState(0);
 
  return (
    <div className="innovations">

      <nav className="innovation-nav">

        {innovations.map((item, i) => (

          <button 
            key={item.name} 
            className={i === active ? 'active' : ''} 
            onClick={() => setActive(i)}>
            {item.name}
          </button>

        ))}

      </nav>
 
      <div className="innovation-columns">

        <div className="innovation-box">

          <h2>APOLLO 1960s</h2>
          <img 
            className="innovation-img-placeholder"
            src={innovations[active].thenImg.src}
            alt={`${innovations[active].name} - 1960s`}
          />
          
          <p>{innovations[active].then}</p>

        </div>

        <div className="innovation-box">

          <h2>MODERN LIFE NOW</h2>
          <img 
            className="innovation-img-placeholder"
            src={innovations[active].nowImg.src}
            alt={`${innovations[active].name} - today`}
          />
          <p>{innovations[active].now}</p>

        </div>

      </div>
      
      <footer className="innovation-footer">

        <a href="../apollo-guidance-computer" > Return to Homepage </a>

      </footer>

    </div>
  );
}
 
export default Innovations
 