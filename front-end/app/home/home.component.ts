import { Component } from '@angular/core';
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource, fromAsset } from "tns-core-modules/image-source";
import {RequestTranslationService} from "~/services/request-translation.service";
import {LanguagesService} from "~/services/languages.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    selectLanguage: boolean = false;
    languages = ['Lithuanian', 'Danish', 'Russian', 'English'];

    constructor(private translationService: RequestTranslationService,
                private languageService: LanguagesService) {
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

    onSelectLanguage() {
        this.selectLanguage = true;
    }

    onItemTap(language: string) {
        console.log('language: ', language);
        this.language = language;
        this.selectLanguage = false;
    }
}
