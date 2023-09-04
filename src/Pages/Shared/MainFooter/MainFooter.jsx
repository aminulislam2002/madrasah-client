import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-900 text-white ">
        <div>
          <img className="w-20 h-20" src="" alt="" />
          <p>
            Name of Madrasah
            <br />
            Details of Madrasah
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link>
            <MdOutlineFacebook className="w-10 h-10"></MdOutlineFacebook>
          </Link>
          <Link>
            <AiFillTwitterCircle className="w-10 h-10"></AiFillTwitterCircle>
          </Link>
          <Link>
            <AiFillInstagram className="w-10 h-10"></AiFillInstagram>
          </Link>
          <Link>
            <AiFillYoutube className="w-10 h-10"></AiFillYoutube>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
