import "./Home.css";
import "./About.css";
import SectionHeader from "../components/SectionHeader";
import emptyImage from "../assets/images/empty-image.png";
import { aboutText1, aboutText2 } from "./Home.jsx";

const aboutText3 = "CSA is split into four dynasties: fire, water, earth, and wind. These dynasties serve as smaller communities within the larger organization, allowing members to connect in a more tight-knit setting. Each dynasty has its own events and group chat, and your dynasty members often become some of your closest friends."
const aboutText4 = "New members inherit the dynasty of their \"big\", a mentor that they match with during our recruitment process. Littles are immediately welcomed into their bigs' family, a tree of other interconnected bigs and littles that are all part of the same dynasty."

function AboutFeatureCard({ label, description }) {
  return (
    <div className="about-feature-card">
      <div className="about-feature-card__inner">
        <article className="about-feature-card__face about-feature-card__face--front">
          <img src={emptyImage} alt={label} />
          <div className="about-feature-card__label">{label}</div>
        </article>
        <article className="about-feature-card__face about-feature-card__face--back">
          <div className="about-feature-card__label about-feature-card__label--back">
            {label}
          </div>
          <p className="about-feature-card__description">{description}</p>
        </article>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <section className="two-col-section" style={{ marginTop: 30 }}>
        <div className="section-col">
          <SectionHeader
            title="Not just a club — a family"
            subtitle="About Us"
          />
          <p>{aboutText1}</p>
          <p>{aboutText2}</p>
        </div>
        <div className="section-col img-col">
          <img src={emptyImage} alt="CSA community" />
        </div>
      </section>

      <section className="about-features">
        <SectionHeader
          title="Our Values"
          subtitle="Who We Are"
        />
        <div className="about-features__images-container">
          <AboutFeatureCard
            label="Community"
            description="A network of members who show up for each other, on and off campus."
          />
          <AboutFeatureCard
            label="Culture"
            description="Traditions and events that bring our members together year after year."
          />
          <AboutFeatureCard
            label="Mentorship"
            description="Bigs and littles building relationships that last well beyond graduation."
          />
        </div>
      </section>

      <section className="about-dynasties">
        <SectionHeader
          title="Four dynasties; one community"
          subtitle="Dynasties and Families"
        />
        <p>{aboutText3}</p>
        <p>{aboutText4}</p>
        <div className="button-container">
          <button
            onClick={() =>
              window.open(
                "https://csa-family-trees.vercel.app/dynasties",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            View our family trees
          </button>
        </div>
      </section>
    </>
  );
}

export default About;