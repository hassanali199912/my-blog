import { useEffect, useState } from "react";

export default function ActionMenue() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          const forAllmenut = document.querySelectorAll(".action-menue");
          forAllmenut.forEach((item) => {
            item.style.display = "none";
          });
          setShow(!show);
        }}
      >
        <i className="fa-solid fa-ellipsis" />
        <ul
          style={{ display: `${show ? "block" : "none"}` }}
          className="action-menue"
        >
          <li>
            <i className="fa fa-edit" /> edit
          </li>
          <li>
            <i className="fa-solid fa-eye" /> View
          </li>
          <li>
            <i className="fa fa-trash-can" /> Delete
          </li>
        </ul>
      </button>
    </>
  );
}
