import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import green from '@material-ui/core/colors/green';

import Osman from "./diensten/osman/osman.jsx";
import Remco from "./diensten/remco/remco.jsx";
import HomeIcon from '@material-ui/icons/Home';
import Monthbar from "./monthbar.jsx"
import orange from '@material-ui/core/colors/orange';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 3 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    /*height: '100%',*/
    /*position: 'fixed',
    minHeight: 200,*/
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
  fabOrange: {
    color: theme.palette.common.white,
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[600],
    },
  },
});

class Rooster extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <HomeIcon />,
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <HomeIcon />,
      },
      {
        color: 'inherit',
        className: classNames(classes.fab, classes.fabGreen),
        icon: <HomeIcon />,
      },
      {
        color: 'primary',
        className: classNames (classes.fab, classes.fabOrange),
        icon: <HomeIcon />,
      },
    ];

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="paper">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab icon={<PersonPinIcon />} label="OSMAN" />
            <Tab icon={<PersonPinIcon />} label="REMCO" />
            <Tab icon={<PersonPinIcon />} label="CENGIZ" />
            <Tab icon={<PersonPinIcon />} label="KUBILAY" />
          </Tabs>
          <Monthbar />
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Remco /></TabContainer>
          <TabContainer dir={theme.direction}><Remco /></TabContainer>
          <TabContainer dir={theme.direction}><Osman /></TabContainer>
          <TabContainer dir={theme.direction}><Osman /></TabContainer>
        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={this.state.value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${this.state.value === index ? transitionDuration.exit : 0}ms`,
            }}
            unmountOnExit
          >
            <Fab className={fab.className} color={fab.color}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </div>
    );
  }
}

Rooster.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Rooster);
