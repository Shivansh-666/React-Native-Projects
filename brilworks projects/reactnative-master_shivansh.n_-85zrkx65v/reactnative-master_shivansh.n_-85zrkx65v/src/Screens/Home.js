/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, createContext} from 'react';
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
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export const NameContext = createContext('context1');

function Home(props) {
  const {t, i18n} = useTranslation();
  const [isEnabled, setIsEnabled] = useState(false);
  const nav = useNavigation();

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
      <View style={style.homeTextView}>
        <Text style={[style.homeTextLang, style.homeTextHeading]}>
          {t('locale.heading')}
        </Text>
      </View>
      <Text style={style.homeTextLang}>{t('locale.message')}</Text>
      <View style={style.homeSwitchView}>
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
        style={style.homeLangBtn}
        onPress={() => props.navigation.navigate('menuPage')}>
        <Text style={[style.homeTextLang, {color: 'white'}]}>
          {t('locale.submit')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
