import {Link} from "react-router-dom";

const Navbar =()=>{

    return(
<div>

<nav className="navbar navbar-expand-lg navbar-light bg-danger">
  <Link to="/" className="navbar-brand" href="/">Employee's</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link" href="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link to="/add" className="nav-link" href="/add">Add</Link>
      </li>
    </ul>
  </div>
</nav>

</div>

    );
}

export default Navbar;