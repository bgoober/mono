import ProfileComponent from "~/_components/final/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <div className="flex bg-zinc-100">
      <ProfileComponent />
    </div>
  );
}
