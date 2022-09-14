import React, {useState, useEffect} from 'react';
import './carousel.css';
import { gsap } from 'gsap';

const itemList = [
  {
    img: "../img/carousel/turq.webp",
    category: "Architecture",
    title: "Modern Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    bgColor: "#fff",
  },
  {
    img: "../img/carousel/red.webp",
    category: "Supercars",
    title: "Ferrari LaFerrari",
    desc: "Consectetur adipisicing elit. Dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    bgColor: "#FFD4D8",
  },
  {
    img: "../img/carousel/yellow.webp",
    category: "Mobile",
    title: "Custom iPhone ",
    desc: "Dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
    bgColor: "#F0E2A2",
  },
  {
    img: "../img/carousel/green.webp",
    category: "Nature",
    title: "Green Adventure",
    desc: "Adipisicingorem dolor sit lor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum amet consectetur adipisicing elit.",
    bgColor: "#CCEDD5",
  },
  {
    img: "../img/carousel/purple.webp",
    category: "Cuisine",
    title: "Berry Bars",
    desc: "Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum...",
    bgColor: "#FED6ED",
  },
];

export function Carousel() {
  const timeLine = gsap.timeline();
  const [active, setActive] = useState(0);
  const items = itemList;
  
  useEffect(() => {
    const dir = 0.8;
    const delay = 0.3;

    timeLine.to(".slider", {
      delay,
      duration: 0.2,
      backgroundColor: `${items[active].bgColor}`,
    });
    timeLine.fromTo(
      ".slider__img",
      {
        x: 150 * dir,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    timeLine.fromTo(
      ".slider__context *",
      {
        x: 50 * dir,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
      },
      "<"
    );
    
    return () => {
      timeLine.kill()
    };
  }, [active, items]);

  const { img, category, title, desc } = items[active];
  const handleClick = (e)=> {
    const type = e.target.getAttribute('data-type');
    const dir = type === "next" ? 1 : -1;
    
    timeLine.to(
      ".slider__img", {
      x: -250 * dir,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",

      onComplete: () => {
        if (type === "next") {
          const actOne = active === items.length - 1 ? 0 : active + 1;
          setActive(actOne);
        } else {
          const actTwo = active <= 0 ? items.length - 1 : active - 1;
          setActive(actTwo);
        }
      },
    });

    timeLine.to(
      " .slider__context *",
      {
        x: -100 * dir,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.inOut",
      },
      "<"
    );
  } 


  return (
    <div className='main-container'>
      <div className="slider">
        <div className="inner-container">
          <img src="../img/bg-pattern01.webp" alt="Gallery 04" className="bg-img" />
          <div className="slider__wrapper flex-column">
            <div className="flex-column slider__content">
              <div className="img-container">
                <img className="slider__img" src={img} alt={title} />
                 <div className="flex-center">
                  <button
                    onClick={handleClick}
                    data-type="prev"
                    className="slider__btn-switch slider__btn-switch--dark flex-center"></button>
                  <button
                    onClick={handleClick}
                    data-type="next"
                    className="slider__btn-switch slider__btn-switch--light flex-center"></button>
                </div>
              </div>
              <div className="slider__context flex-column">
                <h3 className="slider__category">{category}</h3>
                <strong className="slider__title">{title}</strong>
                <small className="slider__price">{desc}</small>
              </div>
              <div className="slider__index">
                <span>{
                  active < 10 ? "0" + (active + 1) : active + 1
                }</span>
                <span>{
                  items.length < 10 ? "0" + items.length : items.length
                }</span>
              </div>
            </div>
            <div className="slider__footer">
              <div className="slider__btns justify-between">
                {/* <span className="slider__btn-buy000"></span> */}

                {/* <div className="flex-center">
                  <button
                    onClick={handleClick}
                    data-type="prev"
                    className="slider__btn-switch slider__btn-switch--dark flex-center"></button>
                  <button
                    onClick={handleClick}
                    data-type="next"
                    className="slider__btn-switch slider__btn-switch--light flex-center"></button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


