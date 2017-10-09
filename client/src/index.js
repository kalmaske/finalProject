

import React from "react";

import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
// import routesApp from "./routesApp";


const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
