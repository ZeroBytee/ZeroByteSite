import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction href="https://github.com/ZeroBytee/ZeroByteSite" color="red" label="Github" value="recents" icon={<GitHubIcon  style={{fill: "#212121"}}/>} />
          <BottomNavigationAction href="https://twitter.com/StudiosZeroBlox" label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
          <BottomNavigationAction onClick={clickMe} label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "#c4302b"}}/>} />
        </BottomNavigation>
)
}
function clickMe() {
  alert("We don't have a active youtube channel at this time, but we do have a discord if you want to contact us or get helped.");
}

export default Footer