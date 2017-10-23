import angular from 'angular';
import Navbar from './navbar/navbar';
import Constants from '../constants/constant';

let commonModule = angular.module('app.common', [
  Constants,
  Navbar
])
  
.name;

export default commonModule;
