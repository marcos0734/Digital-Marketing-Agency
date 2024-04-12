import React from "react";
import Slider from "react-slick";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-mail-line",
    title: "Email Marketing",
    desc: "Boost conversation by engaging your subscribers through personalized Email marketing.",
  },

  {
    icon: "ri-search-eye-line",
    title: "Search Advertising",
    desc: "Appear at the top through targeted search advertising compaigns.",
  },

  {
    icon: "ri-message-2-line",
    title: "SMS Marketing",
    desc: "Boost customer engagement and generate high ROI through effective SMS marketing.",
  },

  {
    icon: "ri-smartphone-line",
    title: "Mobile Marketing",
    desc: "Connect with customer on the go with mobile Marketing.Drive sales and boost ROI.",
  },

  {
    icon: "ri-webhook-line",
    title: "Affiliate Marketing",
    desc: "Extend your reach among the targeted audience and drive sales through trust.",
  },

  {
    icon: "ri-computer-line",
    title: "Display Marketing",
    desc: "Current customers attention through visually appealing ads based on their browsing behavior.",
  },

  {
    icon: "ri-meta-line",
    title: "Social Media",
    desc: "Leverage the power of social media marketing to increase sales and drive website traffic.",
  },

  {
    icon: "ri-pages-line",
    title: "Native Advertising",
    desc: "Generate high engagement rates,increase sales, and build trust with Native Advertising.",
  },

  {
    icon: "ri-video-on-line",
    title: "Video Advertising",
    desc: "Strategic video advertising for impactful brand storytelling and audience engagement.",
  },
];

const Services = () => {
  
  //----Carousel setting

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business</h2>
          <h2 className="highlight">with our best services</h2>
        </div>

        {/* react Carousel */}

        <div className="service__item-wrapper">
        <Slider {...settings}>
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </Slider>
       
        </div>
        
      </div>
        <button className="more__services">Learn More</button>
    </section>
  );
};

export default Services;
