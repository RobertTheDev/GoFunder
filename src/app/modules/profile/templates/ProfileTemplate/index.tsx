import useSession from "@/app/hooks/session/useSession";

export default async function ProfileTemplate() {
    const { session } = await useSession();

    return (
        <div>
            <p>{JSON.stringify(session)}</p>
        </div>
    );
}
