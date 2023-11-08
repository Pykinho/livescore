import { Link } from "react-router-dom";

function NavBar({ title }) {
  return (
    <div
      className="navbar-center bg-base-100 h-20 flex items-center sticky top-0 w-full"
      data-theme="synthwave"
    >
      <a
        className="btn btn-ghost normal-case text-3xl"
        style={{ marginLeft: "200px" }}
        href="/"
      >
        {title}
      </a>
      <div className="form-control w-200">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full  ml-20"
        />
      </div>
    </div>
  );
}
export default NavBar;
