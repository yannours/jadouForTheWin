/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
// import MKSocialButton from 'components/MKSocialButton';

// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
// import DefaultFooter from 'examples/Footers/DefaultFooter';
// import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard';

// Presentation page sections
// import Counters from 'pages/Presentation/sections/Counters';
// import Information from 'pages/Presentation/sections/Information';
// import DesignBlocks from 'pages/Presentation/sections/DesignBlocks';
// import Pages from 'pages/Presentation/sections/Pages';
// import Testimonials from 'pages/Presentation/sections/Testimonials';
// import Download from 'pages/Presentation/sections/Download';
import InformationCustom from './sections/InformationCustom';

// Presentation page components

// Routes
import routes from 'routes';
// import footerRoutes from 'footer.routes';

// Images
import bgImage from 'assets/images/jadou_g_m.png';

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} light={false} />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients['dark'] ? gradients['dark'].main : gradients.info.main, 0.35),
              rgba(gradients['dark'] ? gradients['dark'].main : gradients.info.main, 0.35)
            )}, url(${bgImage})`,
          // backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="primary"
              mt={3}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['5xl'],
                },
              })}
            >
              Jade Van Den Boom{' '}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="themeFourth"
              textAlign="center"
              px={{ xs: 8, lg: 16 }}
              mt={1}
            >
              Costumière depuis plusieurs années, spécialisée dans la conception et réalisation de
              tenues de spectacles.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="themeFourth"
              textAlign="center"
              px={{ xs: 8, lg: 16 }}
              mt={1}
            >
              Brodeuse, bricoleuse, chanteuse & crocheteuse !
            </MKTypography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              marginTop: 8,
              backdropFilter: 'blur(8px)',
              background: 'rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '12px',
            }}
          >
            <InformationCustom />
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Presentation;
