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
var stix_core_1 = require("./stix-core");
var stix_core_enum_1 = require("./stix-core.enum");
/**
 *
 */
var IntrusionSet = /** @class */ (function (_super) {
    __extends(IntrusionSet, _super);
    /**
     *
     * @param data
     */
    function IntrusionSet(data) {
        var _this = _super.call(this, data) || this;
        _this.type = stix_core_enum_1.StixCoreEnum.INTRUSION_SET;
        return _this;
    }
    return IntrusionSet;
}(stix_core_1.StixExpanded));
exports.IntrusionSet = IntrusionSet;