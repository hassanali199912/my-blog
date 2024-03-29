import { useEffect, useState } from "react";

export default function ConfromationAlert({ show, post, cansle, onConform }) {
  return (
    <>
      <div
        className="custom-confromationAlert"
        style={{ display: `${show ? "flex" : "none"}` }}
        onClick={cansle}
      >
        <div className="card confromationAlert-box ">
          <h4>Are you sure?</h4>
          <p>You want to delete this artical?</p>
          <div className="confromationAlert-box-btns">
            <button className="btn btn-primary" onClick={()=>onConform(post)}>
              OK
            </button>
            <button className="btn btn-danger" onClick={cansle}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
