const Navbar = ()=> {
    return(
         <nav>
            <div className="container">
                <div className="nav-section">
                    <div className="logo">
                        <img src="images/Nasscorp.svg" alt=""/>
                    </div>
                    <div className="nav-item">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                <a href="#">
                                    <img src="images/search.svg" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="images/cart.svg" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar