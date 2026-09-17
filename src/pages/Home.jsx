import './Home.css'
import SectionHeader from '../components/SectionHeader';
import { useNavigate } from 'react-router-dom'

const section1Text = "Welcome to Northwestern’s Chinese Students Association - culture, food, and community on campus. New and returning members welcome!"

const section2Text1 = "CSA is Northwestern's largest cultural org celebrating Chinese and Chinese-American identity - through food crawls, festival celebrations, speaker events, and way too many group chats."
const section2Text2 = "Every new member joins an Earth, Wind, Water, or Fire dynasty - your built-in friend group for your time at college, complete with your own events and inside jokes."

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
          <p>{section1Text}</p>
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
          <p>{section2Text1}</p>
          <p>{section2Text2}</p>
        </div>
      </section>
    </>
  );
}

export default Home
