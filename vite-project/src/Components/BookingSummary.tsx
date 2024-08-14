import "../App.css";
import trophy from "../assets/Trophy.png";
import leftarrow from "../assets/Carousel Arrow<.png";
import rightarrow from "../assets/Carousel Arrow>.png";
import circle6 from "../assets/6circle.png";
import circle8 from "../assets/8circle.png";
import circle28 from "../assets/28circle.png";
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
                <img src={circle6} alt="" />
                <img src={circle8} alt="" />
                <img src={circle8} alt="" />
                <img src={circle28} alt="" />
                <img src={circle8} alt="" />
                <img src={circle8} alt="" />
                <img src={circle6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingSummary;
