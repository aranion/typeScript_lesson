"use strict";
exports.__esModule = true;
exports.SDKProvider = void 0;
var place_js_1 = require("../../domain/place.js");
var http_helper_js_1 = require("../../utils/http-helper.js");
var SDKProvider = /** @class */ (function () {
    function SDKProvider() {
    }
    SDKProvider.prototype.find = function (filter) {
        var _this = this;
        return http_helper_js_1.HttpHelper.fetchAsJson(SDKProvider.apiUrl
            + '/places?' +
            this.convertFilterToQueryString(filter))
            .then(function (response) {
            _this.assertIsValidResponse(response);
            return _this.convertPlaceListResponse(response);
        });
    };
    SDKProvider.prototype.getById = function (id) {
        var _this = this;
        return http_helper_js_1.HttpHelper.fetchAsJson(SDKProvider.apiUrl + '/place/' + id)
            .then(function (response) {
            _this.assertIsValidResponse(response);
            return _this.convertPlaceResponse(response.item);
        });
    };
    SDKProvider.prototype.assertIsValidResponse = function (response) {
        if (response.errorMessage != null) {
            throw new Error(response.errorMessage);
        }
    };
    SDKProvider.prototype.convertFilterToQueryString = function (filter) {
        return "city=" + filter.city + "&priceLimit=" + filter.priceLimit + "&checkInDate=" + filter.checkInDate + "&checkOutDate=" + filter.checkOutDate;
    };
    SDKProvider.prototype.convertPlaceListResponse = function (response) {
        var _this = this;
        return response.items.map(function (item) {
            return _this.convertPlaceResponse(item);
        });
    };
    SDKProvider.prototype.convertPlaceResponse = function (item) {
        return new place_js_1.Place(SDKProvider.provider, String(item.id), item.title, item.details, item.photos[0], null, item.coordinates, item.bookedDates, item.price);
    };
    SDKProvider.provider = 'SDK';
    SDKProvider.apiUrl = 'http://localhost:3000';
    return SDKProvider;
}());
exports.SDKProvider = SDKProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2RrLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2RrLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUE4QztBQUc5Qyw2REFBd0Q7QUFHeEQ7SUFBQTtJQXFEQSxDQUFDO0lBakRRLDBCQUFJLEdBQVgsVUFBWSxNQUFvQjtRQUFoQyxpQkFVQztRQVRDLE9BQU8sMkJBQVUsQ0FBQyxXQUFXLENBQzNCLFdBQVcsQ0FBQyxNQUFNO2NBQ2hCLFVBQVU7WUFDWixJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQ3hDO2FBQ0UsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNwQyxPQUFPLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsRUFBVTtRQUF6QixpQkFNQztRQUxDLE9BQU8sMkJBQVUsQ0FBQyxXQUFXLENBQWdCLFdBQVcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUM5RSxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3BDLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTywyQ0FBcUIsR0FBN0IsVUFBOEIsUUFBMkM7UUFDdkUsSUFBSSxRQUFRLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFTyxnREFBMEIsR0FBbEMsVUFBbUMsTUFBb0I7UUFDckQsT0FBTyxVQUFRLE1BQU0sQ0FBQyxJQUFJLG9CQUFlLE1BQU0sQ0FBQyxVQUFVLHFCQUFnQixNQUFNLENBQUMsV0FBVyxzQkFBaUIsTUFBTSxDQUFDLFlBQWMsQ0FBQztJQUNySSxDQUFDO0lBRU8sOENBQXdCLEdBQWhDLFVBQWlDLFFBQTJCO1FBQTVELGlCQUlDO1FBSEMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDN0IsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU8sMENBQW9CLEdBQTVCLFVBQTZCLElBQWM7UUFDekMsT0FBTyxJQUFJLGdCQUFLLENBQ2QsV0FBVyxDQUFDLFFBQVEsRUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFDZixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDZCxJQUFJLEVBQ0osSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FDWCxDQUFDO0lBQ0osQ0FBQztJQW5EYSxvQkFBUSxHQUFHLEtBQUssQ0FBQztJQUNoQixrQkFBTSxHQUFHLHVCQUF1QixDQUFDO0lBbURsRCxrQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhY2UgfSBmcm9tICcuLi8uLi9kb21haW4vcGxhY2UuanMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9kb21haW4vcHJvdmlkZXIuanMnO1xuaW1wb3J0IHsgU2VhcmNoRmlsdGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NlYXJjaC1maWx0ZXIuanMnO1xuaW1wb3J0IHsgSHR0cEhlbHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAtaGVscGVyLmpzJztcbmltcG9ydCB7IFBsYWNlUmVzcG9uc2UsIFBsYWNlTGlzdFJlc3BvbnNlLCBQbGFjZSBhcyBTREtQbGFjZSB9IGZyb20gJy4vcmVzcG9uc2UuanMnO1xuXG5leHBvcnQgY2xhc3MgU0RLUHJvdmlkZXIgaW1wbGVtZW50cyBQcm92aWRlciB7XG4gIHB1YmxpYyBzdGF0aWMgcHJvdmlkZXIgPSAnU0RLJztcbiAgcHJpdmF0ZSBzdGF0aWMgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG5cbiAgcHVibGljIGZpbmQoZmlsdGVyOiBTZWFyY2hGaWx0ZXIpOiBQcm9taXNlPFBsYWNlW10+IHtcbiAgICByZXR1cm4gSHR0cEhlbHBlci5mZXRjaEFzSnNvbjxQbGFjZUxpc3RSZXNwb25zZT4oXG4gICAgICBTREtQcm92aWRlci5hcGlVcmxcbiAgICAgICsgJy9wbGFjZXM/JyArXG4gICAgICB0aGlzLmNvbnZlcnRGaWx0ZXJUb1F1ZXJ5U3RyaW5nKGZpbHRlcilcbiAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5hc3NlcnRJc1ZhbGlkUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRQbGFjZUxpc3RSZXNwb25zZShyZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2V0QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxQbGFjZT4ge1xuICAgIHJldHVybiBIdHRwSGVscGVyLmZldGNoQXNKc29uPFBsYWNlUmVzcG9uc2U+KFNES1Byb3ZpZGVyLmFwaVVybCArICcvcGxhY2UvJyArIGlkKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuYXNzZXJ0SXNWYWxpZFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UGxhY2VSZXNwb25zZShyZXNwb25zZS5pdGVtKVxuICAgICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgYXNzZXJ0SXNWYWxpZFJlc3BvbnNlKHJlc3BvbnNlOiBQbGFjZUxpc3RSZXNwb25zZSB8IFBsYWNlUmVzcG9uc2UpOiB2b2lkIHtcbiAgICBpZiAocmVzcG9uc2UuZXJyb3JNZXNzYWdlICE9IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29udmVydEZpbHRlclRvUXVlcnlTdHJpbmcoZmlsdGVyOiBTZWFyY2hGaWx0ZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgY2l0eT0ke2ZpbHRlci5jaXR5fSZwcmljZUxpbWl0PSR7ZmlsdGVyLnByaWNlTGltaXR9JmNoZWNrSW5EYXRlPSR7ZmlsdGVyLmNoZWNrSW5EYXRlfSZjaGVja091dERhdGU9JHtmaWx0ZXIuY2hlY2tPdXREYXRlfWA7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRQbGFjZUxpc3RSZXNwb25zZShyZXNwb25zZTogUGxhY2VMaXN0UmVzcG9uc2UpOiBQbGFjZVtdIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0UGxhY2VSZXNwb25zZShpdGVtKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRQbGFjZVJlc3BvbnNlKGl0ZW06IFNES1BsYWNlKTogUGxhY2Uge1xuICAgIHJldHVybiBuZXcgUGxhY2UoXG4gICAgICBTREtQcm92aWRlci5wcm92aWRlcixcbiAgICAgIFN0cmluZyhpdGVtLmlkKSxcbiAgICAgIGl0ZW0udGl0bGUsXG4gICAgICBpdGVtLmRldGFpbHMsXG4gICAgICBpdGVtLnBob3Rvc1swXSxcbiAgICAgIG51bGwsXG4gICAgICBpdGVtLmNvb3JkaW5hdGVzLFxuICAgICAgaXRlbS5ib29rZWREYXRlcyxcbiAgICAgIGl0ZW0ucHJpY2UsXG4gICAgKTtcbiAgfVxufVxuXG4iXX0=