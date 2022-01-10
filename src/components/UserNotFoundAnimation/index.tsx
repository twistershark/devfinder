import Lottie from "react-lottie";
import animationData from "../../assets/lottie/error.json";

export function UserNotFoundAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div>
      <Lottie options={defaultOptions} width="60%" />
    </div>
  );
}
