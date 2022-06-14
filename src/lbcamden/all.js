import { nodeListForEach } from './common'
import LBCamdenHeader from './components/header/header'

function initAll (options) {
  // Set the options to an empty object by default if no options are passed.
  options = typeof options !== 'undefined' ? options : {}

  // Allow the user to initialise GOV.UK Frontend in only certain sections of the page
  // Defaults to the entire document if nothing is set.
  var scope = typeof options.scope !== 'undefined' ? options.scope : document

  var $LBCamdenHeaders = scope.querySelectorAll('[data-module="lbcamden-button"]')
  nodeListForEach($LBCamdenHeaders, function ($LBCamdenHeader) {
    new LBCamdenHeader($LBCamdenHeader).init()
  })
}

export {
  initAll,
  LBCamdenHeader
}
