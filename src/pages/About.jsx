const BOARD = [
  { name: "Alicia Li", role: "PREZ" },
  { name: "Aria Shi", role: "PREZ" },
  { name: "exec name ", role: "exec role" },
  { name: "exec name", role: "make this much easier to update in the future.... must brainstorm something..." },
];

function About() {
  return (
    <section className="page page-narrow">
      <h1>About CSA</h1>
      <p>
        Hi this is going to be the about CSA part!!!!!!!
      </p>

      <h2 className="section-title">Exec board</h2>
      <ul className="board-list">
        {BOARD.map((member) => (
          <li key={member.name}>
            <span className="board-name">{member.name}</span>
            <span className="board-role">{member.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;