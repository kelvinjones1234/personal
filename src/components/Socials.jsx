import facebook from "../assets/images/facebook.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";

const Socials = ({icon, social}) => (
  <section className="top-[7em] md:top-2 lg:top-3 md:p-0">
      <div className={`${social}`}>
        <div className={`${icon}`}>
          <img src={facebook} alt="facebook" className="h-[1.5em]" />
        </div>
        <div className={`${icon}`}>
          <img src={twitter} alt="twitter" className="h-[1.5em]" />
        </div>
        <div className={`${icon}`}>
          <img src={instagram} alt="instagram" className="h-[1.5em]" />
        </div>
        <div className={`${icon}`}>
          <img src={whatsapp} alt="whatsapp" className="h-[1.5em]" />
        </div>
      </div>
  </section>
);

export default Socials;
