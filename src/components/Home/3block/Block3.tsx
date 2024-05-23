import './Block3.scss'

function Block3() {
    return (
        <div className='third-container'>
            <div className="center-butto">
                <button>DISCOVER</button>
            </div>

            <div className="container">
                <div className="left-container">
                    <p className='trend'>What’s Trending  / トレンド</p>
                    <h1>Japanese Sushi</h1>
                    <h2>Feel the taste of most delicious Sushi here.</h2>
                    <div className="text-content">
                        <div className="f_tr">
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Maki Sushi</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Temaki Sushi</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Nigiri Sushi</p>
                            </div>
                        </div>
                        <div className="s_tree">
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Uramaki Sushi</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Oshizushi</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Inari Sushi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="right-container">
                    <div className="image-banner">
                        <img src="/images/sushi.png" alt="sushi" />
                        <p className="china first">ツ</p>
                        <p className="china second">ナ</p>
                    </div>
                </div>
                <div className="button-center"></div>
                <div className="right-container">
                    <div className="image-banner">
                        <img src="/images/sup.png" alt="sushi" />
                        <p className="china second-first">飲</p>
                        <p className="china second-second">む</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="left-container">
                    <p className='trend'>What’s Trending  / トレンド</p>
                    <h1>Japanese Drinks</h1>
                    <h2>Feel the taste of most delicious Japanese drinks here.</h2>
                    <div className="text-content">
                        <div className="f_tr">
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Oruncha</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Kombu-cha</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Ofukucha</p>
                            </div>
                        </div>
                        <div className="s_tree">
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Aojiru</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Sakura Tea</p>
                            </div>
                            <div className="food-have">
                                <img src="/images/have.png" alt="have" />
                                <p>Mugicha</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Block3;