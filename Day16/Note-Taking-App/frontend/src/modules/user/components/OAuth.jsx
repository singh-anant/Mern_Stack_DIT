import Button from "@mui/material/Button";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { oAuthWithGoogle } from "../repository/oauth";
import { useNavigate } from "react-router-dom";

export const OAuth = () => {
  const navigate = useNavigate();
  const googleOAuth = async () => {
    const user = await oAuthWithGoogle();
    try {
      // If we get user we will get redirected to the Dashboard(useNavigate  will be used.)
      if (user) {
        // console.log(user);
        // By this mechanism it will be not visible on the dashboard.
        navigate("/dashboard", {
          state: { username: user.displayName, profilePicture: user.photoURL },
        });
      } else {
        console.log("Problem in fetching....");
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Button variant="outlined" onClick={googleOAuth}>
      <LoginOutlinedIcon />
      &nbsp; Login With Google
    </Button>
  );
};

export default OAuth;
