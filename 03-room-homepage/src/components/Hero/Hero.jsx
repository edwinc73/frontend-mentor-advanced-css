import img1 from "../../assets/images/desktop-image-hero-1.jpg";
import img2 from "../../assets/images/desktop-image-hero-2.jpg";
import img3 from "../../assets/images/desktop-image-hero-3.jpg";

import mobileImg1 from "../../assets/images/mobile-image-hero-1.jpg";
import mobileImg2 from "../../assets/images/mobile-image-hero-2.jpg";
import mobileImg3 from "../../assets/images/mobile-image-hero-3.jpg";

export default function Hero() {
  return (
    <section id="hero" className="">
      <div className="image-gallery z-2">
        <img className="w-full" src={img1} alt="" />
        <div className="text underline">hello</div>
      </div>
    </section>
  );
}
