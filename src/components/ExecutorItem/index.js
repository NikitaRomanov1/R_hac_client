import React from "react";
import { useHistory } from "react-router-dom";
import { StyledItem } from "../../styles/styles";
import factory from "../../images/factory.png";
const ExecutorItem = ({ item }) => {
  const router = useHistory();
  return (
    <StyledItem
      target="_blank"
      onClick={() => {
        router.push(`/companies/${item.INN}`);
      }}
    >
      {item.full_name}
      <img style={{ width: "30px" }} src={factory}></img>
    </StyledItem>
  );
};

export default ExecutorItem;
