import React from "react";

export default function ProfileImage({ src, alt }) {
  return (
    <div className="img-container">
      <div className="img-stack bottom">
        <img src={src} alt={alt} className="img" />
      </div>
    </div>
  );
}
