const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')
function start(){
  const bucket = core.getInput('bucket',{required: true})
  const bucket_region = core.getInput("bucker-region", {required: true});
  const distFolder = core.getInput("dist-folder", { required: true });
  
  const s3Uri= `s3://${bucket}`
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucket_region}`)
   
  const websiteUrl = `http://${bucket}.s3-website-${bucket_region}.amazonaws.com`
  core.setOutput('website-url',websiteUrl)
}



start()