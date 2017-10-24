import angular from 'angular';
import Navbar from './navbar/navbar';
import Constants from '../constants/constant';
import Services from '../services/services';

let commonModule = angular.module('app.common', [
  Constants,
  Navbar,
  Services
])
  
.name;

export default commonModule;
