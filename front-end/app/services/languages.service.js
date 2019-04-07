"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var LanguagesService = /** @class */ (function () {
    function LanguagesService(http) {
        this.http = http;
    }
    LanguagesService.prototype.getLanguages = function () {
        //const url = '../data/languages.json';
        var url = 'https://translation.googleapis.com/language/translate/v2/languages';
        return this.http.get(url);
    };
    LanguagesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LanguagesService);
    return LanguagesService;
}());
exports.LanguagesService = LanguagesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5ndWFnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBZ0Q7QUFHaEQ7SUFFRSwwQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsdUNBQVksR0FBWjtRQUNFLHVDQUF1QztRQUN2QyxJQUFNLEdBQUcsR0FBRyxvRUFBb0UsQ0FBQztRQUNqRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFSVSxnQkFBZ0I7UUFENUIsaUJBQVUsRUFBRTt5Q0FHZSxpQkFBVTtPQUZ6QixnQkFBZ0IsQ0FVNUI7SUFBRCx1QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIGdldExhbmd1YWdlcygpIHtcbiAgICAvL2NvbnN0IHVybCA9ICcuLi9kYXRhL2xhbmd1YWdlcy5qc29uJztcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly90cmFuc2xhdGlvbi5nb29nbGVhcGlzLmNvbS9sYW5ndWFnZS90cmFuc2xhdGUvdjIvbGFuZ3VhZ2VzJztcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xuICB9XG5cbn1cbiJdfQ==