import { mergeTypeDefs } from '@graphql-tools/merge';
import { fundraiserTypes } from './types/fundraiserTypes';
import { authTypes } from './types/authTypes';
import { donationTypes } from './types/donationTypes';
import { savedFundraiserTypes } from './types/savedFundraiserTypes';
import { userTypes } from './types/userTypes';
import { dateTypes } from './types/dateTypes';
import { profileTypes } from './types/profileTypes';

const types = [
    authTypes,
    dateTypes,
    donationTypes,
    fundraiserTypes,
    profileTypes,
    savedFundraiserTypes,
    userTypes
];

export const typeDefs = mergeTypeDefs(types);
