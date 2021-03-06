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
  MapAnimationModes,
} from 'react-native-mechanic-map';

import Utils from './utils';

import Payload from './Payload';
import ExampleRoutes from './ExampleRoutes';

const Button = ({
  text,
  onPress,
  style,
  subButton,
  extendableButton,
}: {
  text: String;
  onPress: () => void;
  style?: TextStyle;
  subButton?: Boolean;
  extendableButton?: Boolean;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text
        style={[
          styles.buttonText,
          style,
          subButton ? styles.subButtonText : {},
          extendableButton ? styles.extendableButton : {},
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const mechanicMapRef = React.useRef<MechanicMapHandle>(null);

  const [show, setShow] = React.useState(true);
  const [floorButtons, setFloorButtons] = React.useState(false);
  const [currLocationButtons, setCurrLocationsButtons] = React.useState(false);
  const [navigationButtons, setNavigationButtons] = React.useState(false);
  const [locationButtons, setLocationButtons] = React.useState(false);
  const [colorButtons, setColorButtons] = React.useState(false);

  const locations = React.useMemo(
    () =>
      Payload.map((floor) => floor.locations).reduce((a, b) => a.concat(b), []),
    []
  );

  const renderFloorButtons = () => {
    return (
      <>
        <Button
          subButton
          text="-3. Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(-3)}
        />
        <Button
          subButton
          text="-2. Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(-2)}
        />
        <Button
          subButton
          text="-1. Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(-1)}
        />
        <Button
          subButton
          text="Ground Floor"
          onPress={() => mechanicMapRef?.current?.setFloor(0)}
        />
      </>
    );
  };

  const renderColorButtons = () => {
    return (
      <>
        <Button
          subButton
          text="Random Background"
          onPress={() =>
            mechanicMapRef?.current?.changeColors({
              background: Utils.randomColor(),
            })
          }
        />
        <Button
          subButton
          text="Random Location"
          onPress={() =>
            mechanicMapRef?.current?.changeColors({
              locations: locations.reduce((previousValue, currentValue) => {
                return {
                  ...previousValue,
                  // @ts-ignore
                  // @todo
                  [currentValue.id]: Utils.randomColor(),
                };
              }, {}),
            })
          }
        />
        <Button
          subButton
          text="Random Active Store"
          onPress={() =>
            mechanicMapRef?.current?.changeColors({
              activeStores: Utils.randomColor(),
            })
          }
        />
        <Button
          subButton
          text="Random Inactive Store"
          onPress={() =>
            mechanicMapRef?.current?.changeColors({
              inactiveStores: Utils.randomColor(),
            })
          }
        />
        <Button
          subButton
          text="Random Service"
          onPress={() =>
            mechanicMapRef?.current?.changeColors({
              services: Utils.randomColor(),
            })
          }
        />
      </>
    );
  };

  const renderCurrentLocationButtons = () => {
    return (
      <>
        <Button
          subButton
          text="Set"
          onPress={() => {
            mechanicMapRef.current?.setCurrentLocation(1000, 1000);
          }}
        />
        <Button
          subButton
          text="Show"
          onPress={() => {
            mechanicMapRef.current?.showCurrentLocation();
          }}
        />
        <Button
          subButton
          text="Move"
          onPress={() => {
            mechanicMapRef.current?.moveCurrentLocation([
              {
                x: 1200,
                y: 1200,
              },
              {
                x: 1500,
                y: 1400,
              },
            ]);
          }}
        />
        <Button
          subButton
          text="Remove"
          onPress={() => {
            mechanicMapRef.current?.removeCurrentLocation();
          }}
        />
      </>
    );
  };

  const renderNavigationButtons = () => {
    return (
      <>
        <Button
          subButton
          text="Starbucks to Adidas"
          onPress={() => {
            mechanicMapRef?.current?.showNavigation(
              ExampleRoutes.STARBUCKS_TO_ADIDAS
            );
          }}
        />
        <Button
          subButton
          text="Adidas to Avelieer"
          onPress={() => {
            mechanicMapRef?.current?.showNavigation(
              ExampleRoutes.ADIDAS_TO_AVELIEER
            );
          }}
        />
        <Button
          text="Close"
          onPress={() => mechanicMapRef?.current?.closeNavigation()}
        />
      </>
    );
  };

  const renderLocationButtons = () => {
    return (
      <>
        <Button
          subButton
          text="Highlight Some Stores"
          onPress={() => {
            const groundFloorStores = locations
              .filter((l) => l.type === 'store')
              .filter((l) => l.id[0] === 'K' && l.id[1] === '0')
              .map((l) => l.id);

            mechanicMapRef.current?.highlightLocations(groundFloorStores, {
              type: LocationTypes.STORE,
            });
          }}
        />
        <Button
          subButton
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
          text="Hide"
          onPress={() => {
            mechanicMapRef.current?.hideLocation();
          }}
        />
      </>
    );
  };

  const renderButtons = () => {
    return (
      <View>
        <Button
          extendableButton
          text="Current Location"
          onPress={() => setCurrLocationsButtons(!currLocationButtons)}
        />
        {currLocationButtons && renderCurrentLocationButtons()}
        <Button
          extendableButton
          text="Location"
          onPress={() => setLocationButtons(!locationButtons)}
        />
        {locationButtons && renderLocationButtons()}
        <Button
          extendableButton
          text="Navigation"
          onPress={() => setNavigationButtons(!navigationButtons)}
        />
        {navigationButtons && renderNavigationButtons()}
        <Button
          extendableButton
          text="Floors"
          onPress={() => setFloorButtons(!floorButtons)}
        />
        {floorButtons && renderFloorButtons()}
        <Button
          extendableButton
          text="Colors"
          onPress={() => setColorButtons(!colorButtons)}
        />
        {colorButtons && renderColorButtons()}
        <Button
          text="Zoom In"
          onPress={() => mechanicMapRef?.current?.zoomIn()}
        />
        <Button
          text="Zoom Out"
          onPress={() => mechanicMapRef?.current?.zoomOut()}
        />
        <Button
          text="Reset Level"
          onPress={() => mechanicMapRef?.current?.resetLevel()}
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
        options={{
          rotate: 90,
          initialScaleFactor: 1.25,
          textOnRect: {
            fontFamily: 'sans-serif',
            fillColor: '#FFF',
            fontSize: 8,
          },
          // stackMode: {
          //   offset: 20,
          // },
          animation: {
            mode: MapAnimationModes.LINE,
            frequencyFactor: 8,
            speedFactor: 8,
            // stackAnimation: true,
          },
          // colors: {
          //   activeStores: Utils.randomColor(),
          //   inactiveStores: Utils.randomColor(),
          //   services: Utils.randomColor(),
          //   background: Utils.randomColor(),
          //   locations: {
          //     [Payload[0].locations[0].id]: Utils.randomColor(),
          //     [Payload[0].locations[1].id]: Utils.randomColor(),
          //   },
          // },
        }}
        onMapLoaded={() => {
          console.log('onMapLoaded => map loaded!');
        }}
        onLevelSwitched={(newLevel) => {
          console.log(`onLevelSwitched => new level is ${newLevel.no}`);
        }}
        onLocationOpened={(target) => {
          console.log(`onLocationOpened => target is ${target}`);
        }}
        onLocationClosed={() => {
          console.log('onLocationClosed => location closed');
        }}
        onNavigationCancalled={() => {
          console.log('onNavigationCancalled => navigation cancelled');
        }}
        onLocationHighlighted={() => {
          console.log('onLocationHighlighted => location highlighted');
        }}
        onMapError={(data) => {
          console.log(`onMapError => ${JSON.stringify(data)}`);
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
  },
  button: {
    alignSelf: 'flex-end',
  },
  buttonText: {
    textAlign: 'right',
    marginBottom: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  subButtonText: {
    color: 'gray',
  },
  extendableButton: {
    color: 'orange',
  },
});
