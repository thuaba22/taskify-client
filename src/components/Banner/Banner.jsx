import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content w-[90%] mx-auto flex-col lg:flex-row-reverse">
        <img
          className="lg:w-[100%]"
          src="https://i.postimg.cc/d1qd9609/girlImg.png"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Empower Your Productivity
            <br />
            with Taskify
          </h1>
          <p className="py-6">
            Welcome to Taskify, your all-in-one task management solution.
            Whether you&#39;re a professional, developer, or anyone seeking
            efficient task organization, Taskify provides a seamless and
            collaborative platform. Create, manage, and complete tasks
            effortlessly. Elevate your productivity to new heights with
            Taskify&#39;s intuitive features. Join us and experience a smarter
            way to handle your tasks. Let&#39;s turn your to-do list into a done
            list!
          </p>
          <Link
            to="/dashboard"
            className="btn text-white bg-[#5F33E1] hover:bg-[#5F33E1]"
          >
            Let&#39;s Explore <FaArrowRightToBracket />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
