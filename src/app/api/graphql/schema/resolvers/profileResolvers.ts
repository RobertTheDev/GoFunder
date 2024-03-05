import getProfile from '@/app/api/controllers/profile/getProfile.controller';

export const profileResolvers = {
    Query: {
        profile: getProfile
    }
};
