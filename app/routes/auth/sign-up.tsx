import { useState } from "react";
import { emailAndPasswordSignUp } from "~/firebase/auth";

import Button from "@mui/material/Button";
import Input from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { COLORS } from "~/theme/colors";

import { Link } from "remix";

export default function EmailAndPasswordSignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Paper
      sx={{
        padding: 4,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start",
        // width: 240,
        // height: 320,
        background: "white",
        position: "absolute",
        transition: "opacity 250ms ease-in",
        // bgcolor: ,
        backgroundColor: COLORS.BACKGROUND.PAPER,

        "&.fade-enter": {
          opacity: 0,
          zIndex: 1,
        },

        "&.fade-enter.fade-enter-active": {
          opacity: 1,
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          margin: "4px 0 4px 0",
        }}
      >
        Sign Up
      </Typography>
      <Input
        sx={{
          margin: "4px 0 4px 0",
        }}
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        sx={{
          margin: "4px 0 8px 0",
        }}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        sx={{
          margin: "8px 0 20px 0",
        }}
        onClick={() => emailAndPasswordSignUp(email, password)}
      >
        Sign Up
      </Button>
      <Button
        component={Link}
        to="/auth"
        sx={{
          margin: "20px 0 12px 0",
        }}
      >
        cancel
      </Button>
    </Paper>
  );
}
