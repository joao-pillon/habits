import { Container, Header, Section } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { BsFillPlusCircleFill, BsSearch } from "react-icons/bs";
import { useState } from "react";
import HabitsCard from "../../components/habits";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [optionsView, setOptionsView] = useState(false);

  const history = useHistory();

  return (
    <Container>
      <Header>
        <div>
          <FaUserCircle />
          <h1>Name</h1>
        </div>
        <section>
          <BsSearch onClick={() => history.push("/")} />
        </section>
      </Header>
      <HabitsCard />

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
