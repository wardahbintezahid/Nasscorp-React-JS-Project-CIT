const Contribution = () => {
    return (
        <section id="contribution">
            <div className="container">
                <div className="contribution">
                    <div className="card-item">
                        {/*  card 01  */}
                        <div className="card">
                            <div className="card-icon">
                                <img src="./images/clarity.svg" alt="" />
                            </div>
                            <div className="card-text">
                                <h3>1.5K</h3>
                                <h6><span>HAPPY</span> CUSTOMERS</h6>
                            </div>
                        </div>
                        {/*  card 02  */}
                        <div className="card">
                            <div className="card-icon">
                                <img src="images/icn-lg1.svg" alt="" />
                            </div>
                            <div className="card-text">
                                <h3>3K</h3>
                                <h6>CASES DONE</h6>
                            </div>
                        </div>
                        {/*  card 03  */}
                        <div className="card">
                            <div className="card-icon">
                                <img src="images/icn-lg2.svg" alt="" />
                            </div>
                            <div className="card-text">
                                <h3>45</h3>
                                <h6>AWARD WINNING</h6>
                            </div>
                        </div>
                        {/*  card 04  */}
                        <div className="card">
                            <div className="card-icon">
                                <img src="images/award.svg" alt="" />
                            </div>
                            <div className="card-text">
                                <h3>12+</h3>
                                <h6><span>COUNTRIES</span> WORLDWIDE</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contribution