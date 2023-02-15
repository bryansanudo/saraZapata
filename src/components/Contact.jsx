import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import PageSection from "@/components/PageSection";
import contact from "@/assets/contact.jpg";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <PageSection name="contacto" title="Contacto">
      <div className="flex flex-col lg:flex-row items-center  md:gap-20 gap-4">
        <div className="md:w-1/2 lg:w-1/2 h-full rounded-xl ">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center content-center flex-col  ">
          <img
            src={contact}
            className="object-cover duration-300 w-[350px] h-[300px] md:w-[500px] md:h-[420px] shadow-md shadow-thPrimary rounded-lg"
          />

          <div className="w-[200px] sm:w-[350px]  md:w-[500px]  mt-10 group flex items-center justify-center gap-6 rounded-lg shadow-lg shadow-thPrimary  p-3  ">
            <a
              href="https://www.instagram.com/sarazapata144/"
              target="_blank"
              rel="noreferrer"
              className="group-hover:scale-105 duration-200"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="https://www.facebook.com/sara.zapataarias.5"
              target="_blank"
              rel="noreferrer"
              className="group-hover:scale-105 duration-200"
            >
              <FaFacebook size={40} />
            </a>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
