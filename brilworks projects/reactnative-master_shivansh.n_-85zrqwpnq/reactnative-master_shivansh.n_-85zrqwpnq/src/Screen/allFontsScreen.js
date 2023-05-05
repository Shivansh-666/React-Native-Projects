import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import fontScreenStyle from '../Styles/fontsStyle';
function AllFontsScreen(props) {
  return (
    <ScrollView>
      <Text style={fontScreenStyle.heading}>Greetings, Everyone.</Text>
      <Text style={fontScreenStyle.subHeading}>
        React Navigation is made up of some core utilities and those are then
        used by navigators to create the navigation structure in your app. Don't
        worry too much about this for now, it'll become clear soon enough! To
        frontload the installation work, let's also install and configure
        dependencies used by most navigators, then we can move forward with
        starting to write some code.
      </Text>
      <Text style={fontScreenStyle.content}>
        Note: You might get warnings related to peer dependencies after
        installation. They are usually caused by incorrect version ranges
        specified in some packages. You can safely ignore most warnings as long
        as your app builds.
      </Text>
      <Text style={fontScreenStyle.paragraph}>
        hat follows within the Fundamentals section of this documentation is a
        tour of the most important aspects of React Navigation. It should cover
        enough for you to know how to build your typical small mobile
        application,
      </Text>
    </ScrollView>
  );
}

export default AllFontsScreen;
