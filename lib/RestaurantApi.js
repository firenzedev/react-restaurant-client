import { useQuery, useMutation, useSubscription } from "@apollo/client";
import gql from "graphql-tag";

const GET_RESTAURANTS = gql`
  query restaurants($restaurantCity: String) {
    restaurants(city: $restaurantCity) {
      name
      address
      rating
      city
      id
      numberOfReviews
    }
  }
`;

export const GET_REVIEWS = gql`
  query Reviews($restaurantId: ID!) {
    reviews(restaurantId: $restaurantId) {
      id
      message
      rating
      restaurant {
        id
      }
      replies {
        id
        message
      }
    }
  }
`;

const ADD_REVIEW = gql`
  mutation CreateReview($input: ReviewInput!) {
    createReview(input: $input) {
      id
      message
      rating
      restaurant {
        id
        numberOfReviews
        rating
        reviews {
          message
          rating
          id
          restaurant {
            id
          }
        }
      }
    }
  }
`;

const REVIEW_ADDED_SUBSCRIPTION = gql`
  subscription ReviewAdded {
    reviewAdded {
      rating
      id
      message
      restaurant {
        id
        numberOfReviews
        rating
        name
      }
    }
  }
`;

export function useRestaurants(city) {
  const { loading, data, error } = useQuery(GET_RESTAURANTS, {
    variables: {
      restaurantCity: city,
    },
  });

  return { loading, error, restaurants: data ? data.restaurants : [] };
}

export function useReviews(restaurantId) {
  const { loading, data, error } = useQuery(GET_REVIEWS, {
    variables: { restaurantId: restaurantId },
  });

  return { loading, error, reviews: data ? data.reviews : [] };
}

export function useAddReview(
  restaurantId,
  message,
  rating,
  onCompleted = () => {}
) {
  const [addReview, { loading, error }] = useMutation(ADD_REVIEW, {
    onError: () => {},
    onCompleted: (data) => {
      onCompleted(data);
    },
    variables: {
      input: { restaurantId, message, rating },
    },
    refetchQueries: [
      { query: GET_REVIEWS, variables: { restaurantId: restaurantId } }, // reviews
      "Reviews", // Query name
    ],
  });

  return [addReview, { loading, error }];
}

export function useSubscribeToReviews(onReviewReceived = () => {}) {
  function onSubscriptionData(options) {
    onReviewReceived(options.subscriptionData.data.reviewAdded);
  }

  useSubscription(REVIEW_ADDED_SUBSCRIPTION, {
    onSubscriptionData: onSubscriptionData,
  });
}
