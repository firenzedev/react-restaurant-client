import React from "react";
import Button from "../Button/Button";
import CreateReview from "../Review/CreateReview";
import RestaurantDetail from "./RestaurantDetail";

export default function ViewRestaurantDetail({ restaurant }) {
  const [showModal, setShowModal] = React.useState(false);

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  return (
    <>
      <Button onClick={openModal}>View</Button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative flex-auto">
                  <RestaurantDetail restaurant={restaurant} />
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <CreateReview restaurant={restaurant} autoClose />
                  <Button onClick={closeModal}>Close</Button>
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
