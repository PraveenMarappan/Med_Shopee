import bg from "../public/g.png";
import "./home.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home1">

      <img src={bg} alt="Background" className="bg1" />

      <div className="text1">
        <h1>Med Shopee Welcomes You...!</h1>

        <h2>
          Everybody's <br />
          Health <br />
          Improves <br />
          Every Day
        </h2>

        <p>
          We provide all kinds of healthcare services to our patients
          according to their<br /> daily needs, starting from special
          conditions.
        </p>

        <button className="shop1">
          <Link to="/shop">Shop Now... 🛍️</Link>
        </button>
      </div>

    </div>
  );
}

export default Homepage;