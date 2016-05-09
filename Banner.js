'use strict';

import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    PropTypes
} from 'react-native';

import Swiper from './Swiper';
const screenWidth = Dimensions.get('window').width;

class Banner extends React.Component {

    static propTypes: {
        banners: PropTypes.array.isRequired,
        intent: PropTypes.func,
        onMomentumScrollEnd: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.images = props.banners.map((banner) => banner.image);
        this.titles = props.banners.map((banner) => banner.title);
    }

    render() {
        let imageViews = this.images.map((image, index) => {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    style={{flex: 1}}
                    key={'b_image_'+index}
                    onPress={
                        () => {
                            this.props.intent && this.props.intent(index, this.banners);
                            // this.props.banners[index].intent && this.props.banners[index].intent(index);
                        }
                    }
                >
                    <Image style={styles.image} source={typeof(image) == 'string' ? {uri: image} : image} />
                </TouchableOpacity>
            );
        });

        return (
            <Swiper
              {...this.props}
              autoplay={true}
              whRatio={1.9}
              dotStyle={{width: 6, height: 6, backgroundColor:'rgba(255,255,255,.3)'}}
              activeDotStyle={{width: 6, height: 6, backgroundColor:'white'}}
              renderTitle={
                  (index, view) => {
                      if (!this.titles[index]) {
                          return null;
                      }
                      return (
                          <View key={index} style={styles.titleView}>
                              <View style={styles.titleBg} />
                              <Text style={styles.titleStyle} numberOfLines={1}>
                                  {this.titles[index]}
                              </Text>
                          </View>
                      );
                  }
              }
              paginationStyle={{
                    bottom: 10, left: null, right: 10
              }}
              loop={true}
            >
                {imageViews}
            </Swiper>
        );
    }



}

const styles = StyleSheet.create({
    titleView: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        height: 35,
        width: screenWidth,
    },
    titleBg: {
        backgroundColor: 'rgba(0,0,0,.4)',
        position: 'absolute',
        bottom: 0,
        height: 35,
        width: screenWidth,
    },
    titleStyle: {
        color: 'white',
        marginRight: 100,
        marginLeft: 10,
    },
    image: {
        flex: 1,
    },
});

module.exports = Banner;
