import Lottie from "react-lottie";
import animationData from "../../assets/lottie/github.json";

export function GithubAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div style={{ paddingTop: 40 }}>
      <Lottie options={defaultOptions} width="20%" />
    </div>
  );
}
