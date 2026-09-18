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
    <>
      <section>
        <SectionHeader title="Upcoming Events" subtitle="What's Happening" />
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_54c241d869625fced1b319de427d1021e7dd32b9df733e4da378c2a1a2132f2a%40group.calendar.google.com"
          title="CSA Events Calendar"
          style={{
            width: "100%",
            height: "600px",
            border: 0,
            marginTop: "40px",
          }}
        />
      </section>
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
    </>
  );
}

export default Events;
