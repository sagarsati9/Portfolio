import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlineAlternateEmail, MdLocationOn } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <div className="contact_card">
          <h2>Get in Touch</h2>
          <br />
          <div className="contact_card_detail">
            <BsFillTelephoneFill className="contact_card_icon"/>
            <a className="no_decoration" href="tel:+917017155961">
              <h3>+917017155961</h3>
            </a>
          </div>
          <br />
          <div className="contact_card_detail">
            <MdEmail className="contact_card_icon"/>
            <a className="no_decoration" href="mailto:sagarsati9@gmail.com">  
              <h3>sagarsati9@gmail.com</h3>
            </a>
          </div>
          <br />
          <div className="contact_card_detail">
            <MdLocationOn className="contact_card_icon"/>
            <a className="no_decoration" href="https://www.google.com/search?q=nainital+map&rlz=1C1NDCM_enIN970IN971&oq=nainital+map&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIQCAcQLhivARjHARiABBiYBTIHCAgQABiABDIHCAkQLhiABNIBCDM4OTdqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8"  target="_blank" rel="noreferrer">
              <h3>Nainital, India</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
