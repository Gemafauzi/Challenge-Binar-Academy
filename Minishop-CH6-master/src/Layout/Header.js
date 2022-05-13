import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user.data);
  return (
    <div className="bg-green-700 text-white">
      <div className="container py-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-extrabold">
              <Link to="/">MiniShop</Link>
            </h2>
          </div>
          <div>
            <ul className="flex space-x-4">
              {/*semua user yang login dan tidak*/}
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/shopping-cart">Cart</Link>
              </li>
              {/**semua user yang belum login */}
              {user === null && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {/**user yang sudah login */}
              {user !== null && (
                <li>
                  <Link to="/order-history">My Order</Link>
                </li>
              )}
              {user !== null && (
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
