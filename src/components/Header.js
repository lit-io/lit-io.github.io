import React, { Fragment, PureComponent } from 'react';
import cx from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = {
  imageContainer: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



function Nav(props) {
  const { classes, toggleNav } = props;

  return (
    <Drawer open={true} onClose={toggleNav}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleNav}
        onKeyDown={toggleNav}
      >
        <div className={classes.list}>
          <List>
            <Link to="/dashboard" style={{textDecoration: "none"}}>
              <ListItem button>
                <ListItemText primary="Dashboard"/>
              </ListItem>
            </Link>
          </List>
          
          <Divider />
          <List>
            <Link to="/goals" style={{textDecoration: "none"}}>
              <ListItem button>
               <ListItemText primary="Goals" />
               
              </ListItem>
            </Link>
            </List>
          <List>
            <Link to="/badges" style={{textDecoration: "none"}}>
              <ListItem button>
                <ListItemText primary="Badges" />
    
              </ListItem>
            </Link>
          </List>
        </div>
      </div>
    </Drawer>
  );
}

const NavWithStyles = withStyles({
  list: {
    width: 200,
  },
})(Nav);

class Header extends PureComponent {
  state = {
    isNavOpen: false,
  };
  
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    const { classes } = this.props;
  
    return (
      <Fragment>
        <AppBar color="default" position="sticky">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleNav}>
              <MenuIcon />
            </IconButton>
            <div className={classes.imageContainer} style={{width: '96px', height: '50px'}}>
              <img src='https://trello-attachments.s3.amazonaws.com/5cc3b3ab05f0502203b2d3b1/5cc4daf6f7ece274d9dd1093/8e95c51d8188908f75289f9a59fad871/Litio_logo.png' style={{height: '6em', width: 'auto'}} />
            </div>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">LOGOUT</Button>
          </Toolbar>
        </AppBar>
  
        {this.state.isNavOpen && <NavWithStyles toggleNav={this.toggleNav} />}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);