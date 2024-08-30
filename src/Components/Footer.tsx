import "../App.css";
import footerlogo from "../assets/whitelogo.png";
// import footer from "../assets/tickLogo.jpg";
function Footer() {
  return (
    <div className="footercont">
      <div className="footerlogo">
        <img src={footerlogo} alt="" className="footerimg" />
      </div>
      <div className="footerlist">
        <div className="footer">
          <ul className="footercon">
            <li>
              <a href="#">Made with ❤️</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Term of usage</a>
            </li>
            <li>
              <a href="#">Cancellation policy</a>
            </li>
            <li>
              <a href="#">Site map</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
