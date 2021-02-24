import { ListWrapper, Title, AddButtonStyled } from "../../styles";
import GymItem from "./GymItem";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const GymList = () => {
  const gyms = useSelector((state) => state.gymReducer.gyms);
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) => state.authReducer.user);
  console.log(gyms);

  if (loading) return <Loading />;
  const gymList = gyms.map((gym) => <GymItem key={gym.id} gym={gym} />);

  return (
    <div>
      <Title>Gyms</Title>

      {user.userType === "admin" && (
        <Link to="/gyms/new">
          <AddButtonStyled />
        </Link>
      )}

      <ListWrapper>{gymList}</ListWrapper>
    </div>
  );
};
export default GymList;
