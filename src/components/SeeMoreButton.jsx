import { useNavigate } from 'react-router-dom'
import arrowRight from '../assets/images/arrow-right.svg'
import './SeeMoreButton.css'

function SeeMoreButton({ to }) {
    const navigate = useNavigate()

    return (
        <button className="see-more-button" onClick={() => navigate(to)}>
            See more <img src={arrowRight} alt="" />
        </button>
    )
}

export default SeeMoreButton
