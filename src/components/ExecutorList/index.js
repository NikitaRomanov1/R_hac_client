import React from "react";
import ExecutorItem from "../ExecutorItem";
import { StyledGrid } from "../../styles/styles";
const ExecutorList = ({ agent_list }) => {
  return (
    <div>
      {agent_list == undefined ? null : (
        <h1 style={{ marginLeft: "20px", color: "#3f66ab" }}>
          Найдено {agent_list.length} организаций
        </h1>
      )}
      <StyledGrid>
        {agent_list !== undefined &&
          agent_list.map((item, index) => (
            <ExecutorItem item={item} key={index + 1} />
          ))}
      </StyledGrid>
    </div>
  );
};

export default ExecutorList;
