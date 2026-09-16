import './Home.css'
import SectionHeader from '../components/SectionHeader';
import { useNavigate } from 'react-router-dom'

function NumberCol({ stat, subheader }) {
  return (
    <div className="number-col">
          <div className="number-col__stat">{stat}</div>
          <div className="number-col__subheader">{subheader}</div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section className="two-col-section">
        <div className="section-col">
          <div className="home-header">Your home away from <span className="emphasis-text">home.</span></div>
<<<<<<< HEAD
          <p>Welcome to Northwestern’s Chinese Students Association - culture, food, and community on campus. New and returning members welcome!</p>
=======
          <p>Welcome to Northwestern’s Chinese Students Association - food, culture, and community on campus. New and returning members welcome!</p>
>>>>>>> 864758a93b384fba481af97814eced0b1b6fed19
          <div className="button-container">
            <button onClick={() => navigate('/about')}>Learn more</button>
            <button className="transparent-button" onClick={() => navigate('/events')}>See upcoming events</button>
          </div>
        </div>
        <div className="section-col">
          <div>image placeholder</div>
        </div>
      </section>
      <section className="numbers-section">
        <NumberCol stat="500+" subheader="community members"/>
        <NumberCol stat="40+" subheader="events per year"/>
        <NumberCol stat="4" subheader="dynasties"/>
        <NumberCol stat="9+" subheader="years strong"/>
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
