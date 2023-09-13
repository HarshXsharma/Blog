import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MERN</span>
        <span className="headerTitleLg">BlogSpot</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/207700/pexels-photo-207700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        />
    </div>
  );
};

export default Header;