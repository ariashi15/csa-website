import SectionHeader from "../components/SectionHeader";
import emptyImage from "../assets/images/empty-image.png";
import execBoard from "../data/execBoard26-27.json";
import ExecNavBar from "../components/ExecNavBar";
import "./OurTeam.css";
import { useState } from "react";

// all img file names should be in the format firstlast.jpg
const imageUrls = import.meta.glob("../assets/images/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
})

function ExecCard({ name, position, imgUrl }) {
  return (
    <div className="exec-card">
      <img src={imgUrl || emptyImage} />
      <div className="exec-card__footer">
        <div className="exec-card__name">{name}</div>
        <div className="exec-card__position">{position}</div>
      </div>
    </div>
  )
}

function getImgUrl(name) {
  const fileName = name.toLowerCase().replace(/\s/g, '')
  return imageUrls[`../assets/images/${fileName}.jpg`] || emptyImage
}

function OurTeam() {
  const [selectedCommittee, setSelectedCommittee] = useState("Cultural")
  const [selectedDynasty, setSelectedDynasty] = useState("Fire Dynasty")

  return (
    <>
      <SectionHeader title="Our Team" subtitle="Exec Board 2026-2027" />
      <div className="exec-card__container">
        {Object.entries(execBoard.cabinet).map(([position, member], index) => (
          <ExecCard key={index} name={member} position={position} imgUrl={getImgUrl(member)} />
        ))}
      </div>
      <h2 className="exec-subheading">Committees</h2>
      <ExecNavBar
        category="committees"
        options={Object.keys(execBoard.committees)}
        selectedOption={selectedCommittee}
        onOptionChange={setSelectedCommittee}
      />
      <div className="exec-card__container">
        {execBoard.committees[selectedCommittee].map((member) => (
          <ExecCard key={member} name={member} position={selectedCommittee} imgUrl={getImgUrl(member)} />
        ))}
      </div>
      <h2 className="exec-subheading">Dynasty Heads</h2>
      <ExecNavBar
        category="dynasties"
        options={Object.keys(execBoard.dynasties)}
        selectedOption={selectedDynasty}
        onOptionChange={setSelectedDynasty}
      />
      <div className="exec-card__container">
        {execBoard.dynasties[selectedDynasty].map((member) => (
          <ExecCard key={member} name={member} position={selectedDynasty} imgUrl={getImgUrl(member)} />
        ))}
      </div>
    </>
  );
}

export default OurTeam
