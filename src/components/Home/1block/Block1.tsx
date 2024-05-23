import './1block.scss';

function Block1() {
    return (
        <div className='first-container'>
            <div className="left-side_container">
                <div className="image-block">
                    <img src="/images/block12.png" alt="fish" />
                    <p className='china first'>ツ</p>
                    <p className='china second'>ナ</p>
                </div>
                <div className="learn-button">
                    <button>Learn More</button>
                    <img src="/images/arrow.png" alt="arrow" />
                </div>
                <div className="image-block">
                    <img src="/images/block1.png" alt="fish" />
                    <p className='china first'>エ</p>
                    <p className='china second'>ビ</p>
                </div>
            </div>
            <div className="right-side_container">
                <div className="content-first">
                    <p className='special'>About Us / 私たちに関しては</p>
                    <h1>Our mission is to bring true Japanese flavours to you.</h1>
                    <h2>We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</h2>
                </div>
            </div>
        </div>
    );
}

export default Block1;