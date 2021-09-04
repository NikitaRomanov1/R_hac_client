import React from "react";
import ExecutorItem from "../ExecutorItem";
import { StyledGrid } from "../../styles/styles";
const ExecutorList = ({ companies }) => {
  console.log(companies.agent_list);
  return (
    <div>
      {companies.agent_list == undefined ? null : (
        <h1 style={{ marginLeft: "20px", color: "#3f66ab" }}>
          Найдено {companies.agent_list.length} организаций
        </h1>
      )}
      <StyledGrid>
        {companies.agent_list !== undefined &&
          companies.agent_list.map((item, index) => (
            <ExecutorItem item={item} key={index + 1} />
          ))}
      </StyledGrid>
    </div>
  );
};

export default ExecutorList;
