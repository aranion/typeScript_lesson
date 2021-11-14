"use strict";
exports.__esModule = true;
exports.HttpHelper = void 0;
var HttpHelper = /** @class */ (function () {
    function HttpHelper() {
    }
    HttpHelper.fetchAsJson = function (input, init) {
        return fetch(input, init)
            .then(function (response) {
            return response.text();
        })
            .then(function (responseText) {
            return JSON.parse(responseText);
        });
    };
    return HttpHelper;
}());
exports.HttpHelper = HttpHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtJQUFBO0lBVUEsQ0FBQztJQVRlLHNCQUFXLEdBQXpCLFVBQW9DLEtBQWtCLEVBQUUsSUFBa0I7UUFDeEUsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzthQUN0QixJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2IsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFXLFVBQUMsWUFBWTtZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZxQixnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwSGVscGVyIHtcbiAgcHVibGljIHN0YXRpYyBmZXRjaEFzSnNvbjxSZXNwb25zZT4oaW5wdXQ6IFJlcXVlc3RJbmZvLCBpbml0PzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIGZldGNoKGlucHV0LCBpbml0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICB9KVxuICAgICAgLnRoZW48UmVzcG9uc2U+KChyZXNwb25zZVRleHQpID0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgIH0pXG4gIH1cbn1cblxuIl19