import { useNavigate } from "react-router-dom";
import ItemList from "../components/ItemList";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>CSA BLURB!!!!</h1>
          <p>
            CSA BLURB PT.2!!!
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("/apply")}>
              Apply!
            </button>
            <button className="btn-ghost" onClick={() => navigate("/about")}>
              About Us
            </button>
          </div>
        </div>
      </section>

      <section className="page">
        <h2 className="section-title">Some past events??? OR maybe something else....?</h2>
        <ItemList />
      </section>
    </>
  );
}

export default Home;