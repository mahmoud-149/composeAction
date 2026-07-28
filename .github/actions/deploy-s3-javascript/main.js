const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')
function start(){
  core.notice('hello from my custom javascript action!')

}



start()