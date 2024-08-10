import "../App.css";

function Information() {
  return (
    <div className="main-detail1">
      <div className="content2-detail">
        <h3 className="heading2-detail">Additional information</h3>

        <p className="paragraph2-detail">
          We need a few more details to complete your reservation.
        </p>
      </div>
      <div className="form2-detail">
        <div className="twobox">
          <input
            className="input"
            id="mail"
            type="text"
            placeholder="Input label *"
            required
          />
          <select id="select" required name="Select">
            <option value="" disabled selected hidden>
              Select
            </option>
          </select>
        </div>
        <select id="multi-select" required name="Multi select">
          <option value="" disabled selected hidden>
            Multi select *
          </option>
        </select>
      </div>
    </div>
  );
}
export default Information;
