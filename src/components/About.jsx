const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-cards">
                    <div className="card-items">
                        {/*  card 01  */}
                        <div className="item">
                            <div className="icon">
                                <img src="./images/tool-box.svg" alt="" />
                            </div>
                            {/*  info  */}
                            <div className="info">
                                <h5>Business Growing</h5>
                                <p><span>the quick fox jumps</span> over the lazy dog</p>
                                <div className="button">
                                    <a href="#">More
                                        <img className="arrow" src="images/arrow-right.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*  card 02  */}
                        <div className="item">
                            <div className="icon">
                                <img src="images/icn-lg1.svg" alt="" />
                            </div>
                            {/*  info  */}
                            <div className="info">
                                <h5>Digital Marketing</h5>
                                <p><span>the quick fox jumps</span> over the lazy dog</p>
                                <div className="button">
                                    <a href="#">More
                                        <img className="arrow" src="images/arrow-right.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*  card 03  */}
                        <div className="item">
                            <div className="icon">
                                <img src="images/bx-stats.svg" alt="" />
                            </div>
                            {/*  info  */}
                            <div className="info">
                                <h5>National top 50 firms</h5>
                                <p><span>the quick fox jumps</span> over the lazy dog</p>
                                <div className="button">
                                    <a href="#">More
                                        <img className="arrow" src="images/arrow-right.svg" alt="arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*  card 04  */}
                        <div className="item" id="item-4">
                            <div className="icon">
                                <img src="images/icn-lg-white.svg" alt="" />
                            </div>
                            {/*  info  */}
                            <div className="info">
                                <h5>Digital Marketing</h5>
                                <p><span>the quick fox jumps</span> over the lazy dog</p>
                                <div className="button">
                                    <a href="#">More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About