import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Navbar() {
  const navigate = useNavigate;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed" 
         sx={{ top: 'auto', bottom: 55 }}
        color="transparent"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Container>
          <Toolbar >
            <Typography sx={{ flexGrow: 1
            }}></Typography>

            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab size="medium" color="secondary" aria-label="add"  href="/local/new">
                <AddIcon />
              </Fab>
            </Box>
            
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
