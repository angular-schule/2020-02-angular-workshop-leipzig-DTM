"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function () {
        var _this = this;
        setTimeout(function () {
            console.log('ID ist', _this.theId);
        }, 2000);
        return '';
    };
    Object.defineProperty(Customer.prototype, "theId", {
        get: function () {
            console.log('theID getter');
            return this.id.toString();
        },
        set: function (foo) {
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map