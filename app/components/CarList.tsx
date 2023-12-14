import {
  BanknotesIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import { initThreeSceneFirst } from "./initThreeSceneFirst";
import { initThreeSceneSecond } from "./initThreeSceneSecond";
import { initThreeSceneThird } from "./initThreeSceneThird";

export default function CarList() {
  const firstCarSceneRef = useRef<HTMLDivElement | null>(null);
  const secondCarSceneRef = useRef<HTMLDivElement | null>(null);
  const thirdCarSceneRef = useRef<HTMLDivElement | null>(null);

  const cars = [
    {
      name: "Malibu",
      title: "Classic Car",
      brand: "Chevrolet",
      email: "dodge@email.com",
      telephone: "555-555-5555",
      imageUrl: "https://source.unsplash.com/random/500x500/?car",
      ref: firstCarSceneRef,
    },
    {
      name: "New Yorker",
      title: "Classic Car",
      brand: "Chrysler",
      email: "dodge@email.com",
      telephone: "555-555-5555",
      imageUrl: "https://source.unsplash.com/random/500x500/?car",
      ref: secondCarSceneRef,
    },
    {
      name: "Unknown",
      title: "Classic Car",
      brand: "Rolls-Royce",
      email: "dodge@email.com",
      telephone: "555-555-5555",
      imageUrl: "https://source.unsplash.com/random/500x500/?car",
      ref: thirdCarSceneRef,
    },
  ];

  useEffect(() => {
    initThreeSceneFirst(firstCarSceneRef);
    initThreeSceneSecond(secondCarSceneRef);
    initThreeSceneThird(thirdCarSceneRef);
  }, []);

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 m-14"
      >
        {cars.map((car, index) => (
          <li
            key={car.name + Math.random()}
            className="col-span-1 mt-8 flex flex-col bg-white text-center rounded-md relative max-h-sm"
          >
            <div className="flex flex-1 flex-col p-8">
              <div className="p-20">
                <div
                  ref={car.ref}
                  className={`z-20 absolute -left-[485px] -top-[210px] ${
                    index === 1 ? "-top-[328px]" : ""
                  }`}
                />
              </div>
              {/* <Image
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={car.imageUrl}
                width={1000}
                height={1000}
                alt=""
              /> */}
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {car.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{car.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-600/20">
                    {car.brand}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex bg-red-600 rounded-b-md">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${car.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-white"
                  >
                    <InformationCircleIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                    Conhecer
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${car.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-white"
                  >
                    <BanknotesIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                    Adquirir
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <span className="mb-12 px-20 py-4 cursor-pointer bg-white hover:bg-neutral-300 font-bold text-red-600 rounded-full">
          Ver mais carros...
        </span>
      </div>
    </>
  );
}
