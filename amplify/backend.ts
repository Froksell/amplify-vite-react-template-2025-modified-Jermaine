import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

import { graphqlIoTCoreTelemetry } from './functions/graphqlIoTCoreTelemetry/resource';
import { graphqlIoTCoreStatus } from './functions/graphqlIoTCoreStatus/resource';
import { pollSmhi } from './jobs/pollSmhi/resource';
import { storeDeviceShadow } from './functions/storeDeviceShadow/resource';
import { updateDeviceShadow } from './functions/updateDeviceShadow/resource';


const backend = defineBackend({
  auth,
  data,
  graphqlIoTCoreTelemetry,
  graphqlIoTCoreStatus,
  pollSmhi,
  updateDeviceShadow,
  storeDeviceShadow,
});
