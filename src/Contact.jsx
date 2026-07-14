import React from "react";
import "./Contact.css";
import img from '../public/image.png'
function Contact() {
  return (
    <div className="page4">

      <div className="heading4">
        <h1>Contact Us</h1>
        <p>
          We're here to help! Reach out to us for any queries, support, or
          feedback.
        </p>
      </div>

      <div className="container4">

        <div className="form">

          <div className="title4">
            <h2>📩 Get in Touch</h2>
            <p>
              Fill out the form below and we'll respond as soon as possible.
            </p>
          </div>

          <div className="row4">
            <input
              className="input4"
              type="text"
              placeholder="👤 Your Name"
            />

            <input
              className="input4"
              type="email"
              placeholder="✉ Your Email"
            />
          </div>

          <input
            className="input4"
            type="text"
            placeholder="🏷 Subject"
          />

          <textarea
            className="textarea"
            placeholder="💬 Your Message"
          ></textarea>

          <button className="btn4">
            ✈ Send Message
          </button>

        </div>

        <div className="info4">

          <h2>📞 Contact Information</h2>

          <p>
            You can also reach us through the following details.
          </p>

          <div className="item4">

            <div className="icon4">
              📞
            </div>

            <div className="details4">
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>

          </div>

          <div className="item4">

            <div className="icon4">
              📧
            </div>

            <div className="details4">
              <h4>Email</h4>
              <p>support@medshopee.com</p>
            </div>

          </div>

          <div className="item4">

            <div className="icon4">
              📍
            </div>

            <div className="details4">
              <h4>Address</h4>

              <p>
                123 Medical Street
                <br />
                Coimbatore
                <br />
                Tamil Nadu - 641001
              </p>

            </div>

          </div>

          <div className="item4">

            <div className="icon4">
              🕒
            </div>

            <div className="details4">

              <h4>Working Hours</h4>

              <p>
                Monday - Saturday
                <br />
                9:00 AM - 8:00 PM
              </p>

              <p>
                Sunday
                <br />
                10:00 AM - 6:00 PM
              </p>

            </div>

          </div>

          <div className="map4">

            <img
              src={img}
              alt="Map"
            />

          </div>

        </div>

      </div>


      <div className="features4">

        <div className="feature4">
          <h3>🛡 Secure Shopping</h3>
          <p>
            Your personal information and payments are completely secure.
          </p>
        </div>

        <div className="feature4">
          <h3>🚚 Fast Delivery</h3>
          <p>
            Get medicines delivered quickly across India.
          </p>
        </div>

        <div className="feature4">
          <h3>🎧 24/7 Support</h3>
          <p>
            Our customer support team is always ready to help.
          </p>
        </div>

        <div className="feature4">
          <h3>⭐ Genuine Medicines</h3>
          <p>
            We provide only trusted and certified healthcare products.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Contact;