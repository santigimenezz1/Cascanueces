import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const Carrito = () => {
  return (
    <>
      <div>
      <Link to={"/cart"}>
      <Badge
        badgeContent={1}
        color="error"
        style={{ color: "black", cursor: "pointer" }}
      >
        <ShoppingCartIcon fontSize="large" />
      </Badge>
      </Link>
      </div>
    </>
  );
};
export default Carrito;