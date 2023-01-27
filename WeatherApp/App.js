import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import * as Location from "expo-location";

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const permission = await Location.requestForegroundPermissionsAsync();
      console.log(permission);
      if (permission.status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: 6,
      });
      // console.log(latitude, longitude);
      const result = await Location.reverseGeocodeAsync(
        {
          latitude,
          longitude,
        },
        {
          useGoogleMaps: false,
        }
      );
      // console.log(result);
      const { city, region, street, streetNumber } = result[0];
      setLocation(`현 위치 : ${city} ${region} ${street} ${streetNumber}`);
    })();
  }, []);
  const { width } = useWindowDimensions();
  let text = "Waiting..";
  console.log(errorMsg, location);
  if (errorMsg) {
    text = errorMsg;
  }
  if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Jeju</Text>
      </View>
      <View style={styles.weather}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={false}
        >
          {/*왜인지 모르겠는데 contentContainerStyle에 flex 작동을 안함 */}
          <View style={{ ...styles.day, width }}>
            <Text>{text}</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={{ ...styles.day, width }}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={{ ...styles.day, width }}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
          <View style={{ ...styles.day, width }}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.desc}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "bold",
  },
  weather: {
    flex: 3,
    backgroundColor: "yellow",
  },
  day: {
    // flex: 1,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
  },
  desc: {
    marginTop: -30,
    fontSize: 60,
  },
});

export default App;
