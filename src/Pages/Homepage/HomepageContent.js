import React from "react";
// Assets
import images from "../../Assets/images";

export default function HomepageContent() {
  return (
    <div id="HomepageContent" className="grid" data-scroll-section>
      <div className="contentText section">
        <h2>
          We believe great design starts with an idea. A creative spark fuelled
          by a sense of curiosity that leads to a new way of finding a solution.
        </h2>
        <p>
          Our mission is to create work that engages customers, inspires
          loyalty, and sets a new benchmark for what design can deliver. We ask
          the hard questions, push for excellence and never settle for the
          status quo. We understand the harder path can lead to the most
          exceptional thinking and powerful design work.{" "}
        </p>
        <p>
          Great design is brave, considered and often challenging. It’s the
          space where visual identity and ideas come together, to shift the way
          we think and ultimately make the world a better place.
        </p>
        <p>
          Marx specialises in all elements of design, packaging, brand identity
          and communications, guided by our innate curiosity and love of
          strategic thinking. We thrive on transforming commercial challenges
          into creative opportunities.
        </p>
        <p>
          We’re not afraid to push and pull things apart, using insights and
          design knowledge to deepen the resonance and relevance of brands. We
          love to work with businesses looking for a different take on their
          brand, to unlock the potential at the heart of their product.
        </p>
      </div>
      <div className="contentImage section">
        <img
          src={images.stairs}
          className="img-fluid"
          alt="woman walking in front of stairs"
        />
      </div>
    </div>
  );
}
