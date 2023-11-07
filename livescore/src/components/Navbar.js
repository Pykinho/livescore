import { Link } from "react-router-dom";

function NavBar({ title }) {
  return (
    <div className="navbar bg-base-100" data-theme="synthwave">
      <a href="/" className="btn btn-ghost normal-case text-xl">
        {title}
      </a>
    </div>
  );
}
export default NavBar;
