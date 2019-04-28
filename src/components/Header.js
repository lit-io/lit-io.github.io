import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

// icons
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import CheckIcon from '@material-ui/icons/CheckBox';
import DashboardIcon from '@material-ui/icons/Equalizer';
import FeedbackIcon from '@material-ui/icons/ContactSupport';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import MoneyIcon from '@material-ui/icons/MoneyOff';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import StarIcon from '@material-ui/icons/Star';

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
      <div tabIndex={0} role="button" onClick={toggleNav} onKeyDown={toggleNav}>
        <div className={classes.list}>
          <List>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <DashboardIcon />
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link to="/alerts" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <NotificationsIcon />
                <ListItemText primary="Alerts" />
              </ListItem>
            </Link>
          </List>
          <Divider />

          <List>
            <Link to="/goals" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <CheckIcon />
                <ListItemText primary="Goals" />
              </ListItem>
            </Link>
            <Link to="/rewards" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <StarIcon />
                <ListItemText primary="Rewards" />
              </ListItem>
            </Link>
            <Link to="/badges" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <BookmarksIcon />
                <ListItemText primary="Badges" />
              </ListItem>
            </Link>
          </List>
          <Divider />

          <List>
            <Link to="/offers" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <MoneyIcon />
                <ListItemText primary="Offers" />
              </ListItem>
            </Link>
            <Link to="/social" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <GroupIcon />
                <ListItemText primary="Social" />
              </ListItem>
            </Link>
            <Link to="/settings" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <SettingsIcon />
                <ListItemText primary="Settings" />
              </ListItem>
            </Link>
            <Link to="/support" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <FeedbackIcon />
                <ListItemText primary="Support" />
              </ListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <InfoIcon />
                <ListItemText primary="About" />
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
    width: 210,
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
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleNav}
            >
              <MenuIcon />
            </IconButton>
            <div
              className={classes.imageContainer}
              style={{ width: '96px', height: '50px' }}
            >
              <Link to="/dashboard">
                <img
                  src="logo.png"
                  style={{ height: '6em', width: 'auto' }}
                  alt="Logo"
                />
              </Link>
            </div>
            <Button color="inherit" component={Link} to="/">
              ABOUT
            </Button>
            <Button color="inherit" component={Link} to="#">
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>

        {this.state.isNavOpen && <NavWithStyles toggleNav={this.toggleNav} />}
      </Fragment>
    );
  }
}

export default withStyles(styles)(Header);
