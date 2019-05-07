import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Mei from "./maanden/mei.jsx";

const styles = theme => ({
  root: {
    width: '100%',
    /*marginTop: '-200px',*/
  },
  sectionMonth: {
    /*display: 'block',*/
    /*height: '92px',*/
    /*paddingTop: '162px',
    marginBottom: '-162px',*/
    /*visibility: 'visible',*/
  },
});
  

function Osman(props) {
  const { classes } = props;
//class Osman extends React.Component {

  
  //render() {    
    return (
        <div className={classes.root}>
          <section className={classes.sectionMonth} id="section-1"><h1>January</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-2"><h1>Februari</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-3"><h1>Maart</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-4"><h1>April</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-5"><h1>Mei</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-6"><h1>Juni</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-7"><h1>Juli</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-8"><h1>Augustus</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-9"><h1>September</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-10"><h1>Oktober</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-11"><h1>November</h1>
          <Mei />
          </section>
          <section className={classes.sectionMonth} id="section-12"><h1>December</h1>
          <Mei />
          </section>          
        </div>
    );
  }
  
//}

Osman.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Osman);
