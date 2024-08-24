
import {
  CgMenuGridR,
  CgMenuHotdog,
  FaUsers,
  FaShoppingBag,
  FaUserAlt,
  SlCalender,
  MdEmail,
  FaArrowRightLong,
  BsRobot,
} from "../../ReactICON/index";
import Link from "./Link";

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const SideBar = ({
  openComponent,
  setOpenComponent,
  user,
  setPatientDetails,
  userType,
  address,
}) => {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {address == ADMIN_ADDRESS.toLowerCase() && (
            <li>
              <a className="has-arrow ai-icon" aria-expanded="false">
                <i>
                  <CgMenuGridR />
                </i>
                <span
                  onClick={() => setOpenComponent("Home")}
                  className="nav-text"
                >
                  Dashboard
                </span>
              </a>
              <ul aria-expanded="false">
                <Link
                  name={"Patient"}
                  handleClick={() => setOpenComponent("Patient")}
                />
                <Link
                  name={"Doctor"}
                  handleClick={() => setOpenComponent("Doctor")}
                />
                <Link
                  name={"Add Medicine"}
                  handleClick={() => setOpenComponent("Add Medicine")}
                />
                <Link
                  name={"All Appoinments"}
                  handleClick={() => setOpenComponent("All Appoinments")}
                />
                <Link
                  name={"User"}
                  handleClick={() => setOpenComponent("User")}
                />
                <Link
                  name={"Update"}
                  handleClick={() => setOpenComponent("UpdateAdmin")}
                />
              </ul>
            </li>
          )}

          {userType == "Patient" && (
            <li>
              <a
                className="ai-icon"
                aria-expanded="false"
                onClick={() => setOpenComponent("Appointment")}
              >
                <i>
                  <SlCalender />
                </i>
                <span className="nav-text">Appointment</span>
              </a>
            </li>
          )}

          <li>
            <a className="has-arrow ai-icon" aria-expanded="false">
              <i>
                <FaUserAlt />
              </i>
              <span className="nav-text">Profile</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a
                  onClick={() => {
                    if (userType === "Patient") {
                      setPatientDetails(user);
                      setOpenComponent("Profile");
                    } else {
                      setPatientDetails(user);
                      setOpenComponent("DoctorProfile");
                    }
                  }}
                >
                  Profile
                </a>
              </li>
              {userType == "Patient" && (
                <Link
                  name={"Order"}
                  handleClick={() => setOpenComponent("Order")}
                />
              )}
              {userType == "Patient" && (
                <Link
                  name={"Prescription"}
                  handleClick={() => setOpenComponent("Prescription")}
                />
              )}
              {userType == "Patient" && (
                <Link
                  name={"Medicial History"}
                  handleClick={() => setOpenComponent("MedicialHistory")}
                />
              )}
              {userType == "Doctor" && (
                <Link
                  name={"Your Appointments"}
                  handleClick={() => setOpenComponent("YourAppointments")}
                />
              )}
            </ul>
          </li>
          <li>
            <a
              className="ai-icon"
              aria-expanded="false"
              onClick={() => setOpenComponent("Shop")}
            >
              <i>
                <FaShoppingBag />
              </i>
              <span className="nav-text">Medicines</span>
            </a>
          </li>
          <li>
            <a
              className="ai-icon"
              aria-expanded="false"
              onClick={() => setOpenComponent("Chat")}
            >
              <i>
                <MdEmail />
              </i>
              <span className="nav-text">Chat</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
