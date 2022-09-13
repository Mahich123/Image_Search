import React, {useState, useEffect, useRef} from 'react';
import './carousel2.css';
import { gsap } from 'gsap';

const itemList = [
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
  {
    img: "../img/10.webp",
    category: "Image Search",
    title: "Sam Takahashi",
    price: "¥10,000",
    bgColor: "#748F99",
  },
];

export function Carousel2() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const timeLine = gsap.timeline();
  const [active, setActive] = useState(0);
  const [sliCon, setSliCon] = useState();
  const [sliIdx, setSliIdx] = useState();
  const items = itemList;
  
  useEffect(() => {
    const dir = 0.5;
    const delay = 0.5;

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

    setSliCon(SliCont);
    setSliIdx(SliIndex);

    return () => {
      timeLine.kill()
    };
  }, [active, items]);

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

  const handleClick = (e)=> {
    const type = e.target.getAttribute('data-type');
    const dir = type === "next" ? 1 : -1;
    
    timeLine.to(
      q(".slider__img"), {
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
      q(" .slider__context *"),
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
    <div ref={el}  className="slider">
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


