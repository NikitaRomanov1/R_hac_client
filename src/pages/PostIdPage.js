import React from "react";
import { useParams } from "react-router";
import agent_list from "./agent_list.js";
import "../styles/table.css";
import template from "../images/template.png";
import { StyledButton } from "../styles/styles.js";
const PostIdPage = () => {
  const params = useParams();
  console.log(agent_list);
  let ag = agent_list.filter((a) => {
    return a.INN == params.INN;
  });
  console.log(ag);
  return (
    <div>
      {/* <h1>Вы открыли страницу организации с ИНН = {params.INN}</h1> */}
      <table>
        <thead>
          <tr>
            <th>БИК</th>
            <th>ИНН</th>
            <th>КПП</th>
            <th>ОКПО</th>
            <th>Юридический адрес</th>
            <th>E-mail</th>
            <th>Полное название</th>
            <th>Почтовый адрес</th>
            <th>Надежность</th>
            <th>Последние поставки</th>
            <th>Контакты</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td> {ag[0].BIK}</td>
            <td>{ag[0].INN}</td>
            <td>{ag[0].KPP}</td>
            <td>{ag[0].OKPO}</td>
            <td>{ag[0].doc_adress}</td>
            <td>{ag[0].email}</td>
            <td>{ag[0].full_name}</td>
            <td>{ag[0].mail_adress}</td>
            <td>{ag[0].reliab_lvl}</td>
            <td>
              {ag[0].state_oreders_list[0]}
              <br />
              {ag[0].state_oreders_list[1]}
              <br />
              {ag[0].state_oreders_list[2]}
              <br />
              {ag[0].state_oreders_list[3]}
            </td>
            <td>{ag[0].contacts}</td>
          </tr>
        </tbody>
      </table>
      <img src={template}></img> <h1>Страница на ремонте!</h1>
    </div>
  );
};

export default PostIdPage;
