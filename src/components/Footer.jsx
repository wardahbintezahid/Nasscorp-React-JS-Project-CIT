const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer-contents">
                    <div className="content-grid">
                        {/* <!-- item 01 --> */}
                        <div className="grid-item">
                            <h3>Get In Touch</h3>
                            <p>the quick fox jumps over the lazy dog</p>
                            <ul>
                                <li><img src="images/fb.svg" alt="" /></li>
                                <li><img src="images/ig.svg" alt="" /></li>
                                <li><img src="images/twit.svg" alt="" /></li>
                                <li><img src="images/yt.svg" alt="" /></li>
                            </ul>
                        </div>
                        {/* <!-- item 02 --> */}
                        <div className="grid-item">
                            <h3>Company info</h3>
                            <div className="nav-link">
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Carrier</a></li>
                                    <li><a href="#">We are hiring</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- item 03 --> */}
                        <div className="grid-item">
                            <h3>Features</h3>
                            <div className="nav-link">
                                <ul>
                                    <li><a href="#">Business Marketing</a></li>
                                    <li><a href="#">User Analytic</a></li>
                                    <li><a href="#">Live Chat</a></li>
                                    <li><a href="#">Unlimited Support</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- item 04 --> */}
                        <div className="grid-item">
                            <h3>Resources</h3>
                            <div className="nav-link">
                                <ul>
                                    <li><a href="#">IOS & Android</a></li>
                                    <li><a href="#">Watch a Demo</a></li>
                                    <li><a href="#">Customers</a></li>
                                    <li><a href="#">API</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer