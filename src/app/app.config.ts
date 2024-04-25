import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {getPerformance, providePerformance} from '@angular/fire/performance';
import {getStorage, provideStorage} from '@angular/fire/storage';

const customProviders = [
  {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
]

export const appConfig: ApplicationConfig = {
  providers: [
    ...customProviders,
    provideRouter(routes),
    provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({
      "projectId": "lerra-auth",
      "appId": "1:595575711994:web:b300c17946c0410f56c143",
      "storageBucket": "lerra-auth.appspot.com",
      "apiKey": "AIzaSyCLC7eGf4Mhx396P6oBmn-CTCx7wpvLa7k",
      "authDomain": "lerra-auth.firebaseapp.com",
      "messagingSenderId": "595575711994",
      "measurementId": "G-GVVHX76P9S"
    }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideStorage(() => getStorage()))
  ]
};
