import Image from "next/image";
import Rating from "../Rating/Rating";
import CreateReview from "../Review/CreateReview";
import ViewRestaurantDetail from "./ViewRestaurantDetail";

export default function Restaurant({ restaurant }) {
  const { name, rating, address, city, numberOfReviews } = restaurant;
  return (
    <div className="max-w-xs shadow-md mb-6">
      <div className="w-full h-32">
        <Image
          src={getRestaurantImage(name, 320, 128)}
          width={320}
          height={128}
          alt={name}
        />
      </div>
      <h2 className="text-2xl my-5 text-center">{name}</h2>
      <p className="text-center">
        <LocationIcon /> {address} <br></br>
        {city}
      </p>
      <div className="flex justify-center my-8">
        <Rating rating={rating} />
      </div>
      <div className="flex flex-col items-center my-6">
        <ReviewIcon />
        <span className="text-2xl">{numberOfReviews}</span>
        <small>reviews</small>
      </div>
      <div className="flex justify-around mb-4">
        <CreateReview restaurant={restaurant} />
        <ViewRestaurantDetail restaurant={restaurant} />
      </div>
    </div>
  );
}

export function getRestaurantImage(name, width = 320, height = 320) {
  return `https://source.unsplash.com/random/${width}x${height}/?${name}`;
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 inline"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-8 h-8 inline"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  );
}
