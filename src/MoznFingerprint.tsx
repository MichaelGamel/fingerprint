import React from 'react';
import type {FC, PropsWithChildren} from 'react';
import {FingerprintJsProProvider} from '@fingerprintjs/fingerprintjs-pro-react-native';

type Region = 'eu' | 'us' | 'ap';

type MoznFingerprintProps = PropsWithChildren<{
  apiKey: string;
  region?: Region;
  endpointUrl?: string;
  extendedResponseFormat?: boolean;
}>;

const MoznFingerprint: FC<MoznFingerprintProps> = ({children, ...props}) => {
  return (
    <FingerprintJsProProvider {...props}>{children}</FingerprintJsProProvider>
  );
};

export {MoznFingerprint};
