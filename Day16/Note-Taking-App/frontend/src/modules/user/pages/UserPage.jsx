import { Container } from "@mui/material";
import OAuth from "../components/OAuth";

const UserPage = () => {
  return (
    // Here we are attaching firebase with oAuth.
    <div>
      <Container>
        <OAuth />
      </Container>
    </div>
  );
};

export default UserPage;
