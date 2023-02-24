import React from "react";

import Service from "../Components/Service";

const services = [
  {
    service: "Interior Painting",
    serviceDetails:
      "Promax Painting can transform the ambiance of your living space by painting the interior of your home with bright colors for a vibrant atmosphere or muted tones for a sense of unity. They recommend painting kitchen cabinets professionally and specialize in detailed finishing work at a reasonable price.",
    img: "/assets/interiorpainting.png",
    alt: "lounge",
    reverse: false,
  },
  {
    service: "Exterior Painting",
    serviceDetails:
      "Promax Painting is the solution for exterior wall painting, adding value and a fresh look to homes in Oregon. They are well-prepared, inspecting, filling, cleaning, and spray-painting for a long-lasting finish. They deliver impeccable results, equipped to handle detailed painting work. Promax Painting takes pride in their work and offers great results at a reasonable price. Transform your home's look with a stunning exterior paint job with them.",
    img: "/assets/exteriorpainting.png",
    alt: "diningroom",
    reverse: true,
  },
  {
    service: "Commercial Painting",
    serviceDetails:
      "Promax Painting creates a professional and inviting atmosphere with their commercial painting services. They use the best technology and skills to transform any space into a work of art. Their pricing is transparent, and they provide warranties on their construction work. Contact them for the best first impression for your business.",
    img: "/assets/commercialpainting.png",
    alt: "house",
    reverse: false,
  },
];

const Home = () => {
  return (
    <div>
      <div className="wrapper bg-image bg-cover bg-no-repeat">
        <section className="contain flex-col gap-8 items-center justify-center py-60">
          <h1 className="text-white text-2xl leading-9 sm:text-4xl md:text-5xl xl:text-6xl font-bold uppercase max-w-2xl text-center sm:leading-[50px] md:leading-[60px] xl:leading-[70px]">
            Painting estimates are always FREE
          </h1>
          <button className="green-btn">Contact Us</button>
        </section>
      </div>

      <div className="wrapper py-8 md:py-16 lg:py-32">
        <section className="contain flex flex-col items-center gap-6">
          <h2 className="heading text-center">Why Promax Painting?</h2>
          <p className="text-darkGray text-md md:text-xl max-w-2xl text-center font-poppins">
            It is a reliable company. We provide our customers with the best,
            perfect and accurate service at a reasonable price.
          </p>

          <div className="flex gap-12 flex-col lg:flex-row lg:gap-6 mt-10">
            <div className="flex flex-col items-center gap-4 rounded-md border-b-[3px] border-b-darkGreen px-6 py-8 flex-1 max-w-md shadow-service">
              <img src="/assets/card1.png" alt="cardimg" />
              <p className="para text-center">
                Our staff consists of seasoned veterans with extensive
                experience in the painting industry, and we take pride in
                utilizing cutting-edge technology and skills.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-md border-b-[3px] border-b-darkGreen px-6 py-8 flex-1 max-w-md shadow-service">
              <img src="/assets/card2.png" alt="cardimg" />
              <p className="para text-center">
                We provide reasonable pricing without any hidden costs, ensuring
                transparency throughout the project.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-md border-b-[3px] border-b-darkGreen px-6 py-8 flex-1 max-w-md shadow-service">
              <img src="/assets/card3.png" alt="cardimg" />
              <p className="para text-center">
                At Promax Painting, we take punctuality seriously and work
                diligently to adhere to the schedule, always striving to keep
                our promises.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="wrapper bg-offWhite py-8 md:py-16 lg:py-32">
        <section className="contain flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="heading text-center lg:text-start">
              Customer Review
            </h2>
            <p className="para text-center lg:text-start">
              Our staff consists of seasoned veterans with extensive experience
              in the painting industry, and we take pride in utilizing
              cutting-edge technology and skills. Our staff consists of seasoned
              veterans with extensive experience in the painting industry, and
              we take pride in utilizing cutting-edge technology and skills. Our
              staff consists of seasoned veterans with extensive experience in
              the painting industry, and we take pride in utilizing cutting-edge
              technology and skills.
            </p>
          </div>

          <div className="bg-white flex flex-col items-center py-12 px-8 gap-3 min-w-0 sm:min-w-[400px] max-w-[400px]">
            <img src="/assets/customerphoto.png" alt="customer photo" />
            <h2 className="text-darkGray font-semibold text-xl md:text-2xl">
              Natalie Wilson
            </h2>
            <p className="para text-center font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              dapibus mauris.
            </p>
          </div>
        </section>
      </div>

      <div className="wrapper py-8 md:py-16 lg:py-32">
        <section className="contain flex-col gap-20">
          <h2 className="heading text-center">We can Promise</h2>

          <div className="flex flex-col gap-20">
            {services.map(
              ({ service, serviceDetails, img, alt, reverse }, index) => (
                <Service
                  key={index}
                  service={service}
                  serviceDetails={serviceDetails}
                  img={img}
                  alt={alt}
                  reverse={reverse}
                />
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
