function myPromise() {
    var _this = this;
    let PENDING = "pending";
    let REJECTED = 'rejected';
    let RESOLVED = 'resolved';
    _this.resolvedCallback = [];
    _this.rejectedCallback = [];
    _this.status = PENDING;
    _this.value=undefined;
    //本来加在prototype上
}