import Banner from "../../Assets/banner.png"

/* This example requires Tailwind CSS v2.0+ */


export default function Promo() {
  return (
    <div className="bg-stone-300 relative overflow-hidden">
      {/* Decorative background image and gradient */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
          <img
            src={Banner}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-stone-300 bg-opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-300 via-stone-300" />
      </div>

      {/* Callout */}
      <section
        aria-labelledby="sale-heading"
        className="relative max-w-7xl mx-auto pt-16 lg:pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2
            id="sale-heading"
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl uppercase"
          >
            Get 25% off during our opening sale
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
            To celebrate the launch of Darkes Equestrian we are opening with 25% off all items.
          </p>
          <a
            href="/#"
            className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
          >
            Get 25% off
          </a>
        </div>
      </section>

      {/* Testimonials */}
      
    </div>
  );
}
