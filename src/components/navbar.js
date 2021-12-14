import React from 'react'
import CustomBtn from "./CustomBtn"
import {Toolbar, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"



const styles = makeStyles({
    bar:{
        paddingTop: "0.40rem",
        paddingBottom: "0.40rem",
        backgroundColor: "#2196f3",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    menuItem: {
        cursor: "pointer",
        color:  "#efefef",
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
    Name: {
        fontWeight: "bold",
        cursor: "pointer",
        color:  "#fff",  
        flexGrow: 1,
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})



function Navbar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                
                 <Typography variant="h6" className={classes.menuItem}>
                    Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Updates
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Wiki
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Spigot 
                </Typography>
                <Typography onClick={Discord} variant="h6" className={classes.menuItem}>
                    Discord 
                </Typography>
                <a href="https://www.spigotmc.org/resources/minicore-your-new-minimalistic-core-plugin.97530/" target="_blank">
                <CustomBtn txt="Download MiniCore"/>
                </a>
            </Toolbar>
    )
}


function Discord() {
  window.location.href = "https://discord.gg/HFSChcEJSk";
}

export default Navbar
