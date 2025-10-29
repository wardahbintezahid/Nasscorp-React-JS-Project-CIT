const About02 = () => {
    return (
        <section id="about-2">
            <div className="container">
                <div className="about-2">
                    <div className="heading">
                        <h2><span>We are providing best</span> business service.</h2>
                        <p><span>Problems trying to resolve the conflict between the two major realms</span> of Classical
                            physics: Newtonian mechanics
                        </p>
                    </div>
                    {/* <!-- media content --> */}
                    <div className="media-content">
                        <div className="image">
                            {/* <!-- <div className="overlay"></div> --> */}
                            <button className="play-btn">
                                <img src="images/play-button.svg" alt="play-button" />
                            </button>
                        </div>
                        {/* <!-- texts --> */}
                        <div className="content">
                            <div className="content-heading">
                                <h2>Most trusted in our field</h2>
                                <p>Most calendars are designed for teams. Slate
                                    is designed for freelancers who want a
                                    simple way to plan their schedule.
                                </p>
                            </div>
                            {/* <!-- media cards --> */}
                            <div className="media-info">
                                {/* <!-- 01 --> */}
                                <div className="info">
                                    <div className="img">
                                        <img src="images/Vector1.svg" alt="" />
                                    </div>
                                    <div className="txt">
                                        <h5>the quick fox jumps over the lazy dog</h5>
                                        <h6>Things on a very small scale ...</h6>
                                    </div>
                                </div>
                                {/* <!-- 02 --> */}
                                <div className="info">
                                    <div className="img">
                                        <img src="images/Vector2.svg" alt="" />
                                    </div>
                                    <div className="txt">
                                        <h5>the quick fox jumps over the lazy dog</h5>
                                        <h6>Things on a very small scale ...</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About02