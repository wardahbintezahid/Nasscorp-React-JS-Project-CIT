const Quote = () => {
    return (
        <section id="quote">
            <div className="container">
                <div className="quote-form">
                    <div className="form-img"></div>
                    <div className="form">
                        <form>
                            <div className="form-heading">
                                <h2>Get A Free Quote Here</h2>
                            </div>
                            <div className="inputs">
                                <label htmlFor="name">Name*</label>
                                <input type="text" id="name" placeholder="Full Name" />

                                <label htmlFor="email">Email*</label>
                                <input type="email" id="email" placeholder="example@gmail.com" />

                                <label htmlFor="department">Department *</label>
                                <select id="department" name="department" required>
                                    <option value="" className="choose">Please Select</option>
                                    <option value="cse">CSE</option>
                                    <option value="eee">EEE</option>
                                    <option value="bba">BBA</option>
                                </select>

                                <label htmlFor="time">Time *</label>
                                <select name="time" id="time">
                                    <option value="" id="choose">4:00 Available</option>
                                    <option value="5:00">5:00</option>
                                    <option value="6:00">6:00</option>
                                    <option value="7:00">7:00</option>
                                </select>

                            </div>
                            <div className="book-btn">
                                <button>
                                    <a href="#">Book Appointment</a>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote 