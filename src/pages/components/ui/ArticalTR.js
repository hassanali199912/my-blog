import { useState } from "react";
import ActionMenue from "./ActionMenue";
import ConfromationAlert from "./ConfromationAlert";

export default function ArticalTR({ index, post, onAction }) {
 

  const setDateAndTime = (date) => {
    const d = new Date(date);
    return `${d.toUTCString()} `;
  };
  const calcAverveReview = (reviews) => {
    let sum = 0;
    reviews.forEach((review) => {
      sum += review;
    });
    const revArra = (sum / reviews.length).toFixed(1).split(".");
    let rev = "";
    if (revArra[1] !== "0") {
      rev = revArra[0] + "." + revArra[1];
    } else {
      rev = revArra[0];
    }

    return rev ? rev : 0;
  };

  return (
    <>
      <tr className="tr-data">
        <th scope="row">{index + 1}</th>
        <td>
          <div className="td-data-title">
            {post.imageUrl && (
              <img src={post.imageUrl} className="img-fluid" alt="profile" />
            )}
            <p>{post.title && post.title}</p>
          </div>
        </td>
        <td>
          <div className="td-data-reviews">
            {post.reviews ? (
              <>
                <span>
                  <i className="fa fa-star"></i>
                  {calcAverveReview(post.reviews)}
                </span>
              </>
            ) : (
              <>
                <span>
                  <i className="fa fa-star"></i>0
                </span>
              </>
            )}
          </div>
        </td>
        <td className="td-data-date-and-time">
          {post.createdAt && setDateAndTime(post.createdAt)}

          {/* 12 Oct, 2021 10:05 AM */}
        </td>
        <td className="td-data-action">
          <ActionMenue
            handleEdit={() => onAction(post._id, "edit")}
            handelView={() => onAction(post._id, "view")}
            handleDelete={() => onAction(post._id, "delete")}
          />
        </td>
      </tr>
    </>
  );
}
