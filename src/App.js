import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination} from "swiper";
import "swiper/swiper-bundle.css";
import "./App.css"

SwiperCore.use([Navigation, Pagination]);

function App() {
  const slide = [];

  for (let i = 0; i < 5; i += 1){
    slide.push(
      <SwiperSlide key={`slide=${i}`} tag="div">
        <img 
          src={`https://picsum.photos/id/${i+1}/500/300`} alt = {`Slide ${i}`}
          style={{ listStyle: "none" }}
        />
      </SwiperSlide>
    )
  }
  return (
    <>
      <Swiper 
        tag="div" 
        wrapperTag="div" 
        id="main" 
        navigation 
        pagination 
        spaceBetween={0} 
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized", swiper)}
        onSlideChange={(swiper) => {console.log("slide index change to : ", swiper.activeIndex)}}
        onReachEnd={()=>console.log("swiper end reached")}
      >
        {slide}
      </Swiper>
      {/* https://www.youtube.com/watch?v=l4kFO6VQPfA&feature=emb_logo 9:40~  */}
    </>
  );
}

export default App;
