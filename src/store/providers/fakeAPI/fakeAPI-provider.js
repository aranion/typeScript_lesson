"use strict";
exports.__esModule = true;
exports.FakeAPIProvider = void 0;
var place_js_1 = require("../../domain/place.js");
var http_helper_js_1 = require("../../utils/http-helper.js");
var FakeAPIProvider = /** @class */ (function () {
    function FakeAPIProvider() {
    }
    FakeAPIProvider.prototype.find = function (filter) {
        var _this = this;
        return http_helper_js_1.HttpHelper.fetchAsJson(FakeAPIProvider.apiUrl
            + '/reservationAP?' +
            this.convertFilterToQueryString(filter))
            .then(function (response) {
            _this.assertIsValidResponse(response);
            return _this.convertPlaceListResponse(response);
        });
    };
    FakeAPIProvider.prototype.getById = function (id) {
        var _this = this;
        return http_helper_js_1.HttpHelper.fetchAsJson(FakeAPIProvider.apiUrl + '/place/' + id)
            .then(function (response) {
            _this.assertIsValidResponse(response);
            return _this.convertPlaceResponse(response.item);
        });
    };
    FakeAPIProvider.prototype.assertIsValidResponse = function (response) {
        if (response.errorMessage != null) {
            throw new Error(response.errorMessage);
        }
    };
    FakeAPIProvider.prototype.convertFilterToQueryString = function (filter) {
        return "city=" + filter.city + "&priceLimit=" + filter.priceLimit + "&checkInDate=" + filter.checkInDate + "&checkOutDate=" + filter.checkOutDate;
    };
    FakeAPIProvider.prototype.convertPlaceListResponse = function (response) {
        var _this = this;
        return response.items.map(function (item) {
            return _this.convertPlaceResponse(item);
        });
    };
    FakeAPIProvider.prototype.convertPlaceResponse = function (item) {
        return new place_js_1.Place(FakeAPIProvider.provider, String(item.id), item.name, item.description, item.image, item.remoteness, [], [], item.price);
    };
    FakeAPIProvider.provider = 'faceAPI';
    FakeAPIProvider.apiUrl = 'http://localhost:3000I';
    return FakeAPIProvider;
}());
exports.FakeAPIProvider = FakeAPIProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFrZUFQSS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZha2VBUEktcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0RBQThDO0FBRzlDLDZEQUF3RDtBQUd4RDtJQUFBO0lBcURBLENBQUM7SUFqRFEsOEJBQUksR0FBWCxVQUFZLE1BQW9CO1FBQWhDLGlCQVVDO1FBVEMsT0FBTywyQkFBVSxDQUFDLFdBQVcsQ0FDM0IsZUFBZSxDQUFDLE1BQU07Y0FDcEIsaUJBQWlCO1lBQ25CLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FDeEM7YUFDRSxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BDLE9BQU8sS0FBSSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxFQUFVO1FBQXpCLGlCQU1DO1FBTEMsT0FBTywyQkFBVSxDQUFDLFdBQVcsQ0FBZ0IsZUFBZSxDQUFDLE1BQU0sR0FBRyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ2xGLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDYixLQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDcEMsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVPLCtDQUFxQixHQUE3QixVQUE4QixRQUEyQztRQUN2RSxJQUFJLFFBQVEsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVPLG9EQUEwQixHQUFsQyxVQUFtQyxNQUFvQjtRQUNyRCxPQUFPLFVBQVEsTUFBTSxDQUFDLElBQUksb0JBQWUsTUFBTSxDQUFDLFVBQVUscUJBQWdCLE1BQU0sQ0FBQyxXQUFXLHNCQUFpQixNQUFNLENBQUMsWUFBYyxDQUFDO0lBQ3JJLENBQUM7SUFFTyxrREFBd0IsR0FBaEMsVUFBaUMsUUFBMkI7UUFBNUQsaUJBSUM7UUFIQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtZQUM3QixPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTyw4Q0FBb0IsR0FBNUIsVUFBNkIsSUFBa0I7UUFDN0MsT0FBTyxJQUFJLGdCQUFLLENBQ2QsZUFBZSxDQUFDLFFBQVEsRUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFDZixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFVBQVUsRUFDZixFQUFFLEVBQ0YsRUFBRSxFQUNGLElBQUksQ0FBQyxLQUFLLENBQ1gsQ0FBQztJQUNKLENBQUM7SUFuRGEsd0JBQVEsR0FBRyxTQUFTLENBQUM7SUFDcEIsc0JBQU0sR0FBRyx3QkFBd0IsQ0FBQztJQW1EbkQsc0JBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWNlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BsYWNlLmpzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3Byb3ZpZGVyLmpzJztcbmltcG9ydCB7IFNlYXJjaEZpbHRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zZWFyY2gtZmlsdGVyLmpzJztcbmltcG9ydCB7IEh0dHBIZWxwZXIgfSBmcm9tICcuLi8uLi91dGlscy9odHRwLWhlbHBlci5qcyc7XG5pbXBvcnQgeyBQbGFjZVJlc3BvbnNlLCBQbGFjZUxpc3RSZXNwb25zZSwgUGxhY2UgYXMgRmFrZUFQSVBsYWNlIH0gZnJvbSAnLi9yZXNwb25zZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBGYWtlQVBJUHJvdmlkZXIgaW1wbGVtZW50cyBQcm92aWRlciB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvdmlkZXIgPSAnZmFjZUFQSSc7XG4gIHByaXZhdGUgc3RhdGljIGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDBJJztcblxuICBwdWJsaWMgZmluZChmaWx0ZXI6IFNlYXJjaEZpbHRlcik6IFByb21pc2U8UGxhY2VbXT4ge1xuICAgIHJldHVybiBIdHRwSGVscGVyLmZldGNoQXNKc29uPFBsYWNlTGlzdFJlc3BvbnNlPihcbiAgICAgIEZha2VBUElQcm92aWRlci5hcGlVcmxcbiAgICAgICsgJy9yZXNlcnZhdGlvbkFQPycgK1xuICAgICAgdGhpcy5jb252ZXJ0RmlsdGVyVG9RdWVyeVN0cmluZyhmaWx0ZXIpXG4gICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuYXNzZXJ0SXNWYWxpZFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UGxhY2VMaXN0UmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8UGxhY2U+IHtcbiAgICByZXR1cm4gSHR0cEhlbHBlci5mZXRjaEFzSnNvbjxQbGFjZVJlc3BvbnNlPihGYWtlQVBJUHJvdmlkZXIuYXBpVXJsICsgJy9wbGFjZS8nICsgaWQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5hc3NlcnRJc1ZhbGlkUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRQbGFjZVJlc3BvbnNlKHJlc3BvbnNlLml0ZW0pXG4gICAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3NlcnRJc1ZhbGlkUmVzcG9uc2UocmVzcG9uc2U6IFBsYWNlTGlzdFJlc3BvbnNlIHwgUGxhY2VSZXNwb25zZSk6IHZvaWQge1xuICAgIGlmIChyZXNwb25zZS5lcnJvck1lc3NhZ2UgIT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmVycm9yTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0RmlsdGVyVG9RdWVyeVN0cmluZyhmaWx0ZXI6IFNlYXJjaEZpbHRlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBjaXR5PSR7ZmlsdGVyLmNpdHl9JnByaWNlTGltaXQ9JHtmaWx0ZXIucHJpY2VMaW1pdH0mY2hlY2tJbkRhdGU9JHtmaWx0ZXIuY2hlY2tJbkRhdGV9JmNoZWNrT3V0RGF0ZT0ke2ZpbHRlci5jaGVja091dERhdGV9YDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFBsYWNlTGlzdFJlc3BvbnNlKHJlc3BvbnNlOiBQbGFjZUxpc3RSZXNwb25zZSk6IFBsYWNlW10ge1xuICAgIHJldHVybiByZXNwb25zZS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRQbGFjZVJlc3BvbnNlKGl0ZW0pXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydFBsYWNlUmVzcG9uc2UoaXRlbTogRmFrZUFQSVBsYWNlKTogUGxhY2Uge1xuICAgIHJldHVybiBuZXcgUGxhY2UoXG4gICAgICBGYWtlQVBJUHJvdmlkZXIucHJvdmlkZXIsXG4gICAgICBTdHJpbmcoaXRlbS5pZCksXG4gICAgICBpdGVtLm5hbWUsXG4gICAgICBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgaXRlbS5pbWFnZSxcbiAgICAgIGl0ZW0ucmVtb3RlbmVzcyxcbiAgICAgIFtdLFxuICAgICAgW10sXG4gICAgICBpdGVtLnByaWNlLFxuICAgICk7XG4gIH1cbn1cblxuIl19