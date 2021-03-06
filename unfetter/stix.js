"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stix_core_1 = require("../stix/stix-core");
/**
 * @description unfetter definition of stix
 * @see {StixCore}
 * @see https://oasis-open.github.io/cti-documentation/
 * @see https://oasis-open.github.io/cti-documentation/stix/intro
 * @see https://stixproject.github.io/
 */
var Stix = /** @class */ (function (_super) {
    __extends(Stix, _super);
    function Stix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stix;
}(stix_core_1.StixCore));
exports.Stix = Stix;
var ExpandedStix = /** @class */ (function (_super) {
    __extends(ExpandedStix, _super);
    function ExpandedStix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ExpandedStix;
}(stix_core_1.StixExpanded));
exports.ExpandedStix = ExpandedStix;
