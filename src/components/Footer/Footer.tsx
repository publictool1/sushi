import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <h1><span>SUSHI</span>MAN</h1>
                <nav>
                        <li><a href="#">menu</a></li>
                        <li><a href="#">foods</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">about us</a></li>
                </nav>
                <div className="links">
                    <img src="images/facebook.png" alt="icon" />
                    <img src="images/twitter.png" alt="icon" />
                    <img src="images/inst.png" alt="icon" />
                </div>
            </div>
        </div>
    );
}

export default Footer;