import React, { useState } from 'react';
import styles from './Slider.module.scss';

const Slider = () => {
   const slides = [
      { url: 'http://localhost:3000/Image-0.jpg', title: 'cat' },
      { url: 'http://localhost:3000/Image-1.jpg', title: 'cat' },
      { url: 'http://localhost:3000/Image-2.jpg', title: 'cat' },
      { url: 'http://localhost:3000/Image-3.jpg', title: 'cat' },
      { url: 'http://localhost:3000/Image-4.jpg', title: 'cat' },
      { url: 'http://localhost:3000/Image-5.jpg', title: 'cat' },
      { url: 'http://localhost:3000/Image-6.jpg', title: 'dog' },
      { url: 'http://localhost:3000/Image-7.jpg', title: 'dog' },
      { url: 'http://localhost:3000/Image-8.jpg', title: 'dog' },
      { url: 'http://localhost:3000/Image-9.jpg', title: 'dog' },
      { url: 'http://localhost:3000/Image-10.jpg', title: 'dog' },
      { url: 'http://localhost:3000/Image-11.jpg', title: 'dog' },
   ];

   let [currentIndex, setCurrentIndex] = useState(0);

   const goToPrevious = () => {
      const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
   };
   const goToNext = () => {
      const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
   };

   const goToSlide = (slideIndex: any) => {
      setCurrentIndex(slideIndex);
   };

   return (
      <div className={styles.slider}>
         <div>
            <div className={styles.previousArrow} onClick={goToPrevious}>
               ❰
            </div>
            <div className={styles.nextArrow} onClick={goToNext}>
               ❱
            </div>
         </div>
         <img
            className={styles.slide}
            src={`http://localhost:3000/Image-${currentIndex}.jpg`}
            alt="Slider"
         />
         <div className={styles.dots}>
            {slides.map((slide, slideIndex) =>
               currentIndex === slideIndex ? (
                  <div
                     className={styles.dot_active}
                     key={slideIndex}
                     onClick={() => goToSlide(slideIndex)}
                  >
                     ●
                  </div>
               ) : (
                  <div
                     className={styles.dot}
                     key={slideIndex}
                     onClick={() => goToSlide(slideIndex)}
                  >
                     ●
                  </div>
               )
            )}
         </div>
      </div>
   );
};

export default Slider;
