import SectionHeader from '../components/SectionHeader';
import './Apply.css'

function Apply() {
  return (
    <>
    <section>
      <SectionHeader title="Fall 2026 Recruitment Timeline" subtitle="How to Join" />
      <div className="timeline-container">
        <img src='src/assets/images/timeline-figtree.jpg' alt="Recruitment Timeline" className="timeline-image"/>
      </div>
      <div className="recruitment-text">
        <p>To join CSA, prospective members go through a brief, low-stakes recruitment process where they have the opportunity to learn more about our organization and get to know our executive board!</p>
        <p>After they're in, they'll be able to sign up for "group dinners": a series of welcome events hosted by current members (not limited just to dinners!) for them to connect with other new members and potential bigs. Finally, after group dinners are complete, we'll have a dynasty reveal event where they're matched with their bigs and officially part of a dynasty!</p>
      </div>
    </section>
    </>
  );
}

export default Apply
