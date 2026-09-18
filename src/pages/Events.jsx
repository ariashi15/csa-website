import SectionHeader from "../components/SectionHeader";
import EventCard from "../components/EventCard";

const events = [
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
  { tag: "CSA General", title: "Mid-Autumn Festival", date: "October 2025" },
];

function Events() {
  return (
    <section>
      <SectionHeader title="Past Events" subtitle="What's Happening" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "40px",
          margin: "40px 0",
        }}
      >
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
}

export default Events;
