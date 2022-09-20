import { useState } from "react";
import { useSubscribeToReviews } from "../../lib/RestaurantApi";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import Star from "../Rating/Star";

export default function Notifications() {
  const [newReviews, setNewReviews] = useState([]);

  function clean(toDelete) {
    setNewReviews((reviews) => {
      const newArray = [...reviews];
      newArray.shift();
      return newArray;
    });
  }

  function onReviewReceived(review) {
    setNewReviews([...newReviews, review]);

    setTimeout(clean, 2500);
  }

  useSubscribeToReviews(onReviewReceived);

  return (
    <div className="fixed right-2 top-4 m-auto z-50">
      {newReviews.map((review) => (
        <div
          key={`review-${review.id}`}
          className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg m-6"
        >
          <div className="flex flex-row">
            <div className="ml-2 mr-6">
              <div className="flex items-center">
                <span className="font-semibold">
                  New review for <em>{review.restaurant.name}</em>{" "}
                </span>
                <span className="inline-flex items-center ml-3">
                  <Star />
                  {review.restaurant.rating.toFixed(1)}
                </span>
              </div>
              <span className="block text-gray-500 mt-4">{review.message}</span>
              <Rating rating={review.rating} />
              <div className="mt-4 flex justify-end w-full">
                <Button color="primary">View</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
