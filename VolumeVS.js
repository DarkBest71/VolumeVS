//Plugin VolumeVS son pour PC , fait par Avatar Rousseau ( Dark-Best )
exports.action = function(data, callback, config){

// Verify config
config = config.modules.VolumeVS;
if (!config.os_version)
{
console.log("Missing Volume config");
return;
}

console.log("Volume config complete");

var exec = require('child_process').exec;
  
if (data.soundValue == "hpon") 
{
var command = "mutesysVolumeVS 0";
}
if (data.soundValue == "hpoff") 
{
var command = "mutesysVolumeVS 1";
}
if (data.soundValue == "monte") 
{
var command = "changesysVolumeVS 10000";
}
if (data.soundValue == "baisse") 
{
var command = "changesysVolumeVS -10000";
}
if (config.os_version == "32") 
{
var process = '%CD%/plugins/VolumeVS/bin/nircmdc.exe'; 
}
if (config.os_version == "64") 
{
var process = '%CD%/plugins/VolumeVS/bin/nircmdc64.exe'; 
}
process +=  ' '+ command;
//console.log(process);
var child = exec(process,
function (error, stdout, stderr) 
{
console.log(process);  
});
if (data.soundValue == "hpon") 
{
callback({'tts': "jallume le son de votre pc!"});
}
if (data.soundValue == "hpoff") 
{
callback({});
}
if (data.soundValue == "monte") 
{
callback({'tts': "je monte le son !"});
}
if (data.soundValue == "baisse") 
{
callback({'tts': "je baisse le son !"});
}
}
