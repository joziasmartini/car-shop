import {
  BanknotesIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const cars = [
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
  {
    name: "Challenger Hellcat",
    title: "Luxury Car",
    brand: "Dodge",
    email: "dodge@email.com",
    telephone: "555-555-5555",
    imageUrl: "https://source.unsplash.com/random/500x500/?car",
  },
];

export default function CarList() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-14"
    >
      {cars.map((car) => (
        <li
          key={car.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={car.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {car.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{car.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                  {car.brand}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${car.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <InformationCircleIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Conhecer
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${car.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <BanknotesIcon
                    className="h-5 w-5 text-gray-400"
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
  );
}
