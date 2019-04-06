"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_camera_1 = require("nativescript-camera");
var image_source_1 = require("tns-core-modules/image-source");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.language = 'da';
    }
    HomeComponent.prototype.onTakePictureTap = function (args) {
        var _this = this;
        nativescript_camera_1.requestPermissions().then(function () { return _this.capture(); }, function () { return alert('permissions rejected'); });
    };
    HomeComponent.prototype.capture = function () {
        var _this = this;
        nativescript_camera_1.takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: false })
            .then(function (imageAsset) {
            // convert ImageAsset to ImageSource
            var imageSource = new image_source_1.ImageSource();
            imageSource.fromAsset(imageAsset).then(function (res) {
                var base64Image = res.toBase64String("png");
                var src = "data:image/png;base64," + base64Image;
                _this.sendPicture(src);
            });
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    HomeComponent.prototype.sendPicture = function (picture) {
        console.log('picture: ', picture);
        console.log('language: ', this.language);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyREFBc0U7QUFFdEUsOERBQXVFO0FBU3ZFO0lBRUk7UUFFTyxhQUFRLEdBQVcsSUFBSSxDQUFDO0lBRmYsQ0FBQztJQUlqQix3Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBSTtRQUFyQixpQkFLQztRQUpHLHdDQUFrQixFQUFFLENBQUMsSUFBSSxDQUNyQixjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsRUFDcEIsY0FBTSxPQUFBLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUE3QixDQUE2QixDQUN0QyxDQUFDO0lBQ04sQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFBQSxpQkFhQztRQVpHLGlDQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDaEYsSUFBSSxDQUFDLFVBQUMsVUFBVTtZQUNiLG9DQUFvQztZQUNwQyxJQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztZQUN0QyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ3RDLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLElBQU0sR0FBRyxHQUFHLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksT0FBZTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQS9CUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUVXLGFBQWEsQ0FnQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVBpY3R1cmUsIHJlcXVlc3RQZXJtaXNzaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXQnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UsIGZyb21Bc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nID0gJ2RhJztcblxuICAgIG9uVGFrZVBpY3R1cmVUYXAoYXJncykge1xuICAgICAgICByZXF1ZXN0UGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5jYXB0dXJlKCksXG4gICAgICAgICAgICAoKSA9PiBhbGVydCgncGVybWlzc2lvbnMgcmVqZWN0ZWQnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNhcHR1cmUoKSB7XG4gICAgICAgIHRha2VQaWN0dXJlKHsgd2lkdGg6IDI1MCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogZmFsc2UgfSlcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29udmVydCBJbWFnZUFzc2V0IHRvIEltYWdlU291cmNlXG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZS5mcm9tQXNzZXQoaW1hZ2VBc3NldCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IHJlcy50b0Jhc2U2NFN0cmluZyhcInBuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIgKyBiYXNlNjRJbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUGljdHVyZShzcmMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbmRQaWN0dXJlKHBpY3R1cmU6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZygncGljdHVyZTogJywgcGljdHVyZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYW5ndWFnZTogJywgdGhpcy5sYW5ndWFnZSk7XG4gICAgfVxufVxuIl19