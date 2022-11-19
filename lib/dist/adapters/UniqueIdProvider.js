"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueIdProvider = void 0;
const _ = require("lodash");
class UniqueIdProvider {
    generate() {
        return parseInt(_.uniqueId());
    }
}
exports.UniqueIdProvider = UniqueIdProvider;
