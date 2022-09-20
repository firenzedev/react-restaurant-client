import Image from "next/image";
import { useReviews } from "../../lib/RestaurantApi";
import Error from "../Error/Error";
import Rating from "../Rating/Rating";
import Star from "../Rating/Star";
import Review from "../Review/Review";

export default function RestaurantDetail({ restaurant }) {
  const { name, rating, address, city, numberOfReviews, id } = restaurant;

  const { loading, error, reviews } = useReviews(id);

  return (
    <div className="">
      <div className="w-full">
        <Image
          src={getRestaurantImage(name, 640, 320)}
          width={640}
          height={320}
          alt={name}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMsLy2tBwAErgHihwXCMgAAAABJRU5ErkJggg=="
        />
      </div>
      <div className="lg:flex">
        <div className="p-2 w-2/4">
          <h2 className="text-2xl mt-5 ">{name}</h2>
          <p>
            {address} - {city}
          </p>
        </div>
        <div className="w-1/4">
          <div className="flex justify-center my-8">
            <Rating rating={rating} />
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col items-center my-6">
            <ReviewIcon />
            <span className="text-2xl">{numberOfReviews}</span>
            <small>reviews</small>
          </div>
        </div>
      </div>
      <div className="p-2 border-t border-solid border-slate-200 ">
        <h2 className="text-xl my-4 ">Reviews</h2>
        {loading && <ReviewLoading />}
        {reviews.map((review) => (
          <Review review={review} key={`review-${review.id}`} />
        ))}
        <Error error={error} />
      </div>
    </div>
  );
}

function ReviewLoading() {
  return (
    <div className="text-lg flex">
      Loading reviews...{" "}
      {new Array(4).fill().map((_, index) => (
        <div
          key={`loader-${index}`}
          className={index % 2 === 0 ? "animate-bounce" : "animate-spin"}
        >
          <Star />
        </div>
      ))}
    </div>
  );
}

export function getRestaurantImage(name, width = 320, height = 320) {
  return `https://source.unsplash.com/random/${width}x${height}/?${name}`;
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
