/**
 * @fileoverview 限制 windicss 顺序的校验
 * @author yousmellnice-custom
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");
// import all rules in lib/rules
module.exports = {
    rules,
    configs: {}
}



