import * as React from 'react';

function Contact () {
    return(
        <>
            <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div
            class="banner_content d-md-flex justify-content-between align-items-center"> 
            <div class="mb-3 mb-md-0">
              <h2>Contact Us</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div class="page_link">
              <a href="index.html">Home</a>
              <a href="contact.html">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section_gap">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20872.67465130717!2d91.82506800030123!3d22.36108704214036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad27656c600855%3A0xa4be32d307a83aee!2sBali%20Arcade!5e0!3m2!1sen!2sbd!4v1753934856132!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Bali Arcade"
        ></iframe>
    </div>


      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8 mb-4 mb-lg-0">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                    <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address"/>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject"/>
                </div>
              </div>
            </div>
            <div className="form-group mt-lg-3">
              <button type="submit" className="main_btn">Send Message</button>
            </div>
          </form>


        </div>

        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
            <div className="media-body">
              <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}
export default Contact;