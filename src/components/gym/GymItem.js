import { Link } from "react-router-dom";
import { ItemWrapper } from "../../styles";

const GymItem = (props) => {
  const gym = props.gym;

  return (
    <ItemWrapper>
      <Link to={`/gyms/${gym.id}`}>
        <img src={gym.image} alt={gym.name} className="gymPhoto" />
      </Link>

      <p> {gym.name}</p>
    </ItemWrapper>
  );
};

export default GymItem;
