import './Block2.scss'

function Block2() {
    return (
        <div className='second-container'>
            <p className='china'>日本食</p>
            <h1 className='popular'>Popular Foods / 人気 </h1>
            <div className="content-second">
                <div className="buttons-choose">
                    <button className='food active'>All</button>
                    <button className='food'>
                        <img src="/images/icon1.png" alt="icon" />
                        Sushi
                    </button>
                    <button className='food'>
                        <img src="/images/icon2.png" alt="icon" />
                        Ramen
                    </button>
                    <button className='food'>
                        <img src="/images/icon3.png" alt="icon" />
                        Udon
                    </button>
                    <button className='food'>
                        <img src="/images/icon4.png" alt="icon" />
                        Danggo
                    </button>
                    <button className='food'>
                        Others
                    </button>
                </div>

                <div className="food-cards">
                    <button className='left'>
                        <img src="/images/left.png" alt="left" />
                    </button>
                    <button className='right'>
                        <img src="/images/right.png" alt="right" />
                    </button>

                    <div className="card">
                        <img src="images/card1.png" alt="card" />
                        <h1>Chezu Sushi</h1>
                        <div className="stars">
                            <div className="star">
                                <img src="/images/star.png" alt="star" />
                                <p>4.7</p>
                            </div>
                            <div className="price">
                                <p>$16.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="card active-card">
                        <img src="images/mainTest.png" alt="card" />
                        <h1>Originale Sushi</h1>
                        <div className="stars">
                            <div className="star">
                                <img src="/images/star.png" alt="star" />
                                <p>4.8</p>
                            </div>
                            <div className="price">
                                <p className='mainPrice'>$16.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="images/card2.png" alt="card" />
                        <h1>Ramen Legendo</h1>
                        <div className="stars">
                            <div className="star">
                                <img src="/images/star.png" alt="star" />
                                <p>4.7</p>
                            </div>
                            <div className="price">
                                <p>$16.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Block2;