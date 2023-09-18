import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Matias Virgili
          </Typography>
          <Button color="inherit">
            <ExitToAppSharpIcon />
            Exit
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;