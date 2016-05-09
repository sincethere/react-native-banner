
## Installation

First you need to install react-native-banner:

```javascript
npm install react-native-banner --save

```

## Usage

```javascript
import Banner from 'react-native-banner';

<Banner
    banners={this.banners}
    defaultIndex={this.defaultIndex}
    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
    intent={this.clickListener.bind(this)}
/>

```

android and ios normal use,
For more details, please see [example code](./example/index.ios.js)

the [Swiper](./Swiper.js)  is from author [@xiaoyangchao](https://github.com/xiaoyangchao)/ [https://github.com/xiaoyangchao/react-native-swiper](https://github.com/xiaoyangchao/react-native-swiper)

(base of [https://github.com/leecade/react-native-swiper](https://github.com/leecade/react-native-swiper))

## Screenshot
![](./images/banner_demo_ios.gif)
![](./images/banner_demo_android.gif)


## Run example

```javascript
cd ./example && npm install
react-native run-ios
react-native run-android

```
