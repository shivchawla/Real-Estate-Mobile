import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

import { Scene, Router, Actions } from 'react-native-router-flux';

const PropertyDetail = ({ propertyProp }) => { // destructure
    // Pull title, artist and thumbnail_image from album
    const { pId, title, artist, thumbnail_image, pImage, image, url } = propertyProp;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

    if(pImage){
        var img = `https://naszpolskidom.azurewebsites.net${pImage}`;
    } else {
        var img = "https://naszpolskidom.azurewebsites.net/dashboard/img/house.gif";
    }

    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: img }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Actions.propertyView({ id: pId })}>
                    View Property
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: { // Image will not render without a height and width
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null // Image will stretch full width
    }
};

export default PropertyDetail;