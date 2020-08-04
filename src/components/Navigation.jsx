import React from "react";
import { Link } from "react-router-dom";

import "../scss/components/navigation.scss";

const Navigation = () => {
  return (
    <nav data-testid="navigation" className="navigation">
      <Link data-testid="redirect-link-orders" to="/orders" className="cta">
        Orders
      </Link>
      <Link data-testid="redirect-link-order" to="/order" className="cta">
        Make order
      </Link>
    </nav>
  );
};

export default Navigation;
