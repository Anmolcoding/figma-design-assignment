import "../App.css";
import trophy from "../assets/Trophy.png";
import leftarrow from "../assets/Carousel Arrowleft.png";
import rightarrow from "../assets/Carousel Arrowright.png";
import circle6 from "../assets/6circle.png";
import circle8 from "../assets/8circle.png";
import circle28 from "../assets/28circle.png";
import star from "../assets/Rating star.png";
import ticket from "../assets/ticket.png";
import calendar from "../assets/calendarlogo.png";
import time from "../assets/time.png";
import guest from "../assets/guest.png";
import piggy from "../assets/Piggy.png";
import inf from "../assets/infimage.png";
import lock from "../assets/Lck.png";
function BookingSummary() {
  return (
    <div className="bookingsummarymain">
      <div className="bookingsummarycontent">
        <div className="bookingsummary">
          <div className="photocontainer">
            <div className="bestseller">
              <img src={trophy} alt="" className="trophy" />
              <h3 className="trophyheading">Bestseller</h3>
            </div>
            <div className="arrow">
              <img src={leftarrow} alt="" className="leftarrow" />
              <img src={rightarrow} alt="" className="rightarrow" />
            </div>
            <div className="shift">
              <div className="shiftcontainer">
                <img src={circle6} alt="" className="circle6" />
                <img src={circle8} alt="" />
                <img src={circle8} alt="" />
                <img src={circle28} alt="" />
                <img src={circle8} alt="" />
                <img src={circle8} alt="" />
                <img src={circle6} alt="" className="circle6" />
              </div>
            </div>
          </div>
          <div className="starcontainer">
            <div className="starcontent">
              <div className="star">
                <div className="starrating">
                  <img src={star} alt="" className="star1" />
                  <p className="rating">4.9</p>
                  <p className="rating1">(4.5k)</p>
                </div>
                <p className="dot">• </p>
                <div className="category">
                  <p className="categorycontent">&lt;category&gt;</p>
                </div>
              </div>
              <div className="starhead">
                <p className="starheading">
                  Amsterdam open boat canal cruise - Live Guiye - from Anne
                  Frank Housef
                </p>
              </div>
              <div className="cardsummary">
                <div className="ticketcon">
                  <img src={ticket} alt="" className="ticklogo" />
                  <h6 className="tickhead">&lt;ticket type - variant&gt;</h6>
                </div>
                <div className="calendarcon">
                  <img src={calendar} alt="" className="ticklogo" />
                  <div className="calendarhead">
                    <h6 className="calendar1">
                      &lt;day&gt;, &lt;month&gt; &lt;date&gt;
                    </h6>
                    <p className="calendarpara">Duration: &lt;duration&gt;</p>
                  </div>
                </div>
                <div className="calendarcon">
                  <img src={time} alt="" className="ticklogo" />
                  <div className="calendarhead">
                    <h6 className="calendar1">&lt;time&gt;</h6>
                    <p className="calendarpara">
                      Operating hours: &lt;time&gt; to &lt;time&gt;
                    </p>
                  </div>
                </div>
                <div className="ticketcon">
                  <img src={guest} alt="" className="ticklogo" />
                  <h6 className="tickhead">5 guests</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paymentsummary">
          <div className="paymentbox">
            <p className="paymenthead">View payment summary</p>
            <p className="plus">+</p>
          </div>
        </div>
      </div>
      <div className="paymentcon">
        <div className="paymentcont">
          <div className="payableprice">
            <div className="payable1">
              <h5 className="totalpayhead">Total Payable</h5>
              <h5 className="totalpaydollar">$XXX</h5>
            </div>
            <div className="piggybank1">
              <img src={piggy} alt="" className="piggy1" />

              <h3 className="price1">You saved &lt;price&gt;</h3>
            </div>
            <div className="paracontainer1">
              <p className="para">You will be charged in AED</p>
              <div className="inf">
                <img src={inf} alt="" className="infimage" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttoncon">
          <p className="buttoncont">
            By clicking “confirm & pay”, you agree to
            <a> Tickete’s general terms and conditions</a> and
            <a> cancellation policy</a>
          </p>
          <button className="button1">
            <img src={lock} alt="" className="lck1" />
            <a className="confirmpay1">Confirm & pay</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookingSummary;
