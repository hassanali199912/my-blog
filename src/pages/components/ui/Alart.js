import { useEffect, useState } from "react";

export default function Alart({ value, change }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  useEffect(() => {
    if (value) {
      setShow(true);
      setMessage(value.message);
      setVariant(value.variant);
    }


    setTimeout(() => {
      change(false);
    }, 1500);
  }, []);
  return (
    <>
      <div
        className={`custom-alert ${variant}`}
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <button
          className="alert-close-btn"
          onClick={() => {
            setShow(false);
            change(false);
          }}
        >
          X
        </button>
        <p className="alert-message">{message && message}</p>
      </div>
    </>
  );
}
