import React from 'react';
import {Button, StyleSheet, Text, View, AlertIOS} from 'react-native';

export default class App extends React.Component {
  render() {
		return (
      <View style={styles.container}>
				<Button
					title="購入する"
					onPress={() => {
						// TouchIDまたは顔認証が利用可能か
						Expo.Fingerprint.hasHardwareAsync()
							.then(isAvailable => {
								if (isAvailable) {
									// TouchIDまたは顔認証起動
									Expo.Fingerprint.authenticateAsync()
										.then(result => {
											console.log(result);
											if (result.success) {
												setTimeout(() => {
													AlertIOS.alert(
														'購入が完了しました',
													);
												}, 1000)
											}
										});
								}
							})
					}}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
