import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/lottie/Loaderv2.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <div className="w-40 h-40">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
