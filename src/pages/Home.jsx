import './Home.css'
import SectionHeader from '../components/SectionHeader';

function Home() {
  return (
    <>
      <section className="two-col-section">
        <div className="section-col">
          <div className="home-header">Your home away from <span className="emphasis-text">home.</span></div>
          <p>Welcome to Northwestern’s Chinese Students Association - food, culture, and community on campus. New and returning members welcome!</p>
        </div>
        <div className="section-col">
          <div>image placeholder</div>
        </div>
      </section>
      <section className="two-col-section">
        <div className="section-col">
          image placeholder
        </div>
        <div className="section-col">
          <SectionHeader title="Not just a club — a family" subtitle="About Us" />
        </div>
      </section>
    </>
  );
}

export default Home
