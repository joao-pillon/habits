import { HeaderContainer, Button1, Button2, Button3, Container, Profile, Section} from "./styles";
import Header from "../../components/header";
import { FaUserCircle } from "react-icons/fa";
import { BsFillPlusCircleFill, BsSearch } from "react-icons/bs";
import { useState } from "react";
import HabitsCard from "../../components/habits";

import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import DashboardImg from "../../assets/Newhome.png"

const Dashboard = () => {
  const [optionsView, setOptionsView] = useState(false);
  
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    if (!token) {
      history.push("/");
    }
  });

  function handleClick() {
    localStorage.removeItem("@userToken");
    history.push("/");
  }

  return (
    <Container>
      <HeaderContainer>
        <Header />
        <Button1 onClick={() => handleClick()}>Sair</Button1>
        <Button2 onClick={() => history.push("/")}>Grupos</Button2>
        <Button3 onClick={() => history.push("/group")}>Inscrições</Button3>
      </HeaderContainer>

      <Profile>
        <div>
          <FaUserCircle />
          <h1>Name</h1>
        </div>

      </Profile>
      <HabitsCard />
      <img src={DashboardImg} alt="Background" />
      <Section>
        <BsFillPlusCircleFill onClick={() => setOptionsView(!optionsView)} />
        {optionsView && (
          <>
            <p>Activity</p>
            <p>Goal</p>
            <p>Group</p>
            <p>Habit</p>
          </>
        )}
      </Section>
    </Container>
  );
};

export default Dashboard;
