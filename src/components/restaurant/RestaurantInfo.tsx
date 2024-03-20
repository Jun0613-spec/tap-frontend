import { Restaurant } from "@/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  restaurant: Restaurant;
}

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {restaurant.cuisines.map((item, index) => (
          <p
            key={index}
            className="px-2 py-1 bg-green-500 text-neutral-100 dark:bg-green-700 rounded-full text-xs"
          >
            {item}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
