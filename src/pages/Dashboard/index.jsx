import { useHistory } from "react-router-dom";
import { useEffect } from "react";
const Dashboard = ({ isLoggedIn }) => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("@userToken");
    if (!token) {
      history.push("/");
    }
  });
  return <></>;
};

export default Dashboard;
