// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
import avatarImg from "../assets/profile-thumbnail.png";

const generateTemplate = () => {
  const tNode = document.createElement("template");
  tNode.innerHTML = `
  <style>
    *{
        box-sizing:border-box;
    }
  .testimonial-card {
  background-color: var(--white);
  width: 340px;
  height: 233px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-self: center;
  margin: auto;
}

.testimonial-card__header {
  display: flex;
  gap: 16px;
}
.testimonial-card__header__image {
  width: 48px;
  height: 48px;
}

.testimonial-card__header__info {
  display: flex;
  flex-direction: column;
}

.testimonial-card__header__info__title,
::slotted(.testimonial-card__header__info__title) {
  color: var(--black);
  margin: 0;
  width: 228px;
  height: 28px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.testimonial-card__header__info__tag,
::slotted(.testimonial-card__header__info__tag) {
  color: var(--grey);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width:228px;
}

.testimonial-card__details,
::slotted(.testimonial-card__details) {
  color: var(--grey);
  width: 292px;
  height: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 8px 0px 0px 0px;
}
  </style>
  <figure class="testimonial-card" role="listitem">
          <figcaption
            class="testimonial-card__header"
            aria-label="testimonial from Sarah Doe"
          >
          <slot name="avatar">
            <img
              class="testimonial-card__header__image"
              alt="image of Sarah Doe"
            />
        </slot>
            <div class="testimonial-card__header__info">
            <slot name="username">
                <h4 class="testimonial-card__header__info__title text-lg font-semibold">Sarah Dole</h4>
            </slot>
            <slot name="tag">
            <span class="testimonial-card__header__info__tag text-base">@sarahdole</span>
            </slot>
            </div>
          </figcaption>

          <slot name="details">
            <blockquote
            class="testimonial-card__details text-base"
            aria-label="Description of Testimonial Card"
                >
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </blockquote>          
          </slot>

        </figure>`;

  const styleLink = document.createElement("link");

  styleLink.rel = "stylesheet";
  styleLink.href = "/common/style.css";

  tNode.appendChild(styleLink);
  return tNode;
};

class GfeTestimonialCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const template = generateTemplate();
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.avatar = this.shadowRoot.querySelector("img").src = avatarImg;
  }

  static get observedAttributes() {
    return ["src"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal === newVal) return;

    if (attrName === "src") console.log("src changed");
  }

  fetchAvatarImg() {}
}

customElements.define("testimonial-card", GfeTestimonialCard);
