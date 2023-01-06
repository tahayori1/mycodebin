const fs = require('fs')
const path = require('path')
var folderPath = '../'

var flist = fs.readdirSync(folderPath);
flist.forEach((a)=>{
try {
  fs.renameSync(folderPath + a, folderPath + decodeURIComponent(a) )
} catch (err) {
  console.error(err)
}
});
