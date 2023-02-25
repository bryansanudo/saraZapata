import React from "react";
import servicesVideo from "@/assets/services.mp4";
import PageSection from "@/components/PageSection";

const Services = () => {
  return (
    <PageSection
      name="servicios"
      title="¡Hola soy Sara Zapata "
      subtitle={`Si estás buscando una forma efectiva de promocionar tu marca y llegar a una audiencia más amplia, entonces te recomiendo que consideres contratar mis servicios.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            Tu contenido no se perderá en el tiempo y estará disponible a un
            solo clic en mis redes sociales.
          </p>
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            Te gestiono al 100% una página web personalizada con tu marca +
            Hosting en la nube y todo conectado con Instagram , WhatsApp o lo
            que necesites.
          </p>
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            Tengo una gran cantidad de seguidores que son altamente
            comprometidos y activos.
          </p>
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            Mi contenido se centra en temáticas que aumentaran la visibilidad de
            tu marca.
          </p>
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            Soporte técnico lunes a sábado 8:00 am - 10:00 pm
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <a
            href="https://www.instagram.com/p/CogCoiuuub4/"
            target="_blank"
            rel="noreferrer"
          >
            <video
              src={servicesVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
              playsInline
              className="rounded-lg shadow-xl shadow-thPrimary h-[400px] lg:h-[500px]"
            ></video>
          </a>
        </div>
      </div>
    </PageSection>
  );
};

export default Services;
