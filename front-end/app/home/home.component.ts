import { Component } from '@angular/core';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource, fromAsset } from "tns-core-modules/image-source";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor() { }

    public language: string = 'da';

    onTakePictureTap(args) {
        requestPermissions().then(
            () => this.capture(),
            () => alert('permissions rejected')
        );
    }

    capture() {
        takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: false })
            .then((imageAsset) => {
                // convert ImageAsset to ImageSource
                const imageSource = new ImageSource();
                imageSource.fromAsset(imageAsset).then(res => {
                    const base64Image = res.toBase64String("png");
                    const src = "data:image/png;base64," + base64Image;
                    this.sendPicture(src);
                })
            }, (error) => {
                console.log("Error: " + error);
            });
    }

    sendPicture(picture: string) {
        console.log('picture: ', picture);
        console.log('language: ', this.language);
    }
}
