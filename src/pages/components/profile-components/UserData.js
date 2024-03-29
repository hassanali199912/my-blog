import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "../ui/CustomLoader";
import { updateUserDataApiFun } from "../../../store/Slicers/users/userUpdateDataSlicers";
import { Alert } from "react-bootstrap";
import Alart from "../ui/Alart";

export default function UserData({ userData, onFinshed }) {
  const { loading, user } = useSelector((s) => s.userUpdateDataSlicers);
  const dispatch = useDispatch();
  const [alertValue, setAlertValue] = useState({
    show: false,
    message: "",
    variant: "",
  });

  /*this is name change functionality */
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [showNameBtn, setShowNameBtn] = useState(false);
  const handleChangeName = (e) => {
    e.preventDefault();
    const data = {
      feild: "name",
      value: name,
    };
    dispatch(updateUserDataApiFun(data))
      .then((res) => {
        if (res.payload.status === "success") {
          setShowNameBtn(false);
          setAlertValue({
            show: true,
            message: "Name updated successfully",
            variant: "success",
          });
        } else {
          setAlertValue({
            show: true,
            message: res.payload.message,
            variant: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // this is password change functionality
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [showPasswordBtn, setShowPasswordBtn] = useState(false);

  const handleChangePassword = (e) => {
    e.preventDefault();
    const data = {
      feild: "password",
      value: {
        old: oldPassword,
        new: newPassword,
      },
    };
    dispatch(updateUserDataApiFun(data))
      .then((res) => {
        console.log(res.payload);
        if (res.payload.status === "success") {
          setShowNameBtn(false);
          setAlertValue({
            show: true,
            message: "Password updated successfully",
            variant: "success",
          });
        } else {
          setAlertValue({
            show: true,
            message: res.payload.message,
            variant: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setName(userData.name);
    setEmail(userData.email);
  }, []);

  return (
    <>
      <div className="card-profile-2 user-data">
        <h1> Profile Data</h1>
        <p>this is profile data for the user </p>
        <form className="form-profile" onSubmit={handleChangeName}>
          <h3>Name change</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name.."
              onChange={(e) => {
                if (
                  e.target.value === "" ||
                  e.target.value === null ||
                  e.target.value === userData.name
                ) {
                  setShowNameBtn(false);
                } else {
                  setShowNameBtn(true);
                }
                setName(e.target.value);
              }}
              value={name ? name : ""}
            />
          </div>
          <div className="form-group">
            <input
              disabled
              readOnly
              type="email"
              className="form-control"
              placeholder="Email.."
              value={email ? email : ""}
            />
          </div>
          {showNameBtn && (
            <div className="form-group">
              {loading ? (
                <>
                  <button className="btn btn-primary btn-block" disabled>
                    <CustomLoader />
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-primary btn-block" type="submit">
                    Save Changes
                  </button>
                </>
              )}
              <button
                className="btn btn-block reset-btn"
                onClick={() => {
                  setShowNameBtn(false);
                  setName(userData.name);
                }}
                type="button"
              >
                Reset
              </button>
            </div>
          )}
        </form>
        <hr />
        <form className="form-profile" onSubmit={handleChangePassword}>
          <h3>Password change</h3>
          <div className="form-group">
            <input
              required
              type="password"
              className="form-control"
              placeholder="old password.."
              onChange={(e) => {
                if (e.target.value === "" || e.target.value === null) {
                  setShowPasswordBtn(false);
                } else {
                  setShowPasswordBtn(true);
                }
                setOldPassword(e.target.value);
              }}
              value={oldPassword}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="password"
              className="form-control"
              placeholder="new password.."
              onChange={(e) => {
                if (e.target.value === "" || e.target.value === null) {
                  setShowPasswordBtn(false);
                } else {
                  setShowPasswordBtn(true);
                }
                setNewPassword(e.target.value);
              }}
              value={newPassword}
            />
          </div>
          {showPasswordBtn && (
            <div className="form-group">
              {loading ? (
                <>
                  <button className="btn btn-primary btn-block" disabled>
                    <CustomLoader />
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-primary btn-block" type="submit">
                    Save Changes
                  </button>
                </>
              )}
            </div>
          )}
        </form>
      </div>

      {alertValue.show && (
        <Alart
          value={alertValue}
          change={(e) => {
            alertValue.variant === "success" && onFinshed();
            setAlertValue({
              show: false,
              message: "",
              variant: "",
            });
          }}
        />
      )}
    </>
  );
}
