"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var RequestTranslationService = /** @class */ (function () {
    function RequestTranslationService(http) {
        this.http = http;
    }
    RequestTranslationService.prototype.requestTranslation = function (data) {
        var url = '/translation.json';
        console.log('url: ', url);
        console.log('data: ', data);
        return this.http.post(url, data);
    };
    RequestTranslationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RequestTranslationService);
    return RequestTranslationService;
}());
exports.RequestTranslationService = RequestTranslationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdC10cmFuc2xhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFnRDtBQUdoRDtJQUVJLG1DQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxzREFBa0IsR0FBbEIsVUFBbUIsSUFBWTtRQUMzQixJQUFNLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBVFEseUJBQXlCO1FBRHJDLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLHlCQUF5QixDQVdyQztJQUFELGdDQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RUcmFuc2xhdGlvblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIHJlcXVlc3RUcmFuc2xhdGlvbihkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgY29uc3QgdXJsID0gJy90cmFuc2xhdGlvbi5qc29uJztcbiAgICAgICAgY29uc29sZS5sb2coJ3VybDogJywgdXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGE6ICcsIGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBkYXRhKTtcbiAgICB9XG5cbn1cbiJdfQ==