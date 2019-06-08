import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import WizardOne from "./Components/Wizard/WizardOne"
import WizardTwo from "./Components/Wizard/WizardTwo"
import WizardThree from "./Components/Wizard/WizardThree"


export default (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/wizard/step1" component={WizardOne}  />
      <Route path="/wizard/step2" component={WizardTwo}/>
      <Route path="/wizard/step3" component={WizardThree}/>
    </Switch>
  );