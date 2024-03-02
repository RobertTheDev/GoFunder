import { User } from '@prisma/client';

export default function ProfileTemplate(profile: User) {
    const { name } = profile;

    return (
        <div>
            <p>Profile</p>
            <p>{name}</p>
        </div>
    );
}
