import React from "react";

const ContactForm = () => {
  return (
    <div className="p-4 text-left m-12 mx-auto">
      <form action="" mthod="POST">
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">Nombre</label>
            <input
              type="text"
              name="name"
              className="border-2 text-gray-900 rounded-lg p-2 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">
              Telefono
            </label>
            <input
              type="text"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-2 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-light">Correo</label>
            <input
              type="email"
              name="email"
              className="border-2 text-gray-900 rounded-lg p-2 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 ">
            <label className="capitalize text-sm py-2 font-light">
              Mensaje
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-2 flex focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center hover:scale-105 duration-200 ">
          <button className=" rounded-lg shadow-lg shadow-thPrimary p-4 mt-5 w-40">
            enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
