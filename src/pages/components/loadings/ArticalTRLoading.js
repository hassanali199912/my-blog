import { Placeholder } from "react-bootstrap";
import ActionMenue from "../ui/ActionMenue";

export default function ArticalTRLoading() {
  return (
    <>
      <tr className="tr-data">
        <th scope="row">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
        </th>
        <td>
          <div className="td-data-title">
            <div className="img-placeholder-table img-fluid"></div>
            <Placeholder as="p" animation="glow" className="col-6">
              <Placeholder xs={12} />
            </Placeholder>
          </div>
        </td>
        <td>
          <div className="td-data-reviews">
            <Placeholder as="p" animation="glow" className="col-6">
              <Placeholder xs={12} />
            </Placeholder>
          </div>
        </td>
        <td className="td-data-date-and-time">
          <Placeholder as="p" animation="glow" className="col-12">
            <Placeholder xs={12} />
          </Placeholder>
        </td>
        <td className="td-data-action">
          <Placeholder as="p" animation="glow" className="d-block m-auto col-6">
            <Placeholder xs={12} />
          </Placeholder>
        </td>
      </tr>
    </>
  );
}
