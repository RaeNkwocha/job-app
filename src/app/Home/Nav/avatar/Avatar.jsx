import React, {component} from "react"
import Dropdown from "react-bootstrap/Dropdown";
import authService from "../../../services/auth/authService";

function ButtonDarkExample() {
  let user = authService.user;
  const logout = () => {
    authService.deleteAuthData();
    window.location.reload();
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          style={{
            background: "inherit",
            color: "inherit",
            border: "none",
            outline: "none",
          }}
          id="dropdown-button-dark-example1"
          variant="secondary"
        >
          <span style={{ marginRight: "8px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </span>
          {user.username}
        </Dropdown.Toggle>

        <Dropdown.Menu variant="white">
          <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDarkExample;