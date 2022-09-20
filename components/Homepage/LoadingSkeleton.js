import RestaurantSkeleton from "./RestaurantSkeleton";

export default function LoadingSkeleton() {
    return new Array(10).fill().map((_, index) => (<RestaurantSkeleton key={`skeleton-${index}`} />))
}