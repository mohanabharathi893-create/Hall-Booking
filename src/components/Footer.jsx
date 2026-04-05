function Footer() {
  return (
    <footer className="footer-section text-light pt-5 pb-3">

      <div className="container">

        <div className="row">

          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h3 className="footer-title">
              🎇 DreamCraft
            </h3>

            <p>
              Creating unforgettable celebrations – from weddings
              to corporate events and birthday parties.
            </p>

            <p>
              📍 DreamCraft Events Pvt Ltd <br/>
              Chennai, Tamil Nadu – 600001
            </p>
          </div>


          {/* Event Categories */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Event Services</h5>

            <ul className="footer-list">

              <li>Wedding Events</li>
              <li>Birthday Parties</li>
              <li>Corporate Events</li>
              <li>Engagement Ceremony</li>
              <li>College Cultural Events</li>

            </ul>
          </div>


          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Company</h5>

            <ul className="footer-list">

              <li>About Us</li>
              <li>Our Team</li>
              <li>Event Gallery</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>

            </ul>
          </div>


          {/* Contact Section */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Contact Us</h5>

            <p>📧 info@dreamcraftevents.com</p>

            <p>📞 +91 98765 43210</p>

            <p>💬 Live Event Support</p>

            <p>📍 Chennai, Tamil Nadu</p>

          </div>

        </div>

        <hr className="footer-line"/>

        <div className="text-center">

          <p className="footer-copy">
            © 2026 DreamCraft Events Pvt Ltd. All rights reserved.
            | Designed for Event Management
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer;