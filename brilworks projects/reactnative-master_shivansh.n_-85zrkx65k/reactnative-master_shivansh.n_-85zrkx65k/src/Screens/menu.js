import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import style from '../Styles/CounterStyle.js';
import '../locales/index';
import {NameContext} from './Home.js';

function MenuScreen(props) {
  const {t, i18n} = useTranslation();

  // const contextVal = useContext(NameContext);
  const [value, setValue] = useState();
  const [hobby, setHobby] = useState();

  return (
    <View style={{flex: 1}}>
      <View style={style.menuStyle}>
        <Text style={style.menuText}>{t('locale.menuText')}</Text>
      </View>
      <View style={style.inputCombo}>
        <View style={style.updatedTextView}>
          <Text style={style.updatedText}>Live Name :{value}</Text>
          <Text style={style.updatedTextHobby}>Hobby: {hobby}</Text>
        </View>
        <TextInput style={style.fullName} onChangeText={setValue} />

        <TextInput style={style.hobby} onChangeText={setHobby} />
        <NameContext.Consumer>
          {contextVal => <Text>{contextVal}</Text>}
        </NameContext.Consumer>
      </View>
    </View>
  );
}

export default MenuScreen;
