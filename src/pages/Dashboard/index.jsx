import { Container, Header, Section } from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import HabitsCard from "../../components/habits";

const Dashboard = () => {
  const [optionsView, setOptionsView] = useState(false);

  return (
    <Container>
      <Header>
        <div>
          <FaUserCircle />
          <h1>Name</h1>
        </div>
        <div></div>
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
