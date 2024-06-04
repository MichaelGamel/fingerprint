import React from 'react';
import type {FC, PropsWithChildren} from 'react';
import {FingerprintJsProProvider, useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react-native';

type Region = 'eu' | 'us' | 'ap';

type MoznFingerprintProps = PropsWithChildren<{
  apiKey: string;
  region?: Region;
  endpointUrl?: string;
  extendedResponseFormat?: boolean;
}>;

const useFingerprint = () => {
  const visitorData = useVisitorData();
  return visitorData;
}

const MoznFingerprint: FC<MoznFingerprintProps> = ({children, ...props}) => {
  return (
    <FingerprintJsProProvider {...props}>{children}</FingerprintJsProProvider>
  );
};

export {MoznFingerprint, useFingerprint};
