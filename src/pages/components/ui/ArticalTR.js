import ActionMenue from "./ActionMenue";

export default function ArticalTR() {
  return (
    <>
      <tr className="tr-data">
        <th scope="row">1</th>
        <td>
          <div className="td-data-title">
            <img
              src="https://i.ibb.co/5RgQjw/profile.jpg"
              className="img-fluid"
              alt="profile"
            />
            <p>this is title one </p>
          </div>
        </td>
        <td>
          <div className="td-data-reviews">
            <span>
              <i className="fa fa-star"></i>
              3.5
            </span>
          </div>
        </td>
        <td className="td-data-date-and-time">12 Oct, 2021 10:05 AM</td>
        <td className="td-data-action">
        <ActionMenue />
        </td>
      </tr>
    </>
  );
}
