import React, {useState} from 'react';
import Logo from '../../src/assets/images/mainLogo.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OffCanvas from './OffCanvas';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const Header = (): JSX.Element => {
  const [isShowOffCanvas, setIsShowOffCanvas] = useState(false);

  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 20,
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => null}>
            <MaterialIcons name="search" size={26} color={'#000'} />
          </TouchableOpacity>
          <Image
            source={Logo}
            style={{
              width: 134,
              height: 29.03,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 7,
            }}>
            <TouchableOpacity onPress={() => setIsShowOffCanvas(true)}>
              <Ionicons name="person-outline" size={26} color={'#000'} />
            </TouchableOpacity>
            <Text
              style={{
                backgroundColor: '#86d828',
                color: '#fff',
                padding: 4,
                borderRadius: 50,
              }}>
              VN
            </Text>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.li}>
              <TouchableOpacity onPress={() => null}>
                <Text style={styles.blackText}>ideaconcert</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.li}>
              <TouchableOpacity onPress={() => null}>
                <Text style={styles.blackText}>ideaconcert</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.li}>
              <TouchableOpacity onPress={() => null}>
                <Text style={styles.blackText}>ideaconcert</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.li}>
              <TouchableOpacity onPress={() => null}>
                <Text style={styles.blackText}>ideaconcert</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.li}>
              <TouchableOpacity onPress={() => null}>
                <Text style={styles.blackText}>ideaconcert</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      <OffCanvas
        isShowOffCanvas={isShowOffCanvas}
        setIsShowOffCanvas={setIsShowOffCanvas}
      />
    </>
  );
};

const styles = StyleSheet.create({
  li: {
    marginHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    height: 54,
  },
  blackText: {
    color: '#000',
  },
});

export default Header;
