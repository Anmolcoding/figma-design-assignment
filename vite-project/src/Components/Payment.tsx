import "../App.css";
import card from "../assets/Card.png";
import cardradio from "../assets/CardRadio.png";
import master from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import dinner from "../assets/diners-club.png";
import piggy from "../assets/PiggyBank.png";
import inf from "../assets/infimage.png";
import lock from "../assets/Lck.png";
import apple from "../assets/apple.png";
import circle from "../assets/circle.png";
import googlepay from "../assets/googlepay.png";
function Payment() {
  return (
    <div className="main-detail2">
      <div className="content3-detail">
        <h3 className="heading3-detail">Select your mode of payment</h3>

        <p className="paragraph3-detail">
          Payments with Tickete are secure and encrypted.
        </p>
      </div>
      <div className="form3-detail">
        <div className="card-container">
          <div className="card-content">
            <img src={card} alt="" className="card" />
            <h5 className="credit-heading">Credit & debit card</h5>
          </div>
          <img src={cardradio} alt="" className="cardradio" />
        </div>
        <div className="cards">
          <div className="visacontainer">
            <img src={visa} alt="" className="visa" />
          </div>
          <div className="mastercontainer">
            <img src={master} alt="" className="master" />
          </div>
          <div className="dinnercontainer">
            <img src={dinner} alt="" className="dinner" />
          </div>
        </div>
        <div className="paymentcontainer">
          <div className="twobox3">
            <input
              className="name-card-input"
              id="card-name"
              type="text"
              placeholder="Name on card *"
              required
            />
            <input
              className="card-number-input"
              id="card-number"
              type="text"
              placeholder="Card number *"
              required
            />
          </div>
          <div className="twobox4">
            <input
              className="expiry-input"
              id="expiry"
              type="text"
              placeholder="Expiry date *"
              required
            />
            <input
              className="cvv"
              id="cvv"
              type="text"
              placeholder="<CVV/CVC> *"
              required
            />
          </div>
        </div>
        <div className="totalcontainer">
          <div className="totalcontent">
            <div className="totalrupee">
              <div className="totalpayable">
                <h5 className="payable">Total payable:</h5>
                <h5 className="xx">$XXX</h5>
              </div>
              <div className="piggybank">
                <div className="piggycontainer">
                  <img src={piggy} alt="" className="piggy" />
                </div>
                <h3 className="price">You save price</h3>
              </div>
            </div>
            <div className="paracontainer">
              <p className="para">You will be charged in AED</p>
              <div className="inf">
                <img src={inf} alt="" className="infimage" />
              </div>
            </div>
          </div>
          <div className="buttoncontainer">
            <p className="buttonpara">
              By clicking “confirm & pay”, you agree to
              <a> Tickete's general terms and conditions</a> and
              <a> cancellation policy.</a>
            </p>
            <button className="button">
              <img src={lock} alt="" className="lck" />
              <a className="confirmpay">Confirm & pay</a>
            </button>
          </div>
        </div>
      </div>
      <div className="applecontainer">
        <div className="applecontent">
          <div className="applepay">
            <img src={apple} alt="" className="apple" />
            <p className="comingsoon">Coming soon</p>
          </div>
          <img src={circle} alt="" className="circle" />
        </div>
      </div>
      <div className="applecontainer">
        <div className="applecontent">
          <div className="applepay">
            <img src={googlepay} alt="" className="apple" />
            <p className="comingsoon">Coming soon</p>
          </div>
          <img src={circle} alt="" className="circle" />
        </div>
      </div>
    </div>
  );
}
export default Payment;
