import React from "react";
import Toolbar from "@mui/material/Toolbar";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

const StyleButton = styled(Button)({
  textTransform: "none",
  borderRadius: "50px",
  background: "inherit",
  color: "#468fa2",
  opacity: 1,
  height: 40,
  backgroundColor: "inherit",
  "&:hover": {
    color: "#ED7014",
  },
});

const PIM = () => {

  return (
    <div>
      <Box style={{ margin: "auto" }}>
        {/* <HamburgerMenu /> */}

        <AppBar position="fixed" sx={{ mt: "60px", background: "inherit" }}>
          <Toolbar sx={{ ml: "220px", float: "right", pl: "40px" }}>
            <StyleButton>
              Configuration <KeyboardArrowDownIcon />
            </StyleButton>
            <StyleButton>Employee List</StyleButton>
            <StyleButton >
              Add Employee
            </StyleButton>
            <StyleButton>Reports</StyleButton>
          </Toolbar>
        </AppBar>
        <Paper
          sx={{
            ml: "300px",
            mt: "60px",
            bgcolor: "#FFFFFF",
            padding: "20px",
            width: "1020px",
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#676767",
                  fontSize: "17px",
                }}
              >
                Add Employee
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <AccountCircleIcon
                  sx={{
                    width: "200px",
                    height: "200px",
                    color: "#ded4d4",
                    ml: "40px",
                  }}
                />
                <Box sx={{ color: "#999090" }}>
                  Accepts .jpg,.png,.gif up to 1 MB recomended
                </Box>

                <Box sx={{ color: "#999090", ml: "60px" }}>
                  Dimenssions 200px X 200px
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#676767",
                    fontSize: "17px",
                    mr: "280px",
                    mt: "20px",
                  }}
                >
                  Employee Full Name*
                </Typography>
                <Box sx={{ mt: "10px" }}>
                  <TextField
                    id="frist-name"
                    label="Frist Name"
                    variant="outlined"
                  />

                  <TextField
                    id="middle-name"
                    label="Middle Name"
                    variant="outlined"
                  />

                  <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#676767",
                      fontSize: "17px",
                      mr: "280px",
                      mt: "20px",
                    }}
                  >
                    Employee ID
                  </Typography>
                  <Box sx={{ mt: "10px" }}>
                    <TextField
                      id="emp-id"
                      label="Employee ID"
                      variant="outlined"
                    />
                  </Box>
                  <Divider sx={{ mt: "20px" }} />
                  <Box sx={{ display: "flex", justifyContent: "inline-flex" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#999090",
                        fontSize: "15px",
                        mr: "280px",
                        mt: "10px",
                      }}
                    >
                      Create Login Details
                    </Typography>
                    <ToggleOffIcon
                      sx={{
                        width: "40px",
                        height: "40px",
                        color: "#ded4d4",
                        ml: "-270PX",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#999090",
                fontSize: "15px",
                mt: "10px",
              }}
            >
              * Required
            </Typography>
            <Box sx={{ mt: "10px" }}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: "50px",
                  background: "inherit",
                  color: "#ED7014",
                  opacity: 1,
                  height: 40,
                  mr: "10px",
                  backgroundColor: "inherit",
                  "&:hover": {
                    color: "#ED7014",
                  },
                }}
              >
                Cancle
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: "50px",
                  background: "inherit",
                  color: "#ffffff",
                  opacity: 1,
                  height: 40,
                  backgroundColor: "#ED7014",
                  "&:hover": {
                    color: "inherit",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default PIM;
