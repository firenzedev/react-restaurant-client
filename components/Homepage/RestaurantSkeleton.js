import Rating from "../Rating/Rating";

export default function RestaurantSkeleton() {
  return (
    <div className="max-w-xs shadow-md mb-6 text-gray-300">
      <div className="w-full h-32 bg-gray-200 animate-pulse"></div>
      <h2 className="text-2xl my-5 text-center w-full h-8 bg-gray-200 animate-pulse"></h2>
      <p className="text-center bg-gray-200 animate-pulse w-full h-12">
      </p>
      <div className="flex justify-center my-8 bg-gray-200 animate-pulse">
        <Rating rating={0} />
      </div>
      <div className="flex flex-col items-center my-6">
        <ReviewIcon />
        <span className="text-2xl bg-gray-200 animate-pulse w-6 h-10"></span>
        <small>reviews</small>
      </div>
      <div className="flex justify-around mb-4">
        <div className="rounded-full bg-gray-200 animate-pulse w-40 h-12"></div>
        <div className="rounded-full bg-gray-200 animate-pulse w-32  h-12"></div>
      </div>
    </div>
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
      className="w-8 h-8 inline text-gray-200 animate-pulse"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  );
}
