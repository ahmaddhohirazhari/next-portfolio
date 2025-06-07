import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name}) => (
            <div key={id} className="flex items-center justify-center px-5 py-3 rounded-xl shadow-sm backdrop-blur-md bg-white/5 dark:bg-white/10 transition hover:scale-105">

              <Image
                height={28}
                width={131}
                src={img}
                alt={name}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
