import { useGetUser, useUpdateUser } from "@/api/user";

import Spinner from "@/components/Spinner";
import UserProfileForm from "@/components/forms/user-profile-form/UserProfileForm";

const UserProfile = () => {
  const { currentUser, isLoading: isGetLoading } = useGetUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();

  if (isGetLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!currentUser) {
    return (
      <>
        <p>Not allowed to load user profile</p>
      </>
    );
  }
  return (
    <>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </>
  );
};

export default UserProfile;
