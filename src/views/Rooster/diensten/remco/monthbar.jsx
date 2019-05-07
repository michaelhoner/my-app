import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//scrollspy
import Scrollspy from 'react-scrollspy'

const styles = theme => ({
  root: {
    /*top: 78,
    position: 'sticky',*/
    padding: 10,
    /*justifyContent: 'stretch',
    justifyItems: 'stretch',
    display: 'flex',*/
  },
  flexBox: {
    display: 'flex',
  },
  buttonMonth: {
    textDecoration: 'none',
    padding: 0,
    color: '#000',
    flexGrow: 1,
    flexShrink: 1,
    display: 'inline-flex',
    alignItems: 'center',    
    justifyContent: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    /*width: '30px',
    height: '30px',*/
  },
  monthButton: {
    width: '35px',
    height: '35px',
    lineHeight: '1.9',
    /*alignItems: 'center',
    verticalAlign: 'middle',
    justifyContent: 'center',*/
  },
});

/*const styles = {
  appBar: {
    top: 78,
    position: 'fixed',
    zIndex: 1,
    width: '100%',
  },
};*/

function MonthBar(props) {
  const { classes } = props;

  return (
        <div className={classes.root}>
            <span>
              <Scrollspy className={classes.flexBox} style={{paddingLeft: 1}} items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6','section-7', 'section-8', 'section-9', 'section-10', 'section-11', 'section-12']} currentClassName="isCurrent" componentTag="div">                
                <a className={classes.buttonMonth} href="#section-1"><span className={classes.monthButton}>jan</span></a>
                <a className={classes.buttonMonth} href="#section-2"><span className={classes.monthButton}>feb</span></a>
                <a className={classes.buttonMonth} href="#section-3"><span className={classes.monthButton}>mrt</span></a>
                <a className={classes.buttonMonth} href="#section-4"><span className={classes.monthButton}>apr</span></a>
                <a className={classes.buttonMonth} href="#section-5"><span className={classes.monthButton}>mei</span></a>
                <a className={classes.buttonMonth} href="#section-6"><span className={classes.monthButton}>jun</span></a><br />
                </Scrollspy>
                </span>
                <span>
                <Scrollspy className={classes.flexBox} style={{paddingLeft: 1}} items={['section-7', 'section-8', 'section-9', 'section-10', 'section-11', 'section-12']} currentClassName="isCurrent" componentTag="div">
                <a className={classes.buttonMonth} href="#section-7"><span className={classes.monthButton}>jul</span></a>
                <a className={classes.buttonMonth} href="#section-8"><span className={classes.monthButton}>aug</span></a>
                <a className={classes.buttonMonth} href="#section-9"><span className={classes.monthButton}>sep</span></a>
                <a className={classes.buttonMonth} href="#section-10"><span className={classes.monthButton}>okt</span></a>
                <a className={classes.buttonMonth} href="#section-11"><span className={classes.monthButton}>nov</span></a>
                <a className={classes.buttonMonth} href="#section-12"><span className={classes.monthButton}>dec</span></a>
                </Scrollspy>
                </span>              
        </div>    
  );
}

MonthBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonthBar);
