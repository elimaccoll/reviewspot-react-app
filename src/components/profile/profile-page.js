import React from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../reviews/review-list";

const ProfilePage = () => {
  const { uid } = useParams();
  return (
    <div className="bg-dark p-2">
      <div className="row mb-2">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img
            src={"https://picsum.photos/200/300?random=1"}
            alt="Profile Pic"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-9">
          <h1>Profile Page for User #{uid}</h1>
        </div>
      </div>
      <ReviewList />
    </div>
  );
};
export default ProfilePage;
