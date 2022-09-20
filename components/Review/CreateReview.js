import React from "react";
import { useAddReview } from "../../lib/RestaurantApi";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";

export default function CreateReview({ restaurant, autoClose }) {
  const [showModal, setShowModal] = React.useState(false);

  const [rating, setRating] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [done, setDone] = React.useState(false);

  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  function closeModal() {
    setShowModal(false);
    setDone(false);
  }

  function openModal() {
    setShowModal(true);
  }

  function onCompleted() {
    setDone(true);
    setRating(0);
    setMessage("");
    if(autoClose) {
      closeModal()
    }
  }

  const [addReview, { loading, error }] = useAddReview(
    restaurant.id,
    message,
    rating,
    onCompleted
  );

  function onSubmit() {
    if (rating !== 0 && message !== "") {
      addReview();
    }
  }

  return (
    <>
      <Button color="primary" onClick={openModal}>
        Add a review
      </Button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div>
                    <span>Add a review</span>
                    <h3 className="text-3xl font-semibold">
                      {restaurant.name}
                    </h3>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto w-96">
                  <div className="my-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Rating
                    </label>
                    <Rating onChange={setRating} rating={rating} />
                  </div>

                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your message..."
                    value={message}
                    onChange={onMessageChange}
                  ></textarea>
                </div>
                {error && (
                  <div className="bg-red-300 p-6 m-3 rounded">
                    An error occurred
                  </div>
                )}
                {done && (
                  <div
                    className="m-3 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                    role="alert"
                  >
                    <span className="font-medium">Review saved.</span> Thank you
                    for you contribution.
                  </div>
                )}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Button type="button" onClick={closeModal}>
                    Close
                  </Button>
                  {!done && (
                    <Button
                      color="primary"
                      onClick={onSubmit}
                      disabled={loading}
                    >
                      {loading && (
                        <span className="animate-pulse px-4">Loading...</span>
                      )}
                      {!loading && "Send Review"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
