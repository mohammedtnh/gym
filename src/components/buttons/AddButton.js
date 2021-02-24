import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const AddButton = (props) => {
  const gymId = props.gymId;
  console.log("Add button", gymId);
  return (
    <Link to={`/gyms/${gymId}/classes/new`}>
      <AddButtonStyled />
    </Link>
  );
};

export default AddButton;
