/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import style from '../Styles/CounterStyle';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Switch,
} from 'react-native';
import '../locales/index';

const {height, width} = Dimensions.get('window');

function Home(props) {
  const {t, i18n} = useTranslation();
  const [isEnabled, setIsEnabled] = useState(false);

  // storing image in variable
  const englishImage = '../Images/english.jpeg';
  const hindiImage = '../Images/hindi.png';

  // toggle switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // if enable change to hindi otherwise english
  useEffect(() => {
    if (isEnabled) {
      i18n.changeLanguage('hi');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n, isEnabled]);
  return (
    <View style={style.mainContent}>
      <View>
        <Image
          source={!isEnabled ? require(englishImage) : require(hindiImage)}
          style={{height: height / 2.5, width: width}}
        />
      </View>

      <View style={style.textView}>
        <Text style={[style.textLang, style.textHeading]}>
          {t('locale.heading')}
        </Text>
      </View>
      <Text style={style.textLang}>{t('locale.message')}</Text>
      <View style={style.switchView}>
        <Text>English</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#2874A6' : ' #2874A6'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{margin: 0, padding: 0}}
        />
        <Text>हिंदी</Text>
      </View>
      <TouchableOpacity
        style={style.langButton}
        onPress={() => props.navigation.navigate('menu')}>
        <Text style={[style.textLang, {color: 'white'}]}>
          {t('locale.submit')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
