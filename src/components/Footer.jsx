import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__heading">Northwestern CSA</div>
            <div className="footer__links">
                <a
                    href="https://www.instagram.com/northwesterncsa"
                    target="_blank"
                    rel="noreferrer"
                    className="footer__link"
                >
                    <img src="src/assets/images/instagram.svg" className="footer__icon"/>
                    northwesterncsa
                </a>
                <a 
                    href="mailto:csa@u.northwestern.edu"
                    className="footer__link"
                >
                    <img src="src/assets/images/mail.svg" className="footer__icon"/>
                    csa@u.northwestern.edu
                </a>
            </div>
        </div>
    );
}

export default Footer;
