import React, { useState, useEffect } from "react";
import { StyledButton, StyledHome, StyledInput } from "../styles/styles";
import next from "../images/next.png";
import ExecutorList from "../components/ExecutorList";

import Loader from "../components/Loader";
import axios from "axios";
const Home = () => {
  let agent_list = [
    {
      full_name: 'Акционерное общество "Далгакыран-М"',
      alias: 'АО "Далгакыран-М"',
      surname: "",
      name: "",
      middle_name: "",
      position: "",
      INN: "7725529877",
      KPP: "772601001",
      OKPO: "76030966",
      mail_adress: "Варшавское ш, 148, пом. 705, этаж 7",
      doc_adress: "Варшавское ш, 148, пом. 705, этаж 7",
      real_adress: "",
      phone: "(495) 6642015",
      email: "anton.kirillov@dalgakiran.com",
      web_page: "http://dalgakiran.su/",
      payment_acc: "",
      corresp_acc: "",
      BIK: "",
      bank_name: "",
      bank_adress: "",
      contacts:
        "Свистов Алексей Евгеньевич, Ведущий специвлист, 977 3440016, , \nСвистов Алексей Викторович, Ведущий специалист по тендерам, (495) 6642015, , \nСвистов Алексей Викторович, Директор по финансам и планированию, (495) 6642015, , ",
      reliab_lvl: "Высокая",
      status: "Действующая организация",
      capital: "10 750 000 руб.",
      concurents_list: [
        'ООО "ЧКЗ"',
        'АО "Уралкомпрессормаш"',
        'ООО "Айртехно"',
      ],
      state_oreders_list: [
        "Депстройэнергетики и ЖКК Югры (1 контракт на 10 890 528 руб.)",
        "Департамент Культуры Города Москвы (1 контракт на 5 560 500 руб.)",
        'АО "Кэмз" (1 контракт на 5 266 800 руб.)',
        'ООО "Ирз-Энерго" (1 контракт на 4 465 000 руб.)',
        'АО "НПО Энергомаш" (1 контракт на 4 037 327 руб.)',
      ],
    },
    {
      full_name:
        'Федеральное бюджетное учреждение здравоохранения "Центр гигиены и эпидемиологии в Волгоградской области"',
      alias: 'ФБУЗ "Центр гигиены и эпидемиологии в Волгоградской области"',
      surname: "",
      name: "",
      middle_name: "",
      position: "",
      INN: "3443063870",
      KPP: "344301001",
      OKPO: "76874256",
      mail_adress: "Ангарская ул, 13Б",
      doc_adress: "Ангарская ул, 13Б",
      real_adress: "",
      phone: "(8844) 372674",
      email: "info@fguz-volgograd.ru",
      web_page: "",
      payment_acc: "",
      corresp_acc: "",
      BIK: "",
      bank_name: "",
      bank_adress: "",
      contacts: "",
      reliab_lvl: "",
      status: "",
      capital: "",
      concurents_list: "",
      state_oreders_list: "",
    },
    {
      full_name:
        'Автономная некоммерческая организация "Научно-исследовательский институт проблем экологии"',
      alias: "НИИПЭ",
      surname: "",
      name: "",
      middle_name: "",
      position: "",
      INN: "7705521140",
      KPP: "770501001",
      OKPO: "11647271",
      mail_adress: "Большая Ордынка ул, 29, 1",
      doc_adress: "Большая Ордынка ул, 29, 1",
      real_adress: "",
      phone: "925 1885597",
      email: "anastasiya-poval@mail.ru",
      web_page: "",
      payment_acc: "",
      corresp_acc: "",
      BIK: "",
      bank_name: "",
      bank_adress: "",
      contacts:
        "Плямина Ольга Владимировна, Директор, 925 1885597, 925 1885597, ",
      reliab_lvl: "Высокая",
      status: "Действующая организация",
      capital: "",
      concurents_list: [
        'АО "Раопроект"',
        'ООО "Ижица-Эксперт"',
        "Фонд им. В. И. Вернадского",
      ],
      state_oreders_list: [
        'Госкорпорация "Росатом" (19 контрактов на 128 863 847 руб.)',
        'АО "Концерн Росэнергоатом" (24 контракта на 114 441 843 руб.)',
        'АО "Твэл" (5 контрактов на 39 803 673 руб.)',
        'ФГУП "ФЭО" (3 контракта на 35 093 598 руб.)',
        'ФГУП "НО РАО" (8 контрактов на 34 155 795 руб.)',
      ],
    },
  ];

  const [companies, setCompanies] = useState([]);
  const [isCompaniesLoading, setIsCompaniesLoading] = useState(false);

  async function fetchCompanies(inputValue) {
    setIsCompaniesLoading(true);
    const response = await axios.post("http://127.0.0.1:8000/look_for", {
      data: inputValue,
    });
    setCompanies(response.data);
    setIsCompaniesLoading(false);
  }

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (!inputValue) {
      alert("Введите что-нибудь");
    } else fetchCompanies(inputValue);
  };
  const item = {
    initial: {
      transform: { rotate: 0 },
    },
    animate: { cx: [null, 100, 200] },
    transition: { duration: 3, times: [0, 0.2, 1] },
    exit: {
      transform: { rotate: 360 },
    },
  };
  return (
    <div>
      <StyledHome>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledInput
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            placeholder="Поиск по названию услуги..."
          ></StyledInput>
          <StyledButton onClick={handleClick}>
            <img
              style={{
                width: 35,
              }}
              alt="button"
              src={next}
            ></img>
          </StyledButton>
        </div>
      </StyledHome>
      <div style={{ marginTop: "20px" }}>
        {isCompaniesLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "150px",
            }}
          >
            <Loader />
          </div>
        ) : (
          <ExecutorList agent_list={agent_list} />
        )}
        {/* <ExecutorList companies={companies} /> */}
      </div>
    </div>
  );
};

export default Home;
