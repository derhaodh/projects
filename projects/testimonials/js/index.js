// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
import avatarImg from "../assets/profile-thumbnail.png";
import baseStyle from "/common/style.css?raw";
import TestimonialCard from "../../../common/gfe-testimonial-card";

class GfeTestimonialCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = TestimonialCard;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = `${baseStyle}`;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(styleSheet);
    this.avatar = this.shadowRoot.querySelector("img").src = avatarImg;
  }
}

customElements.define("testimonial-card", GfeTestimonialCard);
