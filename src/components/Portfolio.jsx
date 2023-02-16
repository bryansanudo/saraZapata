import React from "react";
import PageSection from "@/components/PageSection";

import portfolio1 from "@/assets/portfolio/portfolio1.jpg";
import portfolio2 from "@/assets/portfolio/portfolio2.jpg";
import portfolio3 from "@/assets/portfolio/portfolio3.jpg";
import portfolio4 from "@/assets/portfolio/portfolio4.jpg";
import portfolio5 from "@/assets/portfolio/portfolio5.jpg";
import portfolio6 from "@/assets/portfolio/portfolio6.jpg";
import portfolio7 from "@/assets/portfolio/portfolio7.jpg";
import portfolio8 from "@/assets/portfolio/portfolio8.jpg";
import portfolio9 from "@/assets/portfolio/portfolio9.jpg";
import portfolio10 from "@/assets/portfolio/portfolio10.jpg";
import portfolio11 from "@/assets/portfolio/portfolio11.jpg";
import portfolio12 from "@/assets/portfolio/portfolio12.jpg";
import portfolio13 from "@/assets/portfolio/portfolio13.jpg";
import portfolio14 from "@/assets/portfolio/portfolio14.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 2,
      src: portfolio2,
      category: "Outfit",
      code: "https://www.instagram.com/p/ClsElGMuX_b/",
      brand: "@curvi.models23",
    },
    {
      id: 1,
      src: portfolio1,
      category: "Conjunto Deportivo",
      code: "https://www.instagram.com/p/CoYIj3OOes5/",
      brand: "@deportfitoficial",
    },
    {
      id: 3,
      src: portfolio3,
      category: "Buso",
      code: "https://www.instagram.com/p/CmSY98cOJ_n/",
      brand: "@lalaclothes2",
    },
    {
      id: 4,
      src: portfolio4,
      category: "Fotografia",
      code: "https://www.instagram.com/p/ClOduEuO_qr/",
      brand: "@not_freelancephotography",
    },
    {
      id: 5,
      src: portfolio5,
      category: "Gafas",
      code: "https://www.instagram.com/p/Ch-5JCbuxO5/",
      brand: "@adler.oficial",
    },
    {
      id: 6,
      src: portfolio6,
      category: "Outfit",
      code: "https://www.instagram.com/p/CjvaMkWsZlv/",
      brand: "@amatista08boutique",
    },
    {
      id: 7,
      src: portfolio7,
      category: "Maquillaje",
      code: "https://www.instagram.com/p/CkOIGXoOWhC/",
      brand: "@doratamakeup",
    },
    {
      id: 8,
      src: portfolio8,
      category: "Look",
      code: "https://www.instagram.com/p/Chnsc2GlLWe/",
      brand: "@pieddyloperapeinados",
    },
    {
      id: 9,
      src: portfolio9,
      category: "Turismo",
      code: "https://www.instagram.com/p/ClHt-x3st_1/",
      brand: "@cabana_montes",
    },
    {
      id: 10,
      src: portfolio10,
      category: "conjunto Deportivo",
      code: "https://www.instagram.com/p/Ck3MyKluNkt/",
      brand: "@sportmgl",
    },
    {
      id: 11,
      src: portfolio11,
      category: "Sandalias",
      code: "https://www.instagram.com/p/CkEfoIauril/",
      brand: "@tatis_posada",
    },

    {
      id: 12,
      src: portfolio12,
      category: "Bronceado con Aerógrafo",
      code: "https://www.instagram.com/p/CnmgntjtRoI/",
      brand: "@rostroideall",
    },
    {
      id: 13,
      src: portfolio13,
      category: "Diseño de Sonrisa",
      code: "https://www.instagram.com/p/Ci8ogLCrCUz/",
      brand: "@odontologiajcrestrepo",
    },
    {
      id: 14,
      src: portfolio14,
      category: "outfit",
      code: "https://www.instagram.com/p/ChqJvlKFkZt/",
      brand: "@bendita_shophe",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="portafolio"
      subtitle={`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Dignissimos sunt enim eum possimus, culpa veritatis hic aspernatur
    numquam ducimus exercitationem fuga nemo consequatur odit
    laudantium voluptate facilis veniam perferendis pariatur?`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thPrimary duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Portfolio;
