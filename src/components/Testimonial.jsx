const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="container">
                <div className="testimonial-heading">
                    <h2>What Clients Say</h2>
                    <p><span>Problems trying to resolve the conflict between</span> the
                        two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
            </div>
            {/* <!-- testimonials --> */}
            <div className="testimonial">
                {/* <!-- item 01 --> */}
                <div className="sliders">
                    <div className="testimonial-item">
                        <div className="user-img">
                            <img src="images/user1.svg" alt="user-img" />
                        </div>
                        <div className="user-info">
                            <div className="user-name">
                                <h3>Regina Miles</h3>
                                <h6>Designer</h6>
                            </div>
                            <div className="rate">
                                <ul>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star-emp.svg" alt="rating" /></li>
                                </ul>
                            </div>
                            <p>This proved to be impossible using the traditional
                                concepts of space and time. Einstein developed a
                                new view of time first and then space. This proved
                                to be impossible using the traditional concepts of
                                space and time. Einstein developed a new view
                                of time first and then space.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- item 02 --> */}
                <div className="sliders">
                    <div className="testimonial-item">
                        <div className="user-img">
                            <img src="./images/user2.svg" alt="user-img" />
                        </div>
                        <div className="user-info">
                            <div className="user-name">
                                <h3>Regina Miles</h3>
                                <h6>Designer</h6>
                            </div>
                            <div className="rate">
                                <ul>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star-emp.svg" alt="rating" /></li>
                                </ul>
                            </div>
                            <p>This proved to be impossible using the traditional
                                concepts of space and time. Einstein developed a
                                new view of time first and then space. This proved
                                to be impossible using the traditional concepts of
                                space and time. Einstein developed a new view
                                of time first and then space.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- item 03 --> */}
                <div className="sliders">
                    <div className="testimonial-item">
                        <div className="user-img">
                            <img src="./images/user3.svg" alt="user-/img" />
                        </div>
                        <div className="user-info">
                            <div className="user-name">
                                <h3>Regina Miles</h3>
                                <h6>Designer</h6>
                            </div>
                            <div className="rate">
                                <ul>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="images/star.svg" alt="rating" /></li>
                                    <li><img src="./images/star.svg" alt="rating" /></li>
                                    <li><img src="./images/star.svg" alt="rating" /></li>
                                    <li><img src="./images/star-emp.svg" alt="rating" /></li>
                                </ul>
                            </div>
                            <p>This proved to be impossible using the traditional
                                concepts of space and time. Einstein developed a
                                new view of time first and then space. This proved
                                to be impossible using the traditional concepts of
                                space and time. Einstein developed a new view
                                of time first and then space.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial