import * as React from "react";
import { Provider } from "react-redux" // eslint-disable-line no-unused-vars
import Home from "./routes/home/content" // eslint-disable-line no-unused-vars
import { combineReducers, createStore } from "redux"
import optionsButtonsReducer from "./simulator/options/buttons/buttons.reducer";
import sliderHorizontelReducer from "./simulator/slider/slider.reducer";
import optionsInputReducer from "./simulator/options/input/input.reducer";
import optionsDropDownReducer from "./simulator/options/dropdown/dropdown.reducer";
import { AppConfig } from "../config";
import simulatorReducer from "./simulator/simulatorReducer";
import sendProposalModalReducer from "./modal/send-proposal/send-proposal.modal.reducer";
import { BrowserRouter, Route } from 'react-router-dom';
import PartnerRoute from "./routes/partner/partner";
import partnerReducer from "./partner/partnerReducer";
import Presentation from "./presentation/presentation";
import 'bootstrap';

document.title = AppConfig.title;

const reducers = combineReducers({
  optionsButtons: optionsButtonsReducer,
  slider: sliderHorizontelReducer,
  optionsInput: optionsInputReducer,
  simulator: simulatorReducer,
  sendProposalModal: sendProposalModalReducer,
  optionsDropDown: optionsDropDownReducer,
  partner: partnerReducer
});

export default class Main extends React.Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/partner" component={PartnerRoute} />
          <Route path="/presentation" component={Presentation} />
        </BrowserRouter>
      </Provider>
    )
  }
}
