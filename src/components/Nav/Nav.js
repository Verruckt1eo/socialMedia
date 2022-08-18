import {FaRocketchat,FaRegNewspaper,FaUserFriends,FaUser} from "react-icons/fa"
import {Link} from "react-router-dom"
function Nav(props) {
  return (
    <nav className="section menu">
      <p>
        <Link to="/messages"><FaRocketchat /> Чаты</Link>
      </p>
      <p>
        <Link to="/"><FaRegNewspaper/> Новости</Link>
      </p>
      <p>
        <Link to="/friends"><FaUserFriends/> Друзья</Link>
      </p>
      <p>
      <Link to="/account"><FaUser/> Аккаунт</Link>
      </p>
    </nav>
  );
}
export default Nav