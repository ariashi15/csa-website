import './Home.css'
import SectionHeader from '../components/SectionHeader';
import { useNavigate } from 'react-router-dom'
import emptyImage from '../assets/images/empty-image.png'
import EventCard from '../components/EventCard';
import GalleryGrid from '../components/GalleryGrid';
import SeeMoreButton from '../components/SeeMoreButton';

const section1Text = "Welcome to Northwestern’s Chinese Students Association: culture, food, and community on campus. Anyone and everyone is welcome!"

export const aboutText1 = "CSA is Northwestern's largest student organization celebrating Chinese and Chinese-American identity. From festival celebrations to Chinatown food crawls to speaker events, CSA is a place where students of all backgrounds come together over a shared love for Chinese culture. "
export const aboutText2 = "CSA hosts a wide range of social and cultural events, giving students opportunities to build lasting friendships and find a community within Northwestern. Whether you're looking to meet new people, hoping to find mentorship, or just want to have fun, CSA has a home for you."

const galleryColumns = [
  [emptyImage, emptyImage],
  [emptyImage, emptyImage, emptyImage],
  [emptyImage, emptyImage],
  [emptyImage, emptyImage, emptyImage],
]

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
        <div className="section-col img-col">
          <img src="src/assets/images/empty-image.png" />
        </div>
      </section>
      <section className="numbers-section">
        <NumberCol stat="500+" subheader="community members"/>
        <NumberCol stat="40+" subheader="events per year"/>
        <NumberCol stat="4" subheader="dynasties"/>
        <NumberCol stat="10+" subheader="years strong"/>
      </section>
      <section className="two-col-section">
        <div className="section-col img-col">
          <img src="src/assets/images/empty-image.png" />
        </div>
        <div className="section-col">
          <SectionHeader title="Not just a club — a family" subtitle="About Us" />
          <p>{aboutText1}</p>
          <p>{aboutText2}</p>
        </div>
      </section>
      <section className="events-section">
        <SectionHeader title="Past Events" subtitle="Community In Action" />
        <div className="cards-container">
          <EventCard tag="CSA General" title="Mid-Autumn Festival" date="October 2025" />
          <EventCard tag="CSA General" title="Mid-Autumn Festival" date="October 2025" />
          <EventCard tag="CSA General" title="Mid-Autumn Festival" date="October 2025" />
        </div>
        <SeeMoreButton to="/events" />
      </section>
      <section>
        <SectionHeader title="Photo Gallery" subtitle="Camera Roll" />
        <GalleryGrid columns={galleryColumns} />
        <SeeMoreButton to="/gallery" />
      </section>
    </>
  );
}

export default Home
