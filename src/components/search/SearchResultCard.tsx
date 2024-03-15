import { Link } from "react-router-dom";
import { BanknoteIcon, Clock3Icon } from "lucide-react";

import { AspectRatio } from "../ui/aspect-ratio";

import { Restaurant } from "@/types";

interface Props {
  restaurant: Restaurant;
}

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group p-4 shadow-md rounded-lg transition-transform duration-300 transform hover:scale-105 bg-neutral-50 dark:bg-neutral-800"
    >
      <AspectRatio ratio={16 / 6} className="rounded-md overflow-hidden">
        <img
          src={restaurant.imageUrl}
          alt="restaurant-image"
          className="w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 group-hover:underline">
            {restaurant.restaurantName}
          </h3>
          <div id="card-content" className="flex flex-wrap gap-2">
            {restaurant.cuisines.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-500 text-neutral-100 dark:bg-green-700  rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock3Icon />
            {restaurant.estimatedDeliveryTime} mins
          </div>
          <div className="flex items-center gap-1">
            <BanknoteIcon />
            Delivery from £{(restaurant.deliveryPrice / 100).toFixed(2)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
