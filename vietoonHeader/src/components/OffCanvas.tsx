import React, {useRef, useEffect} from 'react';
import type {PropsWithChildren, Dispatch, SetStateAction} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import userImage from '../assets/images/userImage.jpg';

const listData = [
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
  '마이페이지',
];
const offCanvasWidth = 273;

const OffCanvas = ({
  isShowOffCanvas,
  setIsShowOffCanvas,
}: PropsWithChildren<{
  isShowOffCanvas: boolean;
  setIsShowOffCanvas: Dispatch<SetStateAction<boolean>>;
}>): JSX.Element => {
  const animation = useRef(new Animated.Value(offCanvasWidth)).current;

  useEffect(() => {
    if (isShowOffCanvas === true) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: offCanvasWidth,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isShowOffCanvas, animation]);

  return (
    <View
      style={{
        ...styles.container,
        display: isShowOffCanvas === true ? 'flex' : 'none',
      }}>
      <View
        style={styles.outWrap}
        onTouchEnd={() => setIsShowOffCanvas(false)}></View>
      <Animated.View
        style={{
          ...styles.wrap,
          transform: [
            {
              translateX: animation,
            },
          ],
        }}>
        <View style={styles.userInfos}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: 5,
            }}>
            <TouchableOpacity onPress={() => null}>
              <AntDesign name={'setting'} size={26} color={'#ddd'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsShowOffCanvas(false)}>
              <AntDesign name={'close'} size={26} color={'#ddd'} />
            </TouchableOpacity>
          </View>
          <Image
            style={{
              borderRadius: 50,
              width: 90,
              height: 90,
            }}
            source={userImage}
          />
          <Text style={{...styles.whiteText}}>ideaconcert@ideaconcert.com</Text>
          <Text
            numberOfLines={2}
            style={{
              ...styles.whiteText,
              fontWeight: 'bold',
            }}>
            안녕하세요. 아이디어콘서트입니다.안녕하세요.
            아이디어콘서트입니다.안녕하세요. 아이디어콘서트입니다.안녕하세요.
            아이디어콘서트입니다.
          </Text>
        </View>
        <FlatList
          style={styles.ul}
          data={listData}
          renderItem={({item}) => (
            <View style={styles.li}>
              <TouchableOpacity>
                <Text style={styles.blackText}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.logoutWrap}>
          <TouchableOpacity>
            <Text style={styles.blackText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
  },
  wrap: {
    width: offCanvasWidth,
    backgroundColor: '#fff',
  },
  outWrap: {
    flex: 1,
  },
  userInfos: {
    backgroundColor: '#222',
    padding: 20,
    gap: 10,
  },
  whiteText: {
    color: '#ddd',
    fontSize: 13,
  },
  blackText: {
    color: '#000',
    fontSize: 13,
  },
  ul: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  li: {
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  logoutWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
});

export default OffCanvas;
