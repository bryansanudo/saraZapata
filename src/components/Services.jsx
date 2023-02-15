import React from "react";
import servicesVideo from "@/assets/services.mp4";
import PageSection from "@/components/PageSection";

const Services = () => {
  return (
    <PageSection
      name="servicios"
      title="¿Que te ofrezco?"
      subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae consectetur neque odit rem ipsum labore voluptate aliquid aspernatur. Eum accusantium nostrum perferendis molestiae blanditiis mollitia nam quo aperiam modi.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            t amet consectetur adipisicing elit. Eveniet beatae consectetur
            neque odit rem ipsum labore voluptate aliquid aspernatur. Eum accu
          </p>
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            t amet consectetur adipisicing elit. Eveniet beatae consectetur
            neque odit rem ipsum labore voluptate aliquid aspernatur. Eum accu
          </p>
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            t amet consectetur adipisicing elit. Eveniet beatae consectetur
            neque odit rem ipsum labore voluptate aliquid aspernatur. Eum accu
          </p>
          <p className="border-l-4 pl-4 odd:border-thPrimary even:border-thSecondary">
            t amet consectetur adipisicing elit. Eveniet beatae consectetur
            neque odit rem ipsum labore voluptate aliquid aspernatur. Eum accu
          </p>
          <a href="">
            <button></button>
          </a>
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
