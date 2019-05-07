import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
});

let id = 0;
function createData(dag, datum, feestdag, dienst) {
  id += 1;
  return { id, dag, datum, feestdag, dienst };
}

const rows = [
  createData('Ma', '1 apr', '', 'ochtend'),
  createData('Di', '2 apr', '', 'ochtend'),
  createData('Wo', '3 apr', '', 'ochtend'),
  createData('Do', '4 apr', '', 'middag'),
  createData('Vr', '5 apr', '', 'middag'),
  createData('Za', '6 apr', '', ''),
  createData('Zo', '7 apr', '', ''),
  createData('Ma', '8 apr', 'Bevrijdingsdag', 'ochtend'),
  createData('Di', '9 apr', '', 'ochtend'),
  createData('Wo', '10 apr', '', 'ochtend'),
  createData('Do', '11 apr', '', 'middag'),
  createData('Vr', '12 apr', '', 'middag'),
  createData('Za', '12 apr', '', ''),
  createData('Zo', '14 apr', '', ''),
  createData('Ma', '15 apr', '', 'ochtend'),
  createData('Di', '16 apr', '', 'ochtend'),
  createData('Wo', '17 apr', '', 'ochtend'),
  createData('Do', '18 apr', '', 'middag'),
  createData('Vr', '19 apr', '', 'middag'),
  createData('Za', '20 apr', '', ''),
  createData('Zo', '21 apr', '', ''),
  createData('Ma', '22 apr', '', 'ochtend'),
  createData('Di', '23 apr', '', 'ochtend'),
  createData('Wo', '24 apr', '', 'ochtend'),
  createData('Do', '25 apr', '', 'middag'),
  createData('Vr', '26 apr', '', 'middag'),
  createData('Za', '27 apr', '', ''),
  createData('Zo', '28 apr', '', ''),
  createData('Ma', '29 apr', '', ''),
  createData('Di', '30 apr', '', ''),
];

function Mei(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="dense">Dag</TableCell>
            <TableCell padding="none" align="left">Datum</TableCell>
            <TableCell padding="none" align="left"></TableCell>
            <TableCell padding="none" align="left">Dienst</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell padding="dense" align="justify" component="th" scope="row">
                {row.dag}
              </TableCell>
              <TableCell padding="none" align="left">{row.datum}</TableCell>
              <TableCell padding="none" align="left"><Typography variant="caption">{row.feestdag}</Typography></TableCell>
              <TableCell padding="none" align="left">{row.dienst}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}


Mei.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Mei);
