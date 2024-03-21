import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrder,
  useUpdateMyRestaurant,
} from "@/api/my-restaurant";

import ManageRestaurantForm from "@/components/forms/manage-restaurant-form/ManageRestaurantForm";
import OrderItemCard from "@/components/restaurant/OrderItemCard";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ManageRestaurant = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const isEditing = restaurant ? true : false;

  const { orders } = useGetMyRestaurantOrder();

  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-neutral-100 dark:bg-neutral-800 p-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurant;
