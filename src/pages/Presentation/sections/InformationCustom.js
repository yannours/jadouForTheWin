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
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
// import MKBox from 'components/MKBox';

// Material Kit 2 React examples
import RotatingCard from 'examples/Cards/RotatingCard';
import RotatingCardFront from 'examples/Cards/RotatingCard/RotatingCardFront';
import RotatingCardBack from 'examples/Cards/RotatingCard/RotatingCardBack';
// import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard';

// Images
// import bgFront from 'assets/images/rotating-card-bg-front.jpeg';
import jadou001 from 'assets/images/jadou001.jpg';
import jadou002 from 'assets/images/Jadouchanteuse.png';
import jadou003 from 'assets/images/jadoudés.jpg';
import bgBack from 'assets/images/greybg.jpg';

function InformationCustom() {
  return (
    <Grid container item xs={12} spacing={6} alignItems="center" sx={{ padding: '24px' }}>
      <Grid item xs={12} lg={4}>
        <RotatingCard>
          <RotatingCardFront
            color={'themePrimary'}
            image={jadou001}
            icon="palette"
            title={
              <>
                Venez découvrir
                <br />
                Mes costumes
              </>
            }
            description="Mon travail de costumière de la stop motion aux spectacles de Music-hall."
          />
          <RotatingCardBack
            color={'themePrimary'}
            image={bgBack}
            title="En apprendre plus"
            description1={
              "J'ai travaillé dans le milieu de la stop motion a plusieurs reprises. Pour des costumes de marionettes et des accéssoires."
            }
            description2={
              "J'ai aussi travaillé plusieurs années en atelier sur des costumes de spectacles music-hall et des costumes pour des particuliers."
            }
            description3={'Broderie & couture main et ou machine.'}
            action={{
              type: 'internal',
              route: '/sections/sewing',
              label: 'Mes costumes',
            }}
          />
        </RotatingCard>
      </Grid>
      <Grid item xs={12} lg={4}>
        <RotatingCard>
          <RotatingCardFront
            color={'themeSecondary'}
            image={jadou002}
            icon="mic"
            title={
              <>
                Venez découvrir
                <br />
                Mes chansons
              </>
            }
            description="Ma passion pour le chant depuis petite fille à aujourd'hui."
          />
          <RotatingCardBack
            color={'themeSecondary'}
            image={bgBack}
            title="En apprendre plus"
            description1={
              "J'ai chanté depuis petite et j'ai commencé les cours avec des cours de chant lyrique à la fin du collège."
            }
            description2={
              "Au fil des années j'ai pris des cours divers, chanté avec des amis et fait des concerts."
            }
            description3={'Broderie & couture main et ou machine.'}
            action={{
              type: 'internal',
              route: '/sections/songs',
              label: 'Mes chansons',
            }}
          />
        </RotatingCard>
      </Grid>
      <Grid item xs={12} lg={4}>
        <RotatingCard>
          <RotatingCardFront
            color={'primary'}
            image={jadou003}
            icon="handyman"
            title={
              <>
                Venez découvrir
                <br />
                Mes créations
              </>
            }
            description="Le croisement de mes loisirs et de mon travail, mes créations."
          />
          <RotatingCardBack
            color={'primary'}
            image={bgBack}
            title="En apprendre plus"
            description1={
              "J'aime faire du crochet et du tricot, je réalise régulièrement des peluches, des vêtements etc."
            }
            description2={
              "Amatrice de JDR, joueuse et maître du jeu j'affectionne d'avoir des dés toujours adaptés aussi je les réalise moi même."
            }
            description3={'Bricolages, résine & crochet / tricots.'}
            action={{
              type: 'internal',
              route: '/sections/creations',
              label: 'Mes créations',
            }}
          />
        </RotatingCard>
      </Grid>
    </Grid>
  );
}

export default InformationCustom;
