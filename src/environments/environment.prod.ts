// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  appVersion: 'v1.0.0',
  USERDATA_KEY: 'accTokenSps',
  isMockEnabled: true,
  apiUrl: 'https://bazargahadmin-uat.bki.ir/backendserver/api/admin',
  apiDownloadUrl: 'https://bazargahadmin-uat.bki.ir/backendserver',
  appThemeName: 'sps',

  appPurchaseUrl: '',
  appHTMLIntegration: '',
  appPreviewUrl: '',
  appPreviewAngularUrl: '',
  appPreviewDocsUrl: '',
  appPreviewChangelogUrl: '',
  appDemos: {
    demo1: {
      title: '',
      description: '',
      published: true,
      thumbnail: '',
    },
  },
};
