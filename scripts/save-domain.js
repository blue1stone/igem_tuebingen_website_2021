'use strict';
const fs = require('fs');
const upath = require('upath');

// const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
const destPath = upath.resolve(upath.dirname(__filename), '../docs/CNAME');

fs.writeFileSync(destPath, "www.igem-tuebingen.org");