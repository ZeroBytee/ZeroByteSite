import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/navbar.js';
import Footer from './components/Footer.js';
import Grid from './components/Grid.js';
import {makeStyles} from "@material-ui/core/styles"
import {Toolbar, Typography} from "@material-ui/core"
import './App.css';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HammerIcon from '@material-ui/icons/Gavel';
import SettingsIcon from '@material-ui/icons/Settings';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import WifiIcon from '@material-ui/icons/Wifi';



const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});


const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "1.50rem",
  },
  littleSpace2:{
    marginTop: "1.10rem",
    fontWeight: "bold",
  },
  littleSpace3:{
    marginTop: "1.05rem",
    marginBottom: "1.05rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
  Name: {
    fontWeight: "bold",
    fontSize: 30,
    cursor: "pointer",
    fontSize: "72",
    color:  "#ff3d00"
},

})


function App() {
  const classes = styles(); 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
         <NavBar/>
         <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At ZeroByte Studios we mainly focus on improving your experience.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            We are a small indie minecraft plugin development team, that creates minecraft plugins that will help with moderation and make your lives easier.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace2} color="primary">
            Here are some of the things we focus on
          </Typography>
        </div>
         <div className={`${classes.grid} ${classes.littleSpace2}`}>
          <Grid icon={<PeopleAltIcon style={{fill: "#0d47a1", height:"125", width:"125"}}/>}  title="Good Support" btnLink="https://discord.gg/HFSChcEJSk" btnTitle="Join Discord" />
          <Grid icon={<EventNoteIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Frequent Updates" btnLink="https://www.spigotmc.org/resources/minicore-your-new-minimalistic-core-plugin.97530/updates" btnTitle="MiniCore's Update Log"/>
          <Grid icon={<WifiIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Lightweight plugins" btnLink="https://bstats.org/plugin/bukkit/miniCore/13215" btnTitle="Check Out bStats"/>
        </div>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.littleSpace2} color="primary">
             some of MiniCore's features
          </Typography>
        </div>      
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<HammerIcon style={{fill: "#0d47a1", height:"125", width:"125"}}/>}  title="Ban GUI" btnLink="https://app.gitbook.com/s/9vVRmpgRl0lN8rwQwbJz/bangui" btnTitle="Show me More" />
          <Grid icon={<SportsEsportsIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Small MiniGames" btnLink="https://app.gitbook.com/s/9vVRmpgRl0lN8rwQwbJz/taggame" btnTitle="Show me More"/>
          <Grid icon={<SettingsIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Core Features" btnLink="https://app.gitbook.com/s/9vVRmpgRl0lN8rwQwbJz/commands" btnTitle="Show me More"/>
        </div>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.littleSpace2} color="primary">
             Some other plugins.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          😭 We currently have only one plugin 😭
          </Typography>
          <Typography variant="h5" className={classes.littleSpace3} color="primary">
          😄 But we are going to code some more so stay tuned! 😄
          </Typography>
        </div>
        <Footer/>
         
      </ThemeProvider>
    </div>
  );
}


export default App;
