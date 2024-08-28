import "../App.css";
import faq from "../assets/faqlogo.png";
function Faq() {
  return (
    <div className="faqmaincontainer">
      <div className="faqcontainer">
        <div className="faqsection">
          <div className="faqcontent">
            <h3 className="faqhead">Frequently asked questions</h3>
            <p className="faqpara">
              Here are some of our most asked questions.
            </p>
          </div>
          <div className="faqhelpcontainer">
            <div className="faqhelp">
              <p className="faqcon">Still need help? We’re here for you.</p>
              <button className="faqbutton">
                <p className="faqbuttonpara">Chat with us</p>
              </button>
            </div>
            <img src={faq} alt="" className="faqlogo" />
          </div>
        </div>
        <div className="faqq">
          <div className="faq1">
            <div className="faq1con">
              <p className="faq1plus">+</p>
              <p className="faq1para">
                What should I do on my first trip to Rome?
              </p>
            </div>
          </div>
          <div className="faqq2">
            <div className="faq2">
              <div className="faq2con">
                <p className="faq2plus">X</p>
                <p className="faq2para">
                  What are some hidden gems to see in Rome?
                </p>
              </div>
              <p className="faq2para1">
                Rome is packed with hidden gems. If you love art, don't miss the
                Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco
                is a free museum and well worth a quick visit. If you love the
                ancient stuff, don't miss the Domus Romana at Palazzo Valentini,
                the Domus Aurea, and the Baths of Caracalla. For even more
                hidden gems, take a tour of Trastevere, a fascinating
                neighborhood full of history and ambiance.
              </p>
            </div>
          </div>
          <div className="faq3">
            <div className="faq1con">
              <p className="faq1plus">+</p>
              <p className="faq1para">How much time should I spend in Rome?</p>
            </div>
          </div>
          <div className="faq3">
            <div className="faq1con">
              <p className="faq1plus">+</p>
              <p className="faq1para">What food is Rome known for?</p>
            </div>
          </div>

          <div className="faq3">
            <div className="faq1con">
              <p className="faq1plus">+</p>
              <p className="faq1para">
                What is the best way to get around Rome?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faq;
