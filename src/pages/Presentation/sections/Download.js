/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import LAApi from "assets/images/apiLogos/los_angeles_icon.png";
import tomTomApi from "assets/images/apiLogos/tomtom_icon.png";
import apiDojo from "assets/images/apiLogos/api_dojo_icon.png";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      {/* <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Do you love this awesome
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              UI Kit for ReactJS &amp; MUI?
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Cause if you do, it can be yours for FREE. Hit the button below to navigate to
              Creative Tim where you can find the Design System in HTML. Start a new project or give
              an old Bootstrap project a new look!
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Download Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox> */}
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={1} mb={3}>
              Used these following APIs
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="City of Los Angeles Crime API">
                  <MKBox
                    component="a"
                    href="https://data.lacity.org/Public-Safety/Crime-Data-from-2020-to-Present/2nrs-mtv8"
                    target="_blank"
                  >
                    <MKBox component="img" src={LAApi} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="TomTom Map API">
                  <MKBox
                    component="a"
                    href="https://developer.tomtom.com/maps-sdk-web-js/documentation"
                    target="_blank"
                  >
                    <MKBox component="img" src={tomTomApi} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Real Estate API">
                  <MKBox
                    component="a"
                    href="https://rapidapi.com/apidojo/api/realty-in-us/"
                    target="_blank"
                  >
                    <MKBox component="img" src={apiDojo} width="100%" />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Download;