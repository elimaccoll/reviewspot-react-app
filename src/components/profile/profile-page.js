import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { uid } = useParams();
  return (
    <div>
      <h1>Profile Page for User #{uid}</h1>
    </div>
  );
};
export default ProfilePage;
