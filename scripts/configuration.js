"use strict";

var SYS = {};
SYS.Root = 'http://localhost:8000';

// Module
SYS.UserModule = SYS.Root + '/p/users';
SYS.PlantModule = SYS.Root + '/p/plants';

// Services - User
SYS.UserQueryAll = SYS.UserModule + "/queryAll";

// Services - Plant
SYS.PlantQueryAll = SYS.PlantModule + "/queryAll";

// this can be used in all.
var testFun = function(){
  // alert(1);
};

angular.module('config', [])

  .constant(
  'ENV', {
    name: 'production',
    apiEndpoint: 'http://api.yoursite.com/'
  }
);
