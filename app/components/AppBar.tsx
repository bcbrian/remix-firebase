import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AuthControls from "~/components/AuthControls";
import Typography from "@mui/material/Typography";

export function AppBar({ costs, net, gains }) {
  return (
    <>
      <MuiAppBar>
        <Toolbar sx={{
          display:"flex",
          justifyContent:"space-between"
        }}>
          <Typography>CODE SAGAS</Typography>

          <AuthControls />
        </Toolbar>
      </MuiAppBar>
      <Box sx={{ marginBottom: "64px" }} />
    </>
  );
}
