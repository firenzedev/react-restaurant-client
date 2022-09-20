export function useRestaurants(city) {
  const { loading, data, error } = {
    data: {
      restaurants: [
        {
          name: "Mockup",
          rating: 3,
          address: "via maggiore 4",
          city: "Angri",
          numberOfReviews: 0,
          id: "1",
        },
      ],
    },
  };

  return { loading, error, restaurants: data ? data.restaurants : [] };
}

export function useReviews(restaurantId) {
  const { loading, data, error } = {};

  return { loading, error, reviews: data ? data.reviews : [] };
}

export function useAddReview(
  restaurantId,
  message,
  rating,
  onCompleted = () => {}
) {
  const { loading, error } = {};
  function addReview(review) {
    console.log("add a review", review);
  }

  return [addReview, { loading, error }];
}

export function useSubscribeToReviews(onReviewReceived = () => {}) {
  //TODO implement the subscriptions here
}
