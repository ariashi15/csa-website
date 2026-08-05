import ItemCard from "../components/ItemCard";

// Sequential steps — order matters here, so numbering the titles is
// meaningful (not just decoration). Replace the bracketed placeholders
// with your real links/info.
const STEPS = [
  {
    id: 1,
    title: "1. Sign Up",
    category: "Step 1",
    description: (
      <>
        Fill out our interest form:{" "}
        <a href="#" className="item-card-link">
          [insert sign-up link here]
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    title: "2. Go to a Coffee Chat",
    category: "Step 2",
    description: (
      <>
        Meet an exec board member and ask questions:{" "}
        <a href="#" className="item-card-link">
          [insert coffee chat scheduling link here]
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    title: "3. Fill Out a Written Application",
    category: "Step 3",
    description: (
      <>
        Tell us a bit about yourself:{" "}
        <a href="#" className="item-card-link">
          [insert application link here]
        </a>
        .
      </>
    ),
  },
  {
    id: 4,
    title: "4. All Done!",
    category: "Step 4",
    description: "what happens next!",
  },
];

const STEP_ACCENTS = ["#C8102E", "#4E2A84", "#F2994A", "#1F8A70"];

function Apply() {
  return (
    <section className="page">
      <h1>Apply to CSA</h1>
      <p className="section-sub">
        JOIN JOIN JOIN!!!
      </p>

      <div className="item-list">
        {STEPS.map((step, i) => (
          <ItemCard
            key={step.id}
            title={step.title}
            category={step.category}
            description={step.description}
            accent={STEP_ACCENTS[i]}
            variant="standard"
          />
        ))}
      </div>
    </section>
  );
}

export default Apply;