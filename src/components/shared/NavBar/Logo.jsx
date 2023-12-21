import { SiTask } from "react-icons/si";

const Logo = () => {
  return (
    <div>
      <h2 className="text-3xl flex items-center font-bold">
        <SiTask />
        Task<span className="text-[#5F33E1]">ify</span>
      </h2>
    </div>
  );
};

export default Logo;
