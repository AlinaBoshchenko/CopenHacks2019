"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_camera_1 = require("nativescript-camera");
var image_source_1 = require("tns-core-modules/image-source");
var request_translation_service_1 = require("~/services/request-translation.service");
var languages_service_1 = require("~/services/languages.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(translationService, languageService) {
        this.translationService = translationService;
        this.languageService = languageService;
        this.selectLanguage = false;
        this.languages = ['Lithuanian', 'Danish', 'Russian', 'English'];
        this.language = 'da';
        /*this.languageService.getLanguages().subscribe(
            result => {
                console.log('languages: ', result);
                //this.languages = result;
            },
            error => {
                console.log('error in fetching languages: ', error);
            }
        );*/
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
    HomeComponent.prototype.onSelectLanguage = function () {
        this.selectLanguage = true;
    };
    HomeComponent.prototype.onItemTap = function (language) {
        console.log('language: ', language);
        this.language = language;
        this.selectLanguage = false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [request_translation_service_1.RequestTranslationService,
            languages_service_1.LanguagesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywyREFBc0U7QUFFdEUsOERBQXVFO0FBQ3ZFLHNGQUFpRjtBQUNqRixrRUFBOEQ7QUFTOUQ7SUFLSSx1QkFBb0Isa0JBQTZDLEVBQzdDLGVBQWlDO1FBRGpDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBSnJELG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLGNBQVMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBZXBELGFBQVEsR0FBVyxJQUFJLENBQUM7UUFYM0I7Ozs7Ozs7O1lBUUk7SUFDUixDQUFDO0lBSUQsd0NBQWdCLEdBQWhCLFVBQWlCLElBQUk7UUFBckIsaUJBS0M7UUFKRyx3Q0FBa0IsRUFBRSxDQUFDLElBQUksQ0FDckIsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLEVBQ3BCLGNBQU0sT0FBQSxLQUFLLENBQUMsc0JBQXNCLENBQUMsRUFBN0IsQ0FBNkIsQ0FDdEMsQ0FBQztJQUNOLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQUEsaUJBWUM7UUFYRyxpQ0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQy9FLElBQUksQ0FBQyxVQUFDLFVBQXNCO1lBQ3pCLG9DQUFvQztZQUNwQyx3QkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQzFCLElBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLElBQU0sR0FBRyxHQUFHLHdCQUF3QixHQUFHLFdBQVcsQ0FBQztnQkFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUNyQixJQUFNLElBQUksR0FBRztZQUNULFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN6QixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLFFBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUF6RFEsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FPMEMsdURBQXlCO1lBQzVCLG9DQUFnQjtPQU41QyxhQUFhLENBMER6QjtJQUFELG9CQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FtZXJhJztcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcbmltcG9ydCB7IEltYWdlU291cmNlLCBmcm9tQXNzZXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7UmVxdWVzdFRyYW5zbGF0aW9uU2VydmljZX0gZnJvbSBcIn4vc2VydmljZXMvcmVxdWVzdC10cmFuc2xhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0xhbmd1YWdlc1NlcnZpY2V9IGZyb20gXCJ+L3NlcnZpY2VzL2xhbmd1YWdlcy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cbiAgICBzZWxlY3RMYW5ndWFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxhbmd1YWdlcyA9IFsnTGl0aHVhbmlhbicsICdEYW5pc2gnLCAnUnVzc2lhbicsICdFbmdsaXNoJ107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogUmVxdWVzdFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VzU2VydmljZSkge1xuICAgICAgICAvKnRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldExhbmd1YWdlcygpLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhbmd1YWdlczogJywgcmVzdWx0KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubGFuZ3VhZ2VzID0gcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgaW4gZmV0Y2hpbmcgbGFuZ3VhZ2VzOiAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7Ki9cbiAgICB9XG5cbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyA9ICdkYSc7XG5cbiAgICBvblRha2VQaWN0dXJlVGFwKGFyZ3MpIHtcbiAgICAgICAgcmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbihcbiAgICAgICAgICAgICgpID0+IHRoaXMuY2FwdHVyZSgpLFxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoJ3Blcm1pc3Npb25zIHJlamVjdGVkJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjYXB0dXJlKCkge1xuICAgICAgICB0YWtlUGljdHVyZSh7IHdpZHRoOiAyNTAsIGhlaWdodDogMzAwLCBrZWVwQXNwZWN0UmF0aW86IHRydWUsIHNhdmVUb0dhbGxlcnk6IHRydWUgfSlcbiAgICAgICAgICAgIC50aGVuKChpbWFnZUFzc2V0OiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29udmVydCBJbWFnZUFzc2V0IHRvIEltYWdlU291cmNlXG4gICAgICAgICAgICAgICAgZnJvbUFzc2V0KGltYWdlQXNzZXQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0SW1hZ2UgPSByZXMudG9CYXNlNjRTdHJpbmcoXCJwbmdcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiICsgYmFzZTY0SW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFBpY3R1cmUoc3JjKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kUGljdHVyZShpbWFnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAnbGFuZ3VhZ2UnOiB0aGlzLmxhbmd1YWdlLFxuICAgICAgICAgICAgJ2ltYWdlJzogaW1hZ2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2UucmVxdWVzdFRyYW5zbGF0aW9uKGRhdGEpO1xuICAgIH1cblxuICAgIG9uU2VsZWN0TGFuZ3VhZ2UoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0TGFuZ3VhZ2UgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsYW5ndWFnZTogJywgbGFuZ3VhZ2UpO1xuICAgICAgICB0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgIHRoaXMuc2VsZWN0TGFuZ3VhZ2UgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=