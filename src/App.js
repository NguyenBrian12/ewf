import React, { Component } from "react";
import "./toothsy/css/aos.css";
import "./toothsy/css/bootstrap-datepicker.css";
import "./toothsy/css/bootstrap.min.css";
//import "./toothsy/css/jquery-ui.css";
import "./toothsy/css/magnific-popup.css";
//import "./toothsy/css/mediaelementplayer.css";
//import "./toothsy/css/owl.carousel.min.css";
import "./toothsy/css/owl.theme.default.min.css";
import "./App.css";
import "./bower_components/bootstrap/dist/css/bootstrap.min.css";
import "./bower_components/font-awesome/css/font-awesome.min.css";
import "./bower_components/Ionicons/css/ionicons.min.css";
import "./dist/css/AdminLTE.min.css";
import "./dist/css/skins/_all-skins.min.css";
import "./bower_components/morris.js/morris.css";
import "./bower_components/jvectormap/jquery-jvectormap.css";
import "./bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "./bower_components/bootstrap-daterangepicker/daterangepicker.css";
import "./plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css";
// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="site-wrap" id="home-section">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>

          <header
            className="site-navbar js-sticky-header site-navbar-target"
            role="banner"
          >
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="site-logo">
                  <a href="index.html" className="text-black">
                    <span className="text-primary">Tooth</span>sy
                  </a>
                </div>

                <div className="col-12">
                  <nav className="site-navigation text-center " role="navigation">
                    <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                      <li>
                        <a href="#home-section" className="nav-link">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#services-section" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#about-section" className="nav-link">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#team-section" className="nav-link">
                          Doctors
                        </a>
                      </li>

                      <li>
                        <a href="#testimonials-section" className="nav-link">
                          Testimonials
                        </a>
                      </li>
                      <li>
                        <a href="#blog-section" className="nav-link">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#contact-section" className="nav-link">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="toggle-button d-inline-block d-lg-none">
                  <a
                    href="#"
                    className="site-menu-toggle py-5 js-menu-toggle text-black"
                  >
                    <span className="icon-menu h3" />
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div
            className="site-section-cover img-bg-section"
            style={{
              "background-image": "url('images/person-transparent-2.png')"
            }}
            data-aos="fade"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="box-shadow-content">
                    <div className="block-heading-1">
                      <span className="d-block mb-3" data-aos="fade-up">
                        Welcome To Toothsy
                      </span>
                      <h1 className="mb-4" data-aos="fade-up" data-aos-delay="100">
                        We Care For Your Smile
                      </h1>
                    </div>

                    <p className="mb-4" data-aos="fade-up" data-aos-delay="200">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Amet quod modi, eius minus hic illum perspiciatis!
                      Voluptate facere tempore, libero enim fugit, temporibus
                      non dolor nostrum iure ad. Dolorem, explicabo!
                    </p>
                    <p data-aos="fade-up" data-aos-delay="300">
                      <a href="#" className="btn btn-primary text-white py-3 px-5">
                        Contact Us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-absolute">
              <img
                src="images/person-transparent-2.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>

          <div className="site-section block-feature-1-wrap" id="services-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12">
                  <div className="block-heading-1">
                    <span>All Kind Of Services</span>
                    <h2>Dental Services</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up">
                  <div className="block-feature-1">
                    <span className="icon">
                      <span className="flaticon-dentist" />
                    </span>
                    <h2 className="text-black">Tooth Extraction</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum suscipit quo quae
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 mb-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="block-feature-1">
                    <span className="icon">
                      <span className="flaticon-dental-care" />
                    </span>
                    <h2 className="text-black">Tooth Fillings</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum suscipit quo quae
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 mb-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="block-feature-1">
                    <span className="icon">
                      <span className="flaticon-dental-1" />
                    </span>
                    <h2 className="text-black">Braces Install</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum suscipit quo quae
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up">
                  <div className="block-feature-1">
                    <span className="icon">
                      <span className="flaticon-baby" />
                    </span>
                    <h2 className="text-black">Children Clinic</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum suscipit quo quae
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 mb-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="block-feature-1">
                    <span className="icon">
                      <span className="flaticon-tooth" />
                    </span>
                    <h2 className="text-black">Tooth Cleaning</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum suscipit quo quae
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 mb-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="block-feature-1">
                    <span className="icon">
                      <span className="flaticon-dental" />
                    </span>
                    <h2 className="text-black">Patient Records</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum suscipit quo quae
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section gradient-bg-1" id="about-section">
            <div className="container">
              <div className="row justify-content-center mb-4 block-img-video-1-wrap">
                <div className="col-8 mb-5">
                  <figure className="block-img-video-1" data-aos="fade">
                    <a href="https://vimeo.com/45830194" className="popup-vimeo">
                      <span className="icon">
                        <span className="icon-play" />
                      </span>
                      <img
                        src="images/img-video-1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </figure>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
                      <div className="block-counter-1">
                        <span className="number">
                          <span data-number="8">0</span>+
                        </span>
                        <span className="caption">Year of Experience</span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
                      <div className="block-counter-1">
                        <span className="number">
                          <span data-number="15">0</span>+
                        </span>
                        <span className="caption">Expert Doctors</span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
                      <div className="block-counter-1">
                        <span className="number">
                          <span data-number="320">0</span>+
                        </span>
                        <span className="caption">Health Sections</span>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 col-lg-0 col-lg-3">
                      <div className="block-counter-1">
                        <span className="number">
                          <span data-number="1500">0</span>+
                        </span>
                        <span className="caption">Happy Smiles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section" id="team-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12">
                  <div className="block-heading-1">
                    <span>Expert Doctors</span>
                    <h2>Meet Our Team</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" data-aos="fade-up">
                  <div className="block-team-member-1 text-center rounded">
                    <figure>
                      <img
                        src="images/doc_person_1.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle"
                      />
                    </figure>
                    <h3 className="font-size-20 text-black">Bob Carry</h3>
                    <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                      Doctor
                    </span>
                    <p className="px-3 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Atque, repellat. At, soluta. Repellendus vero,
                      consequuntur!
                    </p>
                    <div className="block-social-1">
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-facebook" />
                      </a>
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-twitter" />
                      </a>
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-instagram" />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="block-team-member-1 text-center rounded">
                    <figure>
                      <img
                        src="images/doc_person_2.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle"
                      />
                    </figure>
                    <h3 className="font-size-20 text-black">Jean Smith</h3>
                    <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                      Doctor
                    </span>
                    <p className="px-3 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nihil quia veritatis, nam quam obcaecati fuga.
                    </p>
                    <div className="block-social-1">
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-facebook" />
                      </a>
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-twitter" />
                      </a>
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-instagram" />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-4 col-md-6 mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="block-team-member-1 text-center rounded">
                    <figure>
                      <img
                        src="images/doc_person_3.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle"
                      />
                    </figure>
                    <h3 className="font-size-20 text-black">Ricky Fisher</h3>
                    <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                      Dentist
                    </span>
                    <p className="px-3 mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas quidem, laudantium, illum minus numquam voluptas?
                    </p>
                    <div className="block-social-1">
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-facebook" />
                      </a>
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-twitter" />
                      </a>
                      <a
                        href="#"
                        className="btn border-w-2 rounded primary-primary-outline--hover"
                      >
                        <span className="icon-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="site-section bg-light block-13"
            id="testimonials-section"
            data-aos="fade"
          >
            <div className="container">
              <div className="text-center mb-5">
                <div className="block-heading-1">
                  <span>Happy Client Says</span>
                  <h2>Testimonial</h2>
                </div>
              </div>

              <div className="owl-carousel nonloop-block-13">
                <div>
                  <div className="block-testimony-1 text-center">
                    <blockquote className="mb-4">
                      <p>
                        &ldquo;Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Dolorem, fugit excepturi sapiente
                        voluptatum nulla odio quaerat quibusdam tempore
                        similique doloremque veritatis et cupiditate, maiores
                        cumque repudiandae explicabo tempora deserunt
                        consequuntur?&rdquo;
                      </p>
                    </blockquote>

                    <figure>
                      <img
                        src="images/person_4.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle mx-auto"
                      />
                    </figure>
                    <h3 className="font-size-20 text-black">Ricky Fisher</h3>
                  </div>
                </div>

                <div>
                  <div className="block-testimony-1 text-center">
                    <blockquote className="mb-4">
                      <p>
                        &ldquo;Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Dolorem, fugit excepturi sapiente
                        voluptatum nulla odio quaerat quibusdam tempore
                        similique doloremque veritatis et cupiditate, maiores
                        cumque repudiandae explicabo tempora deserunt
                        consequuntur?&rdquo;
                      </p>
                    </blockquote>

                    <figure>
                      <img
                        src="images/person_2.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle mx-auto"
                      />
                    </figure>
                    <h3 className="font-size-20 text-black">Ken Davis</h3>
                  </div>
                </div>

                <div>
                  <div className="block-testimony-1 text-center">
                    <blockquote className="mb-4">
                      <p>
                        &ldquo;Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Dolorem, fugit excepturi sapiente
                        voluptatum nulla odio quaerat quibusdam tempore
                        similique doloremque veritatis et cupiditate, maiores
                        cumque repudiandae explicabo tempora deserunt
                        consequuntur?&rdquo;
                      </p>
                    </blockquote>

                    <figure>
                      <img
                        src="images/person_1.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle mx-auto"
                      />
                    </figure>
                    <h3 className="font-size-20 text-black">Mellisa Griffin</h3>
                  </div>
                </div>

                <div>
                  <div className="block-testimony-1 text-center">
                    <blockquote className="mb-4">
                      <p>
                        &ldquo;Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Dolorem, fugit excepturi sapiente
                        voluptatum nulla odio quaerat quibusdam tempore
                        similique doloremque veritatis et cupiditate, maiores
                        cumque repudiandae explicabo tempora deserunt
                        consequuntur?&rdquo;
                      </p>
                    </blockquote>

                    <figure>
                      <img
                        src="images/person_3.jpg"
                        alt="Image"
                        className="img-fluid rounded-circle mx-auto"
                      />
                    </figure>
                    <h3 className="font-size-20 text-black">Robert Steward</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section" id="blog-section">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <div className="block-heading-1">
                    <span>Latest Blog Posts</span>
                    <h2>Our Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div>
                    <a href="single.html" className="mb-4 d-block">
                      <img
                        src="images/img-video-1.jpg"
                        alt="Image"
                        className="img-fluid rounded"
                      />
                    </a>
                    <h2>
                      <a href="single.html">Every Smile Is Precious</a>
                    </h2>
                    <p className="text-muted mb-3 text-uppercase small">
                      <span className="mr-2">January 18, 2019</span> By{" "}
                      <a href="single.html" className="by">
                        James Cooper
                      </a>
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quaerat et suscipit iste libero neque. Vitae quidem
                      ducimus voluptatibus nemo cum odio ab enim nisi, itaque,
                      libero fuga veritatis culpa quis!
                    </p>
                    <p>
                      <a href="single.html">Read More</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="post-entry mb-4">
                    <h2>
                      <a href="single.html">
                        Consectetur adipisicing elit veritatis culpa
                      </a>
                    </h2>
                    <p className="text-muted text-uppercase small">
                      <span className="mr-2">January 18, 2019</span> by{" "}
                      <a href="single.html" className="by">
                        James Cooper
                      </a>
                    </p>
                  </div>

                  <div className="post-entry mb-4">
                    <h2>
                      <a href="single.html">
                        Consectetur adipisicing elit veritatis culpa
                      </a>
                    </h2>
                    <p className="text-muted text-uppercase small">
                      <span className="mr-2">January 18, 2019</span> by{" "}
                      <a href="single.html" className="by">
                        James Cooper
                      </a>
                    </p>
                  </div>

                  <div className="post-entry mb-4">
                    <h2>
                      <a href="single.html">
                        Consectetur adipisicing elit veritatis culpa
                      </a>
                    </h2>
                    <p className="text-muted text-uppercase small">
                      <span className="mr-2">January 18, 2019</span> by{" "}
                      <a href="single.html" className="by">
                        James Cooper
                      </a>
                    </p>
                  </div>

                  <div className="post-entry mb-4">
                    <h2>
                      <a href="single.html">
                        Consectetur adipisicing elit veritatis culpa
                      </a>
                    </h2>
                    <p className="text-muted text-uppercase small">
                      <span className="mr-2">January 18, 2019</span> by{" "}
                      <a href="single.html" className="by">
                        James Cooper
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section bg-light" id="contact-section">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center mb-5">
                  <div className="block-heading-1">
                    <span>Get In Touch</span>
                    <h2>Contact Us</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-5">
                  <form action="#" method="post">
                    <div className="form-group row">
                      <div className="col-md-6 mb-4 mb-lg-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email address"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <textarea
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Write your message."
                          cols="30"
                          rows="10"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-md-6 ml-auto">
                        <input
                          type="submit"
                          className="btn btn-block btn-primary text-white py-3 px-5"
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4 ml-auto">
                  <h2 className="text-black">Need a call for presentation?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores, distinctio! Harum quibusdam nisi, illum nulla
                    aspernatur <a href="#">voluptas nam praesentium</a> aut
                    quidem aperiam, quae non tempora recusandae voluptatibus
                    fugit impedit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-5">
                      <h2 className="footer-heading mb-4">About Us</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque facere laudantium magnam voluptatum autem. Amet
                        aliquid nesciunt veritatis aliquam.
                      </p>
                    </div>
                    <div className="col-md-3 ml-auto">
                      <h2 className="footer-heading mb-4">Features</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3" />
                  </div>
                </div>
                <div className="col-md-4 ml-auto">
                  <div className="mb-5">
                    <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
                    <form>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control border-secondary text-white bg-transparent"
                          placeholder="Enter Email"
                          aria-label="Enter Email"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary text-white"
                            type="button"
                            id="button-addon2"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                      <h2 className="footer-heading mb-4">Follow Us</h2>
                      <a href="#about-section" className="smoothscroll pl-0 pr-3">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-instagram" />
                      </a>
                      <a href="#" className="pl-3 pr-3">
                        <span className="icon-linkedin" />
                      </a>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <div className="border-top pt-5">
                    <p>
                      Link back to Colorlib can't be removed. Template is
                      licensed under CC BY 3.0. --> Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      All rights reserved | This template is made with{" "}
                      <i className="icon-heart" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                      Link back to Colorlib can't be removed. Template is
                      licensed under CC BY 3.0. -->
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
