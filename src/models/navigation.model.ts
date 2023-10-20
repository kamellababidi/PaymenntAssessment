import { StackScreenProps } from '@react-navigation/stack';

export type IApplicationStackParamList = {
  Home: undefined;
  FirstDetails: { objectId: string };
  SecondDetails: { objectId: string };
  Error: { objectId: string };
};

export type IApplicationScreenProps =
  StackScreenProps<IApplicationStackParamList>;
