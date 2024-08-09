import "../App.css";

// import info from "../assets/Info.png";

function ConfirmPay() {
  return (
    <section className="section-box">
      <div className="confirmpay-box">
        <div className="confirmpay-content">Confirm & pay</div>
      </div>
      <div className="freecancelation">
        {/* <img src={info} alt="" className="info" /> */}
        <div className="freecancelation-content">
          <div className="freecancelation-content1">Free cancellation</div>
          <div className="freecancelation-content2">
            Tickets can be cancelled by 13th December, 2022
          </div>
        </div>
      </div>
      {/* <div className="enterdetail">
        <div className="detailcontent">
          <div className="headingdetail">
            <h3>Enter your details</h3>
          </div>
          <div className="paragraphdetail">
            <p>
              We'll be sending your tickets to the details below. Booking for a
              friend? Add their details
            </p>
          </div>
        </div>
      </div>
      <div className="deatilform">
        <div className="name"></div>
      </div> */}
    </section>
  );
}
export default ConfirmPay;
