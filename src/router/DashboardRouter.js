import React from "react";
import { Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomeScreen from "./../components/home/HomeScreen";
import EgressScreen from "./../components/home/EgressScreen";
import EntryScreen from "./../components/home/EntryScreen";
import NewRecordScreen from "./../components/home/NewRecordScreen";
import Navbar from "./../components/ui/Navbar";
import RecordProvider from "../context/RecordProvider";

function DashboardRouter(props) {
  return (
    <>
      <Navbar />
      <RecordProvider>
        <div>
          <Switch>
            <PrivateRoute exact path="/home" component={HomeScreen} />
            <PrivateRoute exact path="/home/egress" component={EgressScreen} />
            <PrivateRoute exact path="/home/entry" component={EntryScreen} />
            <PrivateRoute exact path="/home/new" component={NewRecordScreen} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </RecordProvider>
    </>
  );
}

export default DashboardRouter;
