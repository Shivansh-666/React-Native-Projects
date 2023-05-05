import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import style from '../Styles/CounterStyle.js';
import '../locales/index';
import {NameContext} from './Home.js';

function MenuScreen(props) {
  const {t, i18n} = useTranslation();

  // const contextVal = useContext(NameContext);
  // const [value, setValue] = useState();
  // const [hobby, setHobby] = useState();

  return (
    <View style={style.menuMainWrap}>
      <View style={style.menuStyle}>
        <Text style={style.menuText}>{t('locale.menuText')}</Text>
      </View>

      <View style={style.mobxView}>
        <TouchableOpacity
          style={style.mobxTouchableLink}
          onPress={() => props.navigation.navigate('counter')}>
          <Text style={style.mobxLinkText}>Counter(MobX)</Text>
          {/* Onclick of counter page will redirect to mobX app */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MenuScreen;
