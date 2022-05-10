import * as React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
} from 'react-native';
import MechanicMap, {
  MechanicMapHandle,
  LocationTypes,
} from 'react-native-mechanic-map';

import Payload from './Payload';
import ExampleRoutes from './ExampleRoutes';

const Button = ({
  text,
  onPress,
  style,
}: {
  text: String;
  onPress: () => void;
  style?: TextStyle;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.buttonText, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const mechanicMapRef = React.useRef<MechanicMapHandle>(null);

  const [show, setShow] = React.useState(true);

  const locations = React.useMemo(
    () =>
      Payload.map((floor) => floor.locations).reduce((a, b) => a.concat(b), []),
    []
  );

  const renderButtons = () => {
    return (
      <View>
        <Button
          text="Random Place"
          onPress={() => {
            const randomLocation =
              locations[Math.floor(Math.random() * locations.length - 1)];
            mechanicMapRef?.current?.showLocation({
              id: randomLocation.id,
              type:
                randomLocation.type === LocationTypes.SERVICE
                  ? LocationTypes.SERVICE
                  : LocationTypes.STORE,
            });
          }}
        />
        <Button
          text="Starbucks to Adidas"
          onPress={() => {
            mechanicMapRef?.current?.showNavigation({
              route: ExampleRoutes.STARBUCKS_TO_ADIDAS,
            });
          }}
        />
        <Button
          text="Adidas to Avelieer"
          onPress={() => {
            mechanicMapRef?.current?.showNavigation({
              route: ExampleRoutes.ADIDAS_TO_AVELIEER,
            });
          }}
        />
        <Button
          text="Close Navigation"
          onPress={() => mechanicMapRef?.current?.closeNavigation()}
        />
        <Button
          text="-3. Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(-3)}
        />
        <Button
          text="-2. Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(-2)}
        />
        <Button
          text="-1. Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(-1)}
        />
        <Button
          text="Ground Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(0)}
        />
        <Button
          text="Reload"
          onPress={() => mechanicMapRef?.current?.reload()}
        />
      </View>
    );
  };

  return (
    <>
      <MechanicMap
        ref={mechanicMapRef}
        languageCode="en"
        payload={Payload}
        style={styles.container}
        onMapLoaded={() => {
          console.log('map loaded!');
        }}
        onLevelSwitched={(newLevel) => {
          console.log(`newLevel is ${newLevel}`);
        }}
        options={{
          rotate: 90,
          initialScaleFactor: 1.25,
        }}
        onLocationOpened={(target) => {
          console.log(`target is ${target}`);
        }}
      />
      <View style={styles.actions}>
        {show && renderButtons()}
        <Button
          text={show ? 'HIDE' : 'SHOW'}
          onPress={() => setShow(!show)}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: show ? 'red' : 'green',
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 20,
    // marginBottom: 10,
  },
  buttonText: {
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
