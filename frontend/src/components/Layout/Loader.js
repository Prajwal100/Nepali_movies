import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-inner">
        <ThreeDots width="100" color="#032541" strokeWidth="1" />
      </div>
    </div>
  );
};

export default Loader;
