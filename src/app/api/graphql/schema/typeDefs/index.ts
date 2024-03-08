import { authTypeDefs } from '@/app/api/modules/auth/schema/typeDefs';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { donationTypeDefs } from '@/app/api/modules/donation/schema/typeDefs';
import { fundraiserTypeDefs } from '@/app/api/modules/fundraiser/schema/typeDefs';
import { savedFundraiserTypeDefs } from '@/app/api/modules/saved-fundraiser/schema/typeDefs';
import { userTypeDefs } from '@/app/api/modules/user/schema/typeDefs';
import { accountSettingsTypeDefs } from '@/app/api/modules/acount-settings/schema/typeDefs';
import gql from 'graphql-tag';

const dateTypes = gql`
    scalar DateTime
`;

const mergedTypeDefs = [
    dateTypes,
    accountSettingsTypeDefs,
    authTypeDefs,
    donationTypeDefs,
    fundraiserTypeDefs,
    savedFundraiserTypeDefs,
    userTypeDefs
];

export const typeDefs = mergeTypeDefs(mergedTypeDefs);
