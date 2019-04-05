
import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
// import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// import { bugs, website, server } from "variables/general.jsx";

import {
  salesChart,
  taskssChart,
  donutChart,
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import GridLayout from 'react-grid-layout';

class Graphs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        layout : [
          {i: 'a', x: 0, y: 0, w:3, h:1},
          {i: 'b', x: 0, y: 4, w: 2, h:1},
          {i: 'c', x: 2, y: 4, w: 1, h:1},
          {i: 'd', x: 0, y: 8, w: 1, h:1},
          {i: 'e', x: 1, y: 8, w: 1, h:1},
          {i: 'f', x: 2, y: 8, w: 1, h:1}
        ],
        change : true
    }


  };

  onResizeStop = ()=> {
    this.setState ({change : false})
  };

  render() {
    const { classes } = this.props;
    return (
      <GridLayout
        className=""
        layout={this.state.layout}
        cols={3} rowHeight={350} width={1050} autoSize= {true}
        onResizeStop ={this.onResizeStop}
         >
        <div key="b" isResizable = {true} >
            <Card chart>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
              <h4 className={classes.cardTitle}>Hourly Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
           </Card>
          </div>
          <div key="c" isResizable = {true} >
            <Card chart>
              <CardHeader color="rose">
                <ChartistGraph
                  className="ct-chart"
                  data={donutChart.data}
                  type="Pie"
                  options={donutChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={donutChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Users Engagement</h4>
                <p className={classes.cardCategory}>
                  Per hour user engagement
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Updated every 1 hour
                </div>
              </CardFooter>
            </Card>
          </div>
          <div key="d" isResizable = {true} >
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={salesChart.data}
                  type="Line"
                  options={salesChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={salesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </div>
          <div key="e" isResizable = {true}>
           <Card chart>
            <CardHeader color="success">
             <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={dailySalesChart.animation}
                 />
             </CardHeader>
              <CardBody>
               <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
             </Card>
            </div>
            <div key="f" isResizable = {true} >
              <Card chart>
                <CardHeader color="warning">
                  <ChartistGraph
                    className="ct-chart"
                    data={emailsSubscriptionChart.data}
                    type="Bar"
                    options={emailsSubscriptionChart.options}
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={emailsSubscriptionChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                  <p className={classes.cardCategory}>
                    Last Campaign Performance
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> campaign sent 2 days ago
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div key="a" isResizable = {true} >
              <Card chart>
                <CardHeader color="primary">
                  <ChartistGraph
                    className="ct-chart"
                    data={taskssChart.data}
                    type="Line"
                    options={taskssChart.options}
                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Growth Chart</h4>
                  <p className={classes.cardCategory}>
                    Comparision to last year sales
                  </p>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> Updated every year
                  </div>
                </CardFooter>
              </Card>
            </div>
      </GridLayout>
    )
  }
}

Graphs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Graphs);
