const Teams = () => {
    return (
        <section id="teams">
            <div className="container">
                <div className="teams-heading">
                    <h2>Meet Our Team</h2>
                    <p><span>Problems trying to resolve the conflict between</span>
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="teams-intro">
                    {/* <!-- card 01 --> */}
                    <div className="intro-cards">
                        <div className="intro-img">
                            <img src="images/cover1.jpg" alt="" />
                        </div>
                        <div className="intro-info">
                            <h6>CO Founder</h6>
                            <h5>Avie Beaton</h5>
                            <p><span>the quick fox jumps</span> over the lazy dog</p>
                        </div>
                    </div>
                    {/* <!-- card 02 --> */}
                    <div className="intro-cards">
                        <div className="intro-img">
                            <img src="images/cover2.jpg" alt="" />
                        </div>
                        <div className="intro-info">
                            <h6>Consultant</h6>
                            <h5>Ben Jonson</h5>
                            <p><span>the quick fox jumps</span> over the lazy dog</p>
                        </div>
                    </div>
                    {/* <!-- card 03 --> */}
                    <div className="intro-cards">
                        <div className="intro-img">
                            <img src="images/cover3.jpg" alt="" />
                        </div>
                        <div className="intro-info">
                            <h6>Consultant</h6>
                            <h5>Rodney Stratton</h5>
                            <p><span>the quick fox jumps</span> over the lazy dog</p>
                        </div>
                    </div>
                    {/* <!-- card 04 --> */}
                    <div className="intro-cards">
                        <div className="intro-img">
                            <img src="images/cover4.jpg" alt="" />
                        </div>
                        <div className="intro-info">
                            <h6>Consultant</h6>
                            <h5>Ben Jonson</h5>
                            <p><span>the quick fox jumps</span> over the lazy dog</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams