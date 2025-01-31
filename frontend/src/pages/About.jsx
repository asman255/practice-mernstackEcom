import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            expedita voluptate quod dolore pariatur consectetur nemo inventore
            quasi ipsa corrupti molestias quam cumque hic ipsum reiciendis in
            fugiat, minus non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            incidunt similique accusamus libero dolore. Voluptatibus sequi
            quidem tempora doloremque repudiandae laudantium ab recusandae
            ipsum, alias quaerat, praesentium nihil iusto ut?
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius autem
            consequuntur nisi exercitationem reprehenderit sit molestiae
            deleniti inventore aperiam veritatis quidem, ipsum debitis at,
            accusamus illum repellendus ex odio quod.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quantity Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
            id illum voluptates veritatis, officia omnis laborum maiores ab
            blanditiis quam adipisci soluta, consequatur molestiae atque
            possimus repellat, repudiandae facilis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
            id illum voluptates veritatis, officia omnis laborum maiores ab
            blanditiis quam adipisci soluta, consequatur molestiae atque
            possimus repellat, repudiandae facilis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat
            id illum voluptates veritatis, officia omnis laborum maiores ab
            blanditiis quam adipisci soluta, consequatur molestiae atque
            possimus repellat, repudiandae facilis.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
