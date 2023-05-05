import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import style from '../Styles/CounterStyle.js';
import '../locales/index';

function MenuScreen(props) {
  const {t, i18n} = useTranslation();

  return (
    <View style={style.menuStyle}>
      <Text style={style.menuText}>{t('locale.menuText')}</Text>
    </View>
  );
}

export default MenuScreen;
