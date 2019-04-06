import { Component } from '@angular/core';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource, fromAsset } from "tns-core-modules/image-source";
import {RequestTranslationService} from "~/services/src/app/request-translation.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(private translationService: RequestTranslationService) { }

    public language: string = 'da';

    onTakePictureTap(args) {
        requestPermissions().then(
            () => this.capture(),
            () => alert('permissions rejected')
        );
    }

    capture() {
        takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: true })
            .then((imageAsset: ImageAsset) => {
                // convert ImageAsset to ImageSource
                fromAsset(imageAsset).then(res => {
                    const base64Image = res.toBase64String("png");
                    const src = "data:image/png;base64," + base64Image;
                    this.sendPicture(src);
                })
            }, (error) => {
                console.log("Error: " + error);
            });
    }

    sendPicture(image: string) {
        const data = {
            'language': this.language,
            'image': image
        };
        this.translationService.requestTranslation(data);
    }
}
