import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../reviews/review-list";
import EditBioModal from "./edit-bio-modal";

const ProfilePage = () => {
  const [showBio, setShowBio] = useState(false);
  const hideBioModal = () => setShowBio(false);
  const showBioModal = () => setShowBio(true);

  // TODO: Get this info from backend
  const loggedIn = true;
  const moderator = true;
  const owner = true;

  const handleBanUser = () => {
    return;
  };

  const handleDeleteAccount = () => {
    return;
  };

  const { uid } = useParams();
  return (
    <div className="bg-dark p-2">
      <div className="row">
        <EditBioModal show={showBio} onHide={() => hideBioModal()} />
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
            loggedIn && owner ? "d-block" : "d-none"
          }`}
          onClick={() => handleDeleteAccount()}
        >
          Delete Account
        </button>
        <button
          className={`btn btn-block btn-danger ms-2 ${
            loggedIn && moderator ? "d-block" : "d-none"
          }`}
          onClick={() => handleBanUser()}
        >
          Ban User
        </button>
      </div>
      <ReviewList />
    </div>
  );
};
export default ProfilePage;
