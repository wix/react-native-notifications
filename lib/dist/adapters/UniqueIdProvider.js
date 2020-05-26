"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class UniqueIdProvider {
    generate() {
        return parseInt(_.uniqueId());
    }
}
exports.UniqueIdProvider = UniqueIdProvider;
