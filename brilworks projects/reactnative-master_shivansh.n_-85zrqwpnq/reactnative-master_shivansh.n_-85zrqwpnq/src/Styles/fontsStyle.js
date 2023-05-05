import {StyleSheet} from 'react-native';

const fontScreenStyle = StyleSheet.create({
  heading: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'PTSansNarrow-Bold',
    fontSize: 40,
    color: 'orange',
    marginBottom: 10,
  },
  subHeading: {
    flex: 1,
    fontFamily: 'PTSansNarrow-Regular',
    fontSize: 30,
    margin: 10,
    color: '#D88505',
  },
  content: {
    flex: 1,
    fontFamily: 'ShadowsIntoLight-Regular',
    fontSize: 25,
    color: '#19DEE5',
  },
  paragraph: {
    flex: 1,
    fontFamily: 'Nabla-cool',
    color: '#EB0198',
    fontSize: 25,
  },
});

export default fontScreenStyle;
