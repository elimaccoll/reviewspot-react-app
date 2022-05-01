import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findUserById } from "../../actions/user-actions";
import { findUserReviews } from "../../actions/reviews-actions";
import ReviewList from "../reviews/review-list";
import EditBioModal from "./edit-bio-modal";
import moment from "moment";

const ProfilePage = () => {
  const { userId } = useParams();

  const [showBio, setShowBio] = useState(false);
  const hideBioModal = () => setShowBio(false);
  const showBioModal = () => setShowBio(true);

  const userInfo = useSelector((state) => state.user);
  const loggedIn = userInfo.loggedIn;
  const moderator = userInfo.role === "moderator";
  const owner = userInfo._id === userId;

  const dispatch = useDispatch();
  // console.log(userId);
  useEffect(() => findUserById(dispatch, userId), [userId]);
  const userProfile = useSelector((state) => state.profile);
  // console.log(userProfile);

  useEffect(() => findUserReviews(dispatch, userId), [userId]);
  const reviewState = useSelector((state) => state.reviews);
  const userReviews = reviewState.reviews ? reviewState.reviews : [];

  const handleBanUser = () => {
    return;
  };

  return (
    <div className="bg-dark p-2">
      <div className="row">
        <EditBioModal show={showBio} onHide={() => hideBioModal()} />
        <div className="col-3 d-flex justify-content-center align-items-center">
          <img
            src={`https://avatars.dicebear.com/api/pixel-art/${userId}.svg`}
            alt="Profile Pic"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-9">
          <h1>{userProfile.userInfo && userProfile.userInfo.username}</h1>
          <div className="text-muted">
            Joined:{" "}
            {userProfile.userInfo &&
              moment(userProfile.userInfo.joinedOn).format("MMMM Do, YYYY")}
          </div>
          <div>Reviews: {userProfile && userProfile.numReviews}</div>
          <div>Comments: {userProfile && userProfile.numComments}</div>
          <hr />
          <p id="user-bio">
            {userProfile.userInfo && userProfile.userInfo.bio}
          </p>
        </div>
      </div>
      <div
        className={`d-flex justify-content-end ${
          loggedIn && (owner || moderator) ? "d-flex" : "d-none"
        }`}
      >
        <button
          className={`btn btn-block btn-info ${
            loggedIn && owner ? "d-block" : "d-none"
          }`}
          onClick={() => {
            if (loggedIn && owner) showBioModal();
          }}
          data-bs-toggle="modal"
          data-bs-target="#edit-bio-modal"
        >
          Edit Bio
        </button>
        <button
          className={`btn btn-block btn-danger ms-2 ${
            loggedIn && moderator && !owner ? "d-block" : "d-none"
          }`}
          onClick={() => handleBanUser()}
        >
          Ban User
        </button>
      </div>
      <ReviewList reviews={userReviews} />
    </div>
  );
};
export default ProfilePage;
