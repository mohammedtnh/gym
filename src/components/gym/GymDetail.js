import { Redirect } from "react-router-dom";
import { DetailWrapper } from "../../styles";
import AddButton from "../buttons/AddButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ClassList from "../class/ClassList";

const GymDetail = () => {
  const gymId = useParams().gymId;
  const allClasss = useSelector((state) => state.classReducer.classes);
  const gym = useSelector((state) =>
    state.gymReducer.gyms.find((gym) => gym.id === +gymId)
  );

  if (!gym) return <Redirect to="/gyms" />;

  const classes = gym.classes.map((myclass) =>
    allClasss.find((_myclass) => _myclass.id === myclass.id)
  );

  return (
    <>
      <DetailWrapper>
        <h1>{gym.name}</h1>
        <img src={gym.image} alt={gym.name} />
      </DetailWrapper>
      <AddButton gymId={gym.id} />

      <ClassList classes={classes} />
    </>
  );
};

export default GymDetail;
