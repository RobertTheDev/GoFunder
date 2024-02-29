import { mergeTypeDefs } from '@graphql-tools/merge';
import { fundraiserTypes } from './types/fundraiserTypes';
import { authTypes } from './types/authTypes';

const types = [authTypes, fundraiserTypes];

export const typeDefs = mergeTypeDefs(types);
