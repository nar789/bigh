# bigh-cli

[![Build Status](https://travis-ci.org/nar789/bigh.svg?branch=master)](https://travis-ci.org/nar789/bigh) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Tool help you to make skeleton-project.

## Usage
```bash
c:\> bigh <config_file>

/* For example */

c:\> bigh config
```
## Config Generate Tool
```bash
c:\test> bigh-create

"config file generated."

c:\test> dir
2019-01-01 PM 05:05 <DIR>      Aproj
2019-01-01 PM 05:05        85 config
c:\> _
```
## Config
```javascript
{
	"base":"c:\test\Aproj",
	//this is base folder.
	
	"repeat":3,
	//repeat count. 
	//It will generate Aproj1,Aproj2,Aproj3 folder.
	
	"copy_folder":true or false,
	//if set true, It do copy base folder and replace all macro string of sources in the folder. 
	//if set false, It just replace all macro string of sources in the folder already copied.
	
	"target":["manifest.xml","src/Main.java","src/utils/Apple.java"],
	//These are list of target source files that will be replaced all macro string.
	
	"replace":["com.games.soccer","#665934",["game1","game2","game3"]]
	/*	it will be replace as like next below.
		"bigh0" -> "com.games.soccer"
		"bigh1" -> "#665934"
		"bigh2" in Aproj1 -> "game1"
		"bigh2" in Aproj2 -> "game2"
		"bigh2" in Aproj3 -> "game3"
	
	(default)
		"bighi" in Aproj1 -> "1"
		"bighi" in Aproj2 -> "2"
		"bighi" in Aproj3 -> "3"
		"bighr" -> random string. (ex. a776Bc8)
	
	left side is string of base project source files.
	right side is string of new project copied.*/
}
```
## LICENSE
bigh-cli is licensed under the MIT license.