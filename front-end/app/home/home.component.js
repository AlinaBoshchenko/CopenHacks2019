"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_camera_1 = require("nativescript-camera");
var image_source_1 = require("tns-core-modules/image-source");
var request_translation_service_1 = require("~/services/src/app/request-translation.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(translationService) {
        this.translationService = translationService;
        this.language = 'da';
    }
    HomeComponent.prototype.onTakePictureTap = function (args) {
        var _this = this;
        nativescript_camera_1.requestPermissions().then(function () { return _this.capture(); }, function () { return alert('permissions rejected'); });
    };
    HomeComponent.prototype.capture = function () {
        var _this = this;
        nativescript_camera_1.takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: true })
            .then(function (imageAsset) {
            // convert ImageAsset to ImageSource
            image_source_1.fromAsset(imageAsset).then(function (res) {
                var base64Image = res.toBase64String("png");
                var src = "data:image/png;base64," + base64Image;
                _this.sendPicture(src);
            });
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    HomeComponent.prototype.sendPicture = function (image) {
        var data = {
            'language': this.language,
            'image': image
        };
        this.translationService.requestTranslation(data);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [request_translation_service_1.RequestTranslationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyREFBc0U7QUFFdEUsOERBQXVFO0FBQ3ZFLDhGQUF5RjtBQVN6RjtJQUVJLHVCQUFvQixrQkFBNkM7UUFBN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQjtRQUUxRCxhQUFRLEdBQVcsSUFBSSxDQUFDO0lBRnNDLENBQUM7SUFJdEUsd0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBS0M7UUFKRyx3Q0FBa0IsRUFBRSxDQUFDLElBQUksQ0FDckIsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLEVBQ3BCLGNBQU0sT0FBQSxLQUFLLENBQUMsc0JBQXNCLENBQUMsRUFBN0IsQ0FBNkIsQ0FDdEMsQ0FBQztJQUNOLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQUEsaUJBWUM7UUFYRyxpQ0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQy9FLElBQUksQ0FBQyxVQUFDLFVBQXNCO1lBQ3pCLG9DQUFvQztZQUNwQyx3QkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQzFCLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLElBQU0sR0FBRyxHQUFHLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUNyQixJQUFNLElBQUksR0FBRztZQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFqQ1EsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FJMEMsdURBQXlCO09BRnhELGFBQWEsQ0FrQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVBpY3R1cmUsIHJlcXVlc3RQZXJtaXNzaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21Bc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHtSZXF1ZXN0VHJhbnNsYXRpb25TZXJ2aWNlfSBmcm9tIFwifi9zZXJ2aWNlcy9zcmMvYXBwL3JlcXVlc3QtdHJhbnNsYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFJlcXVlc3RUcmFuc2xhdGlvblNlcnZpY2UpIHsgfVxuXG4gICAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgPSAnZGEnO1xuXG4gICAgb25UYWtlUGljdHVyZVRhcChhcmdzKSB7XG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmNhcHR1cmUoKSxcbiAgICAgICAgICAgICgpID0+IGFsZXJ0KCdwZXJtaXNzaW9ucyByZWplY3RlZCcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2FwdHVyZSgpIHtcbiAgICAgICAgdGFrZVBpY3R1cmUoeyB3aWR0aDogMjUwLCBoZWlnaHQ6IDMwMCwga2VlcEFzcGVjdFJhdGlvOiB0cnVlLCBzYXZlVG9HYWxsZXJ5OiB0cnVlIH0pXG4gICAgICAgICAgICAudGhlbigoaW1hZ2VBc3NldDogSW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgSW1hZ2VBc3NldCB0byBJbWFnZVNvdXJjZVxuICAgICAgICAgICAgICAgIGZyb21Bc3NldChpbWFnZUFzc2V0KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gcmVzLnRvQmFzZTY0U3RyaW5nKFwicG5nXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIiArIGJhc2U2NEltYWdlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRQaWN0dXJlKHNyYyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VuZFBpY3R1cmUoaW1hZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgJ2xhbmd1YWdlJzogdGhpcy5sYW5ndWFnZSxcbiAgICAgICAgICAgICdpbWFnZSc6IGltYWdlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLnJlcXVlc3RUcmFuc2xhdGlvbihkYXRhKTtcbiAgICB9XG59XG4iXX0=