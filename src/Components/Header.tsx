import "../App.css";
import logo from "../assets/tickLogo.jpg";
import Lock from "../assets/Lock.png";
import Question from "../assets/Question.png";

function Header() {
  return (
    <header className="header-box">
      <div className="navbar">
        <div className="nav-logo">
          <div className="logo">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="checkout-box">
            <img src={Lock} alt="" className="Lock-logo" />
            <div className="nav-checkout">
              <a>Checkout</a>
            </div>
          </div>
          <div className="help-box">
            <img src={Question} alt="" className="help-logo" />
            <div className="nav-help">
              <a>Help</a>
            </div>
          </div>
        </div>
      </div>

      {/* ##################################################################################################### */}
      <div className="panel-content">
        <p>Holding your tickets for 30:00</p>
      </div>
    </header>
  );
}

export default Header;
