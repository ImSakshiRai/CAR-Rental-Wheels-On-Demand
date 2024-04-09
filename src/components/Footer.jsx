import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CAR</span> Rental
              </li>
              <li>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <IconPhoneCall /> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; carrental@gmail.com
                </a>
              </li>

              {/* <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://imsakshirai.github.io/PORTFOLIO/"
                >
                  Design by Sakshi Rai
                </a>
              </li> */}
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">New York</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <form
                action="https://formspree.io/f/mjvnpwdn"
                method="POST">
              <label>
              <li>
                <input type="email" name= "email" placeholder="Enter Email Address"></input>
              </li>
              </label>  
              <li>
                <button className="submit-email">Submit</button>
              </li>
              </form>
            </ul>
          </div>
        </div>
      </footer>
      <a className="sakshi"
        style={{ fontSize: "14px" }}
        target="_blank"
        rel="noreferrer"
        href="https://imsakshirai.github.io/PORTFOLIO/"
        >
          Build & Design by Sakshi Rai
        </a>
    </>
  );
}

export default Footer;
