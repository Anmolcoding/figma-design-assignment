import "../App.css";
import logo from "../assets/Vector.png";

function Details() {
  return (
    <div className="main-detail">
      <div className="content-detail">
        <h3 className="heading-detail">Enter your details</h3>

        <p className="paragraph-detail">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
      </div>
      <div className="form-detail">
        <input
          className="name-input"
          id="name"
          type="text"
          placeholder="Full name *"
          required
        />
        <div className="twobox1">
          <select id="country" required name="Country code *">
            <option value="" disabled selected hidden>
              <img src={logo} alt="" className="logo" />
              Country code *
            </option>
          </select>
          <input
            className="number-input"
            id="number"
            type="text"
            placeholder="Phone number *"
            required
          />
        </div>
        <div className="twobox2">
          <input
            className="mail-input"
            id="mail"
            type="text"
            placeholder="Email *"
            required
          />
          <input
            className="confirm-mail-input"
            id="confirm-mail"
            type="text"
            placeholder="Confirm email *"
            required
          />
        </div>
      </div>
    </div>
  );
}
export default Details;
