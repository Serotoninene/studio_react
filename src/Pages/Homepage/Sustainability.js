import React from "react";
import images from "../../Assets/images";

export default function Sustainability() {
  return (
    <div id="Sustainability" className="grid" data-scroll-section>
      <div className="contentImage section">
        <img
          src={images.manuel}
          className="img-fluid"
          alt="woman walking in front of stairs"
        />
      </div>
      <div className="contentText section">
        <h2>
          Working with brands in the packaging and product space, sustainability
          is incredibly important to us.
        </h2>
        <p>
          We guide brands to make choices that put the environment first and aim
          to eliminate waste in everything we design.{" "}
        </p>
        <p>
          Our approach to sustainable packaging is to recommend our clients
          consider both the life cycle and “end of life” when choosing
          packaging. We believe a circular economy for all plastics is vital to
          stop the damaging effects of plastic pollution. When plastics are kept
          out of the environment and in the economy via high value recycling &
          reuse it’s the best possible outcome for all of us.
        </p>
        <p>
          Elimination of unnecessary packaging and innovating with smart design
          is something we’re extremely well versed in. Choosing to use products
          that can be safely reused, recycled or composted, by understanding how
          local infrastructure supports the solution. Clear on-pack
          communications on how to best disassemble, recycle or reuse packaging
          are our collective responsibility to keep products circulating and out
          of landfill.
        </p>

        <a>Download our open source packaging stewardship briefing form</a>
      </div>
    </div>
  );
}
