import { Link } from "react-router-dom";
import { ItemWrapper } from "../../styles";

const ProductItem = (props) => {
  const _class = props._class;

  return (
    <ItemWrapper>
      <Link to={`/classes/${_class.id}`}>
        <img src={_class.image} alt={_class.name} />
      </Link>

      <p> {_class.name}</p>
    </ItemWrapper>
  );
};

export default ProductItem;
