import ProfileForm from "~/_components/Deresearcher/Profile/ProfileForm";
import { Button } from "~/_components/ui/button";
import Link from "next/link";
import { DERESEARCHER_HOME } from "~/constant";

const PATHNAME = `${DERESEARCHER_HOME}/profile`;

export default async function UpdateProfilePage() {
  const userData = await getUserData();

  return (
    <>
      <div className="mb-6 flex items-center justify-end">
        <Link href={PATHNAME}>
          {/* TODO: use like /profile/[:id] for example */}
          <Button className="bg-zinc-600 text-xs text-white hover:bg-zinc-500">
            Go to your public profile
          </Button>
        </Link>
      </div>
      <ProfileForm initialData={userData} />
    </>
  );
}

// TODO: Fetch user data
async function getUserData() {
  return {
    firstName: "",
    lastName: "",
    email: "john.doe@example.com",
    organization: "Acme Corp",
    website: "",
    socialLink: "",
    bio: "",
    isVerified: true,
  };
}
