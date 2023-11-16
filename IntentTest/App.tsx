import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

const App = (): JSX.Element => {
  const [shareData, setShareData] = useState<
    Array<{
      contentUri: string | null;
      fileName: string | null;
      filePath: string | null;
      mimeType: string | null;
      subject: string | null;
      text: string | null;
      weblink: string | null;
    }>
  >();
  useEffect(() => {
    ReceiveSharingIntent.getReceivedFiles(
      (
        data: Array<{
          contentUri: string | null;
          fileName: string | null;
          filePath: string | null;
          mimeType: string | null;
          subject: string | null;
          text: string | null;
          weblink: string | null;
        }>,
      ) => {
        console.log(data);
        setShareData(data);
      },
      (err: any) => {
        console.log(err);
      },
    );

    return () => {
      ReceiveSharingIntent.clearReceivedFiles();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>공유된 사진</Text>
      {Array.isArray(shareData) ? (
        shareData.map((v, i) => {
          return (
            <Image
              key={v.contentUri}
              source={{uri: v.contentUri}}
              style={{width: 200, height: 200}}
              resizeMode={'cover'}
            />
          );
        })
      ) : (
        <Text>공유된 사진 없음</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default App;
