import SectionHeader from "../components/SectionHeader";
import emptyImage from "../assets/images/empty-image.png";

const aboutText = [
  "CSA is Northwestern's largest cultural org celebrating Chinese and Chinese-American identity through food crawls, festival celebrations, speaker events, and way too many group chats.",
  "Every new member joins an Earth, Wind, Water, or Fire dynasty — your built-in friend group for your time at college, complete with your own events and inside jokes.",
];

function About() {
  return (
    <section className="two-col-section">
      <div className="section-col">
        <SectionHeader title="Not just a club — a family" subtitle="About Us" />
        <p>{aboutText[0]}</p>
        <p>{aboutText[1]}</p>
      </div>
      <div className="section-col img-col">
        <img src={emptyImage} alt="CSA community" />
      </div>
    </section>
  );
}

export default About;
