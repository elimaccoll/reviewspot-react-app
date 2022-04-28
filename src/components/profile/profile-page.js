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
          <h1>Username for User #{uid}</h1>
          <div className="text-muted">Joined: Date of account creation</div>
          <div>Number of Reviews: XX</div>
          <hr />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            accusantium dolores, cupiditate dolor nulla minima illum ea ut,
            commodi reprehenderit eius, enim ipsam? Facilis quam repellendus
            inventore numquam, deleniti minima.
          </div>
        </div>
      </div>
      <ReviewList />
    </div>
  );
};
export default ProfilePage;
