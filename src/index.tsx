import { NativeModules } from 'react-native';

type MechanicMapType = {
  multiply(a: number, b: number): Promise<number>;
};

const { MechanicMap } = NativeModules;

export default MechanicMap as MechanicMapType;
