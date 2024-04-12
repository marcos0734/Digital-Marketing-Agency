import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about-us2.jpg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, beatae? Quisquam ratione minus necessitatibus, quidem autem voluptatem in quod delectu",
  },

  {
    icon: "ri-team-line",
    title: "Dedication team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, beatae? Quisquam ratione minus necessitatibus, quidem autem voluptatem in quod delectu",
  },

  {
    icon: "ri-customer-service-line",
    title: "24/7 Hours support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, beatae? Quisquam ratione minus necessitatibus, quidem autem voluptatem in quod delectu",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__top-content">
          <h6 className="subtitle">Why choose us</h6>
          <h2>Specialist in aviding clients on</h2>
          <h2 className="highlight">financial challenges</h2>
          <p className="description about__content-desc">
          Welcome to [Agency Name], where we turn digital dreams into real-world success stories. With creativity, expertise, and a touch of magic, we craft strategies that spark conversations, drive results, and elevate your brand to new heights. Let's make your digital dreams a reality together.
          </p>
        </div>

        <div className="about__wrapper">
          <div className="about__content">
            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
