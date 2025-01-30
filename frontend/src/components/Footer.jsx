import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-grey-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            reiciendis quae ea, sed quo sit nihil quibusdam maiores fugit
            adipisci inventore omnis nam quam ullam ipsum harum molestiae?
            Harum, commodi?
          </p>
        </div>

        <div>
          <p className="text-xl font-mediu, mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-grey-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-grey-600">
            <li>Phone Number +111111111</li>
            <li>a@a.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="py-5 text-sm text-center">Copyright 2025@forever.com. All Right Reserved.</p>
    </div>
  );
};

export default Footer;
