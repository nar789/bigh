'use strict';

require("core-js/modules/es6.regexp.replace");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

;

_asyncToGenerator(function* () {
  const argvs = process.argv;
  console.log('\n\nbigh@1.0.0(last updated at 2019-2-5) created by HUME.\n\n');

  if (argvs.length < 3) {
    console.log('Usage: bigh <config file>\n\n');
    return;
  }

  const config_path = argvs[2];

  let cfg = require('./ctl/ctl_config').init(config_path);

  let util = require('./utils');

  let file = require('./ctl/ctl_file');

  const repeat = cfg.repeat;
  const base = cfg.base;
  const target_len = cfg.target.length;
  const copy_folder = cfg.copy_folder;

  for (var i = 1; i <= repeat; i++) {
    if (copy_folder) yield util.copy_folder(base, i);

    for (var j = 0; j < target_len; j++) {
      let path = base + i + '/' + cfg.target[j];
      file.read(path);
      let data = file.get();
      let chg_data = util.rep_all(data, cfg.replace, i);
      file.set(chg_data);
      file.write(path);
    }
  }

  console.log('\n\n  all process successed.\n\n');
})();