import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { certificates } from "../data/certificateData";

export default function Certification() {
  return (
    <section className="certificate-section">
      <h2 className="section-title">
        <PiCertificateFill
          size={20}
          style={{
            color: "#fff",
            marginRight: "1rem",
            marginBottom: "-0.1rem",
          }}
        />
        Certification & Training
      </h2>

      <div className="certification-tab">
        {certificates.map(({ name, year }) => (
          <div key={name} className="certificate-card">
            <div className="certificate-item">
              <GoDotFill
                size={15}
                style={{
                  color: "#fff",
                  marginRight: "1rem",
                  marginBottom: "-0.1rem",
                }}
              />
              {name}
            </div>
            <div className="certificate-year">{year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
