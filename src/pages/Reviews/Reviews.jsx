import NavBar from "../../components/shared/NavBar/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import reviews from "./Reviews.json";
import Footer from "../../components/shared/Footer/Footer";

const Reviews = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content w-[90%] mx-auto flex-col lg:flex-row-reverse">
          <img
            className="lg:w-[100%]"
            src="https://i.postimg.cc/yd9VhcZj/users.png"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Discover What Our
              <br />
              Users Are Saying
            </h1>
            <p className="py-6">
              Explore the experiences of Taskify users as they share their
              thoughts and insights. Read reviews from developers, corporate
              professionals, students, and more. Find out how Taskify has made a
              positive impact on their productivity and task management. Join
              the community of satisfied users and enhance your task
              organization with Taskify!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F0FF]">
        <div className="text-center py-8  w-[90%] mx-auto text-md font-semibold">
          <h2 className="text-3xl mt-8">Reviews</h2>
          {reviews?.length > 0 ? (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center mx-24 mb-8">
                    <p className="py-3">{review.name}</p>
                    <h3 className="text-2xl">{review.review}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Reviews;
