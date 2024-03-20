import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import UserProfileForm, {
  UserFormData,
} from "../forms/user-profile-form/UserProfileForm";

import { useGetUser } from "@/api/user";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

import LoadingButton from "../LoadingButton";

interface Props {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
}

const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button
        onClick={onLogin}
        className="w-full bg-green-500 dark:bg-green-800 text-white hover:bg-green-600 dark:hover:bg-green-900 "
      >
        Login to check out
      </Button>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className="w-full bg-green-500 dark:bg-green-800 text-white hover:bg-green-600 dark:hover:bg-green-900"
        >
          Checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-neutral-100 dark:bg-neutral-800">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Deliery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
