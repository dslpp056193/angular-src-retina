# Angular "src-retina" module
Adds `src-retina` directive, for support retina-images.

![version](https://img.shields.io/badge/version-1.0.2-green.svg?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)

## Installation

### NPM
If you want to use this plugin locally, install it by npm command:

```
npm install angular-src-retina
```
or
```
yarn add angular-src-retina
```

### CDN
You can just add a script from CDN:

```
<script src="https://cdn.rawgit.com/dslpp056193/angular-src-retina/77ae3308/angular-src-retina.js"></script>
```

### Add module
Don't forgot to add this module in your app:
```
var yourApp = angular.module('yourApp', [ /*...your modules...*/, 'src-retina']);
```

## Usage

You can use `src-retina` attribute for create retina-ready links.

Example:

```
<img src-retina="/path/to/img.png">
```

And if user's screen is retina, this `img` tag will get attr `src` with `/path/to/img@2x.png`.
**Note: if `/path/to/img@2x.png` will not found, plugin will adds `/path/to/img.png`**
But if user's screen is not retina, this `img` tag will get `/path/to/img.png`.

**`src-retina` attribute will removed after added `src` attribute**

## Configs
Plugin will have configs in future.

## TODO
* Add config with alternative postfix instead of "@2x"

## Help with module
I will pleased, if you will send pull-requests with a new functional or with fixes!

## License
This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate
You can help me and support this project with  [paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=MTXAUGWFGFLYW&lc=US&item_name=For%20support%20project&item_number=me&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted) or Bitcoin  `33yhTK5BnKj6MZ3wf4GFEQgCtmWtqNwJHU`