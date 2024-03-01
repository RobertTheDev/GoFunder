import * as stytch from 'stytch';

// Define the stytch client using your stytch project id & secret.
// Use stytch.envs.live if you want to hit the live api.
export const stytchClient = new stytch.Client({
    project_id: String(process.env.STYTCH_PROJECT_ID),
    secret: String(process.env.STYTCH_SECRET)
});
