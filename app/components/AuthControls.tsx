import { AUTHENTICATING, signOut, UserContext } from "~/firebase/auth";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Link } from "remix";

export default function SignInUp() {
  const user = useContext(UserContext);

  return user === AUTHENTICATING || user === null ? (
    <Box>
      <Button component={Link} to="/auth/sign-in" color="secondary">
        sign in
      </Button>
      <Button sx={{marginLeft:2}} component={Link} to="/auth/sign-up" color="secondary">
        sign up
      </Button>
    </Box>
  ) : (
    <Box>
      <Button onClick={() => signOut()} color="secondary">
        sign out
      </Button>
    </Box>
  );
}
