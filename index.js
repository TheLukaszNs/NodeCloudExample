const nodeCloud = require('nodecloud');
const gcpProvider = nodeCloud.getProvider(
  'google',
  'E:\\Lukasz\\Programming\\GCI\\nodecloud-gcp-dry-run'
);

// const googleSDK = gcpProvider.getSDK()

console.log(gcpProvider);
