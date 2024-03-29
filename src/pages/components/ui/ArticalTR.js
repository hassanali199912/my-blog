import { useState } from "react";
import ActionMenue from "./ActionMenue";
import ConfromationAlert from "./ConfromationAlert";

export default function ArticalTR({ index, post, onAction }) {
 

  const setDateAndTime = (date) => {
    const d = new Date(date);
    return `${d.toUTCString()} `;
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
            {post.revirews ? (
              <>
                <span>
                  <i className="fa fa-star"></i>
                  {post.revirews}
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
