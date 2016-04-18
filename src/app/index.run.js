(function() {
  'use strict';

  angular
    .module('testwebapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
