import { useState } from "react";
import { useRestaurants } from "../../lib/RestaurantApi";
import Error from "../Error/Error";
import Restaurant from "./Restaurant";
import LoadingSkeleton from "./LoadingSkeleton";
import Search from "./Search";

export default function Homepage() {
  const [city, setCity] = useState("");

  const { loading, restaurants, error } = useRestaurants(city);

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold font-serif mb-8">Restaurants</h1>
      <Search city={city} onChange={setCity} />
      <Error error={error} />
      <section className="lg:grid grid-cols-4 gap-4">
        {loading && <LoadingSkeleton />}
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </div>
  );
}
