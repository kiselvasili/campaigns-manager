import angular from 'angular';
import Navbar from './navbar/navbar';
import Constants from '../constants/constant';
// import Services from  '../services/services';

let commonModule = angular.module('app.common', [
  // Services,
  Constants,
  Navbar
])
  
.name;

export default commonModule;
