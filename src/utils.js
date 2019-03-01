'use strict';

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.constructor");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

;

(function () {
  exports.rep_all = function (data, str_list, itr) {
    console.log("replacing...");
    let out = data;

    for (var i = 0; i < str_list.length; i++) {
      let re = new RegExp("bigh" + i, 'g');
      let rep_str = str_list[i];

      if (Array.isArray(rep_str)) {
        rep_str = rep_str[itr - 1];
      }

      console.log("bigh" + i + " --> " + rep_str);
      out = out.replace(re, rep_str);
    }

    console.log("bighi --> " + itr);
    out = out.replace(/bighi/g, itr);

    var rstr = require('randomstring');

    var rstr_gen = rstr.generate({
      length: 6,
      capitalization: 'lowercase'
    });
    console.log("bighr --> " + 'a' + rstr_gen);
    out = out.replace(/bighr/g, 'a' + rstr_gen);
    console.log("replacing is complete.");
    return out;
  };

  exports.rep_all_test = function () {
    let test_data = "bigh0uccebigh0bigh0bighibighi";
    let test_list = ["s"];
    const test_out = exports.rep_all(test_data, test_list, 7);
    console.log("\ntest data : [" + test_data + "]\n");
    console.log("test result : [" + test_out + "]\n\n");
  };

  exports.copy_folder =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(function* (base, itr) {
      let pre_base = base;
      if (pre_base.slice(-1) == "/") pre_base = pre_base.substring(0, pre_base.length - 1);
      const copy_path = pre_base + itr;

      const execSync = require("child_process").execSync;

      try {
        const _ref2 = yield execSync("cmd /c bigh-copy.bat " + base + " " + copy_path),
              stdout = _ref2.stdout,
              stderr = _ref2.stderr;
      } catch (err) {
        console.log('copyfolder_err' + err);
      }

      console.log('[' + copy_path + '] folder copied success');
    });

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  exports.copy_folder_test =
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    let test_base = "../test/bin/a";
    let test_itr = 3;
    yield exports.copy_folder(test_base, test_itr);
    console.log('copy_folder test success!' + '\n\n');
  });
  exports.test =
  /*#__PURE__*/
  _asyncToGenerator(function* () {
    console.log('\n\n  <all utill tests start>\n\n');
    console.log('=====================\n\n  rep_all_test() start..\n\n');
    exports.rep_all_test(); //console.log('=====================\n\n  copy_folder_test() start..\n\n');
    //await exports.copy_folder_test();

    console.log('=====================\n\n  all utill tests passed.\n\n');
  });
})();