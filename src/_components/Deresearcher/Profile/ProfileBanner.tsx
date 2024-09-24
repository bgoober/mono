/* eslint-disable @next/next/no-img-element */
import { Pen } from "lucide-react";
import { Button } from "~/_components/ui/button";
import { VerifyBadge } from "~/_components/VerifyBadge";

interface ProfileBannerProps {
  bannerSrc: string;
  avatarSrc: string;
  onEditClick: () => void;
  isVerified?: boolean;
}

export function ProfileBanner({
  bannerSrc,
  avatarSrc,
  onEditClick,
  isVerified = false,
}: ProfileBannerProps) {
  return (
    <div className="relative mb-16">
      <div className="h-52">
        <img
          src={bannerSrc}
          alt="Profile banner"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform">
        <div className="relative h-24 w-24 rounded-full border-4 border-white">
          <img
            src={avatarSrc}
            alt="Profile avatar"
            className="h-full w-full rounded-full object-cover"
          />
          {isVerified && (
            <div className="absolute -right-1 bottom-2">
              <VerifyBadge className="text-secondary" />
            </div>
          )}
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="absolute right-4 top-4">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full bg-zinc-800 hover:bg-zinc-700"
          onClick={onEditClick}
        >
          <Pen className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
}
