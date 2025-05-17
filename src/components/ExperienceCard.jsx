import React, { useRef, useEffect } from "react";
import "./ExperienceStyle.css";
import { GoDotFill } from "react-icons/go";

const ExperienceCard = ({ event, isLeft }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`experience-item ${isLeft ? "left" : "right"}`}>
      <div className="content">
        <div className="logo-date">
          <img src={event.logo} className="logo" />
          <div className="date">{event.date}</div>
        </div>
        <h3>{event.title}</h3>
        <span className="sub-title">
          <i>{event.subtitle}</i>
        </span>
        <ul>
          {event.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
