import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <div>
      <nav className="hidden md:flex py-4 justify-between px-12 bg-second">
        <h1 className="text-primary text-2xl font-bold cursor-pointer font-gummy">myPortfolio</h1>
        <ul className="flex items-center gap-8">
          <li className="text-primary font-gummy text-lg font-bold hover:underline cursor-pointer"><Link to="/">Home</Link></li>
          <li className="text-primary font-gummy text-lg font-bold hover:underline cursor-pointer"><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
};

export default DesktopNavbar;