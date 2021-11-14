"use strict";
exports.__esModule = true;
exports.Place = void 0;
var Place = /** @class */ (function () {
    function Place(provider, originalId, name, description, image, remoteness, coordinates, bookedDates, price) {
        this.provider = provider;
        this.originalId = originalId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.remoteness = remoteness;
        this.coordinates = coordinates;
        this.bookedDates = bookedDates;
        this.price = price;
    }
    Object.defineProperty(Place.prototype, "id", {
        get: function () {
            return this.provider + '-' + this.originalId;
        },
        enumerable: false,
        configurable: true
    });
    Place.prototype.isProvidedBy = function (providerName) {
        return this.provider === providerName;
    };
    return Place;
}());
exports.Place = Place;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtJQUNFLGVBQ21CLFFBQWdCLEVBQ2pCLFVBQWtCLEVBQ2xCLElBQVksRUFDWixXQUFtQixFQUNuQixLQUFhLEVBQ2IsVUFBa0IsRUFDbEIsV0FBcUIsRUFDckIsV0FBd0IsRUFDeEIsS0FBYTtRQVJaLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUMzQixDQUFDO0lBRUwsc0JBQUkscUJBQUU7YUFBTjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVNLDRCQUFZLEdBQW5CLFVBQW9CLFlBQW9CO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUM7SUFDeEMsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBsYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm92aWRlcjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBvcmlnaW5hbElkOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1hZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVtb3RlbmVzczogbnVtYmVyLFxuICAgIHB1YmxpYyByZWFkb25seSBjb29yZGluYXRlczogbnVtYmVyW10sXG4gICAgcHVibGljIHJlYWRvbmx5IGJvb2tlZERhdGVzOiBBcnJheTxEYXRlPixcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJpY2U6IG51bWJlclxuICApIHsgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlciArICctJyArIHRoaXMub3JpZ2luYWxJZDtcbiAgfVxuXG4gIHB1YmxpYyBpc1Byb3ZpZGVkQnkocHJvdmlkZXJOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wcm92aWRlciA9PT0gcHJvdmlkZXJOYW1lO1xuICB9XG59XG5cbiJdfQ==