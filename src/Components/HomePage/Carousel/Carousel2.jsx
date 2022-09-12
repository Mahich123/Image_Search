import React, {useState, useEffect} from 'react';
import './carousel2.css';
import { gsap } from 'gsap';

const itemz = [
  {
    img: "https://wise-step.surge.sh/assets/media/imgs/1.png",
    category: "electrics",
    title: "high bayz",
    price: "£100",
    bgColor: "#ffe474",
  },
  {
    img: "https://wise-step.surge.sh/assets/media/imgs/2.png",
    category: "classic",
    title: "insignia purch",
    price: "£300",
    bgColor: "#d2e2d7",
  },
  {
    img: "https://wise-step.surge.sh/assets/media/imgs/3.png",
    category: "living",
    title: "bison welder",
    price: "£420",
    bgColor: "#f3c3be",
  },
  {
    img: "https://wise-step.surge.sh/assets/media/imgs/4.png",
    category: "watch",
    title: "schemiet watch",
    price: "£267",
    bgColor: "#dedede",
  },
];

export function Carousel2() {
  const timeLine = gsap.timeline();
  const [active, setActive] = useState(0);
  const items = itemz;
  
  const basicAimation = (dir, delay) => {
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
  }
  basicAimation(0.5, 0.5);

  const [sliCon, setSliCon] = useState();
  const [sliIdx, setSliIdx] = useState();

  useEffect(() => {
    const { img, category, title, price } = items[active];

  function SliCont() {
    return (
      <>
        <img className="slider__img" src={img} alt={title} />
        <div className="slider__context flex-column">
          <h3 className="slider__category">{category}</h3>
          <strong className="slider__title">{title}</strong>
          <small className="slider__price">{price}</small>
        </div>
      </>
    );
    }
    function SliIndex() {
      return (
        <>
          <span>{
            active < 10 ? "0" + (active + 1) : active + 1
          }</span>
          <span>{
            items.length < 10 ? "0" + items.length : items.length
          }</span>
        </>
      );
    }

    setSliCon(SliCont);
    setSliIdx(SliIndex);
  }, [active, items]);

  const handleClick = (e)=> {
    const type = e.target.getAttribute('data-type');
    const dir = type === "next" ? 1 : -1;
    
    timeLine.to(".slider__img", {
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

      // basicAimation(dir);
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
    <div className="slider">
      <div className="inner-container">
        <div className="slider__wrraper flex-column">
        <div className="flex-column slider__content">{sliCon}</div>
          <div className="slider__footer">
            <div className="slider__btns justify-between">
              <button className="slider__btn-buy">buy</button>
              <div className="flex-center">
                <button
                  onClick={handleClick}
                  data-type="prev"
                  className="slider__btn-switch slider__btn-switch--dark flex-center"
                ></button>
                <button
                  onClick={handleClick}
                  data-type="next"
                  className="slider__btn-switch slider__btn-switch--light flex-center"
                ></button>
              </div>
            </div>
            <div className="slider__index">{sliIdx}</div>
          </div>
        </div>
      </div>
    </div>
  )
}


