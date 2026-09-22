import SectionHeader from "../components/SectionHeader";
import emptyImage from "../assets/images/empty-image.png";
import execBoard from "../data/execBoard26-27.json";
import ExecNavBar from "../components/ExecNavBar";
import "./OurTeam.css";
import { useState } from "react";

// all img file names should be in the format firstlast.jpg
const imgUrls = import.meta.glob("../assets/images/exec-headshots/*.jpg", {
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
  return imgUrls[`../assets/images/exec-headshots/${fileName}.jpg`] || emptyImage
}

function OurTeam() {
  const [selectedCommittee, setSelectedCommittee] = useState("cultural")
  const [selectedDynasty, setSelectedDynasty] = useState("fire-dynasty")
  const selectedCommitteePosition = execBoard.positions[selectedCommittee]
  const selectedDynastyPosition = execBoard.positions[selectedDynasty]

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
        positionIds={Object.keys(execBoard.committees)}
        positions={execBoard.positions}
        selectedPosition={selectedCommittee}
        onPositionChange={setSelectedCommittee}
      />
      <p className="exec-position-description">{selectedCommitteePosition.description}</p>
      <div className="exec-card__container">
        {execBoard.committees[selectedCommittee].map((member) => (
          <ExecCard key={member} name={member} position={selectedCommitteePosition.name} imgUrl={getImgUrl(member)} />
        ))}
      </div>
      <h2 className="exec-subheading">Dynasty Heads</h2>
      <ExecNavBar
        category="dynasties"
        positionIds={Object.keys(execBoard.dynasties)}
        positions={execBoard.positions}
        selectedPosition={selectedDynasty}
        onPositionChange={setSelectedDynasty}
      />
      <p className="exec-position-description">{selectedDynastyPosition.description}</p>
      <div className="exec-card__container">
        {execBoard.dynasties[selectedDynasty].map((member) => (
          <ExecCard key={member} name={member} position={selectedDynastyPosition.name} imgUrl={getImgUrl(member)} />
        ))}
      </div>
    </>
  );
}

export default OurTeam
