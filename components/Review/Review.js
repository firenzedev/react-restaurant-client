import Rating from "../Rating/Rating";

export default function Review({ review }) {
  const { rating, message, replies } = review;
  return (
    <div className="p-3 shadow-md my-2 ">
      <div className="flex">
        <div className="bg-gray-200 text-gray-600 p-2 rounded-full m-2 w-10 h-10 shadow-md">
          <UserIcon />
        </div>
        <div>
          <Rating rating={rating} />
          {message}
        </div>
      </div>
      {replies.map((reply) => (
        <Reply key={`reply-${reply.id}`} reply={reply} />
      ))}
    </div>
  );
}

function Reply({ reply }) {
  return (
    <div className="ml-12 bg-gray-50 p-3 flex items-center">
      <div className="bg-gray-200 text-gray-600 p-2 rounded-full m-2 w-10 h-10 shadow-md">
        <UserIcon />
      </div>
      <div>{reply.message}</div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
}
