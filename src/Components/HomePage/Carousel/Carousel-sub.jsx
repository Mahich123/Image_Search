import React, {useState , useRef, useEffect} from 'react';
import './carousel.css';
import { gsap } from 'gsap';

const slides = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    // image: `${require("../img/1.webp")}`,
    image: "../img/1.webp",
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    // image: `${require("../2.webp")}`,
    image: "../img/2.webp",
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    // image: `${require("././3.webp")}`,
    image: "../img/3.webp",
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];


export const Carousel = () => {

    const renderItem = () => {
    const { img, category, title, price } = this.items[this.active];

    const sliderContent = `
      <img class="slider__img" src="${img}" alt="${title}" />
      <div class="slider__context flex-column">
        <h3 class="slider__category">${category}</h3>
        <strong class="slider__title">${title}</strong>
        <small class="slider__price">${price}</small>
      </div>
    `;
    const sliderIndex = `
      <span>${
        this.active < 10 ? "0" + (this.active + 1) : this.active + 1
      }</span>
      <span>${
        this.items.length < 10 ? "0" + this.items.length : this.items.length
      }</span>
    `;

    document.querySelector(".slider__content").innerHTML = sliderContent;
    document.querySelector(".slider__index").innerHTML = sliderIndex;
  }


  let imageList = useRef(null);
  let descList = useRef(null);

  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });

  useEffect(() => {
    // console.log(imageList.children[0])
    gsap.to(descList.children[0], {
      duration: 0,
      opacity: 1,
    });
  }, []);

  const slideLeft = (index, dur, multiplied = 1) => {
    gsap.to(imageList.children[index], {
      x: -imageWidth * multiplied,
      duration: dur,
      ease: "power2.inOut",
      // ease: "power3.easeOut",
    })
  }

  const slideRight = (index, dur, multiplied = 1) => {
    gsap.to(imageList.children[index], {
      x: imageWidth * multiplied,
      duration: dur,
      ease: "power2.inOut",
      // ease: "power3.easeOut",
    })
  }

  const scale = (index, dur) => {
    gsap.from(imageList.children[index], {
      duration: dur,
      scale: 1.6,
      ease: "power2.inOut",
      // opacity:0
      // ease: "power3.easeOut",
    })
  }

  const fadeOut = (index, dur) => {
    gsap.to(descList.children[index], {
        duration: dur,
        y: -100,
        opacity: 0,
        clearProps: "y"
      });
  }

  const fadeIn = (index, dur) => {
    gsap.to(descList.children[index], {
        duration: dur,
        opacity: 1,
        delay: 1
      });
  }

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive2: true,
      })

      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1.5);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
      gsap.to(imageList.children[0], {
        scale: 1.5,
        duration: 1,
        clearProps: "scale",
      })
    } else if (imageList.children[1].classList.contains("active")) {
      setState({
        isActive2: false,
        isActive3: true,
      })
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1.5);
      fadeOut(1, 1);
      fadeIn(2, 1);

    } else if (imageList.children[2].classList.contains("active")) {
      setState({
        isActive3: false,
        isActive1: true,
      })
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(1, 1.6);
      fadeOut(2, 1);
      fadeIn(0, 1);
      gsap.from(imageList.children[0], {
        scale: 2.5,
        duration: 1,
      })
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive3: true,
      })
      
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);

      fadeOut(0, 1);
      fadeIn(2, 1);

    } else if (imageList.children[1].classList.contains("active")) {
      setState({
        isActive2: false,
        isActive1: true,
      })
     
    } else if (imageList.children[2].classList.contains("active")) {
      setState({
        isActive3: false,
        isActive2: true,
      })
     
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            <img src="../svg/left-arrow.svg" alt="left arrow" />
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={el => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={slides[0].image} alt={slides[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={slides[1].image} alt={slides[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={slides[2].image} alt={slides[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={el => (descList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{slides[0].quote}</p>
                  <h3 className="name">{slides[0].name}</h3>
                  <h4 className="title">{slides[0].title}</h4>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{slides[1].quote}</p>
                  <h3 className="name">{slides[1].name}</h3>
                  <h4 className="title">{slides[1].title}</h4>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{slides[2].quote}</p>
                  <h3 className="name">{slides[2].name}</h3>
                  <h4 className="title">{slides[2].title}</h4>
                </div>
              </li>
            </ul>

          {/* <ul>
  //           {slides.map((idx) => (
  //             <li key={idx.image}>
  //             <div className="content-inner">
  //               <p className="quote">{ idx.quote}</p>
  //               <h3 className="name">{ idx.name}</h3>
  //               <h4 className="title">{ idx.title}</h4>
  //             </div>
  //           </li>
  //           ))}
  //         </ul> */}
            
          </div>
        </div>
        <div className="arrows right" onClick={nextSlide}>
          <img src="../svg/right-arrow.svg" alt="right arrow" />
        </div>
      </div>
    </div>
  );
}
