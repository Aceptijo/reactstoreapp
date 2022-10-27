import React, { useState } from 'react';
import styles from './Slider.module.scss';

const Slider = () => {
   const slides = [
      { url: 'http://localhost:3000/Image-0.jpg' },
      { url: 'http://localhost:3000/Image-1.jpg' },
      { url: 'http://localhost:3000/Image-2.jpg' },
      { url: 'http://localhost:3000/Image-3.jpg' },
      { url: 'http://localhost:3000/Image-4.jpg' },
      { url: 'http://localhost:3000/Image-5.jpg' },
      { url: 'http://localhost:3000/Image-6.jpg' },
      { url: 'http://localhost:3000/Image-7.jpg' },
      { url: 'http://localhost:3000/Image-8.jpg' },
      { url: 'http://localhost:3000/Image-9.jpg' },
      { url: 'http://localhost:3000/Image-10.jpg' },
      { url: 'http://localhost:3000/Image-11.jpg' },
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
         <div
            className={styles.slide}
            style={{
               backgroundImage: `url(http://localhost:3000/Image-${currentIndex}.jpg)`,
            }}
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
