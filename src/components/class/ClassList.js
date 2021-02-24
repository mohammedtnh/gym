import { ListWrapper, Title } from "../../styles";
import ClassItem from "./ClassItem";
import SearchBar from "../SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import { Redirect } from "react-router";
// import { Link } from "react-router-dom";

const ClassList = ({ classes }) => {
  const [query, setQuery] = useState("");
  const loading = useSelector((state) => state.loading);
  const user = useSelector((state) => state.authReducer.user);
  if (!user) return <Redirect to="/signin" />;

  if (loading) return <Loading />;

  const _classList = classes
    .filter((_class) => _class.name.toLowerCase().includes(query))
    .map((_class) => <ClassItem key={_class.id} _class={_class} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Title>Classes</Title>

      {/* {user.userType === "admin" && (
        <Link to="/classes/new">
          <AddButtonStyled />
        </Link>
      )} */}

      <ListWrapper>{_classList}</ListWrapper>
    </div>
  );
};
export default ClassList;
