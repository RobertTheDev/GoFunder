import { mergeTypeDefs } from '@graphql-tools/merge';
import { fundraiserTypes } from './types/fundraiserTypes';

const types = [fundraiserTypes];

export const typeDefs = mergeTypeDefs(types);
