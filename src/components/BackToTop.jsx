import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
const BackToTop = () => {
  const [BackToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if ((window, scrollY > 100)) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div>
        {BackToTop && (
          <button
            style={{
              position: "fixed",
              bottom: "50px",
              right: "30px",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              fontSize: "30px",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              background: "fff",
              color: "#333",
            }}
            onClick={scrollUp}
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default BackToTop;
