import { Link } from "react-router-dom";

function League({ league }) {
  return (
    <Link to={`/league/${league.id}/${league.season}`} key={league.id}>
      <div className="grid grid-cols-1 divide-y divide-indigo-900 rounded-2xl">
        <div
          className=" grid grid-cols-1 divide-y divide-indigo-900 "
          data-theme="synthwave"
        >
          <div align="center" className="flex my-4 mx-4 text-lg">
            <img src={league.logo} width={25} alt={league.name} />
            <div className="mx-4"> {league.name}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default League;
