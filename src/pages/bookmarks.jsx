import React from "react";
import { connect } from "react-redux";
import Bookmark from "../components/bookmark";
import "../styles/bookmark-item.css";

function Bookmarks({ bookmarks }) {
  return (
    <div className="bookmark-container">
      {bookmarks.length > 0 ? (
        bookmarks.map((id, i) => {
          return <Bookmark key={i} id={id} />;
        })
      ) : (
        <p className="modal-text">no item in bookmark</p>
      )}
    </div>
  );
}

export default connect((state) => state)(Bookmarks);
