import SectionHeader from "../components/SectionHeader";
import emptyImage from "../assets/images/empty-image.png";
import execBoard from "../data/execBoard26-27.json";
import "./OurTeam.css";

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
  return (
    <>
      <SectionHeader title="Our Team" subtitle="Exec Board 2026-2027" />
      <div className="exec-card__container">
        {Object.entries(execBoard.cabinet).map(([position, member], index) => (
          <ExecCard key={index} name={member} position={position} imgUrl={getImgUrl(member)} />
        ))}
      </div>
      <div className="exec-card__container">
        {Object.entries(execBoard.cabinet).map(([position, member], index) => (
          <ExecCard key={index} name={member} position={position} imgUrl={getImgUrl(member)} />
        ))}
      </div>
      <div className="exec-card__container">
        {Object.entries(execBoard.cabinet).map(([position, member], index) => (
          <ExecCard key={index} name={member} position={position} imgUrl={getImgUrl(member)} />
        ))}
      </div>
    </>
  );
}

export default OurTeam
