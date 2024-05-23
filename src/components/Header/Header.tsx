import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <div className="header-container">
                <div className="left-side_header">
                    <p className='logo-h1'>SUSHIMAN</p>
                    <img className='image-header' src="/images/try.png" alt="massive" />
                    <div className="china-name">
                        <h1 className='china first'>日</h1>
                        <h1 className='china second'>本</h1>
                        <h1 className='china third'>食</h1>
                    </div>
                </div>
                <div className="right-side_header">
                    <nav>
                        <li><a href="#">menu</a></li>
                        <li><a href="#">foods</a></li>
                        <li><a href="#">services</a></li>
                        <li><a href="#">about us</a></li>
                        <img src="/images/Search.svg" alt="search" />
                    </nav>

                    <div className="main-info">
                        <h1 className='main-h1'>Feel the taste of Japanese foods</h1>
                        <p className='main-p'>Feel the taste of most populars Japanese foods from anywhere and anytime.</p>
                        <div className="buttons">
                            <button className='order-now'>Oreder Now</button>
                            <button className='order'>
                                <img src="/images/play-circle.png" alt="circle" />
                                <p>How to order</p>
                            </button>
                        </div>
                    </div>

                    <div className="end-header">
                        <div className="left-end">
                            <h2 className='number'>24K+</h2>
                            <p className='customers'>Happy Customer</p>
                        </div>
                        <div className="border"></div>
                        <div className="right-end">
                            <div className="people">
                                <img src="/images/people.png" alt="people" />
                            </div>
                            <p>“This is the best Japanese food delivery service that ever exist”</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;