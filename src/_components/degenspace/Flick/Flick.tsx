"use client";
import {
  type FlickResponse,
  type Flick,
} from "~/server/api/routers/flick/read";
import P from "../P";
import { FlickAction, FlickActions } from "./FlickActions";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ResponseModal } from "../Modal/PostModal";
import { api } from "~/trpc/react";
import { Session } from "next-auth";
import toast from "react-hot-toast";

interface FlickProps {
  flick: Flick;
  session: Session;
}

export const FlickComponent: React.FC<FlickProps> = ({ flick, session }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isResponseModalOpen, setIsResponseModalOpen] =
    useState<boolean>(false);
  const likeFlick = api.flick.likeFlick.useMutation();
  const unlikeFlick = api.flick.unlikeFlick.useMutation();
  const saveFlick = api.flick.saveFlick.useMutation();
  const unsaveFlick = api.flick.unsaveFlick.useMutation();
  const likedCurrentFlick = !!flick.likedBy.find(
    (liker) => liker.id === session.user.id,
  );
  const savedCurrentFlick = !!flick.savedBy.find(
    (saver) => saver.id === session.user.id,
  );

  const flickActions: FlickAction[] = [
    {
      name: "respect",
      iconPath: "/spock.svg",
      count: 10,
      onClick: () => {
        return likedCurrentFlick
          ? unlikeFlick.mutate(
              {
                flickId: flick.id,
              },
              {
                onSuccess: () => toast.success("Like Removed from post"),
              },
            )
          : likeFlick.mutate(
              {
                flickId: flick.id,
              },
              {
                onSuccess: () => toast.success("Liked post"),
              },
            );
      },
      active: likedCurrentFlick,
    },
    {
      name: "reply",
      iconPath: "/reply.svg",
      count: 12,
      onClick: () => setIsResponseModalOpen(true),
    },
    {
      name: "dump",
      iconPath: "/bookmark.svg",
      count: 5,
      onClick: () => {
        return savedCurrentFlick
          ? unsaveFlick.mutate(
              {
                flickId: flick.id,
              },
              {
                onSuccess: () => toast.success("Post Unsaved"),
              },
            )
          : saveFlick.mutate(
              {
                flickId: flick.id,
              },
              {
                onSuccess: () => toast.success("Post Saved"),
              },
            );
      },
      active: savedCurrentFlick,
    },
    // {
    //   name: "share",
    //   iconPath: "/share.svg",
    //   count: 20,
    // },
  ];
  return (
    <div className="mb-4 border-b border-zinc-200 pb-4">
      <div className="flex cursor-pointer items-start gap-3">
        <ColorfulAvatar name={flick.creator?.name ?? ""} size={40} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <P className="text-sm font-bold text-zinc-900">
              {flick.creator?.name ?? ""}
            </P>
            <P className="text-sm text-zinc-500">
              {flick.creator?.username ?? ""}
            </P>
          </div>
          <P className="mt-2 text-sm text-zinc-800">{flick.description}</P>
          <div className="mt-3 flex w-full items-center justify-between">
            {isExpanded ? (
              <ChevronDown
                onClick={() => setIsExpanded(false)}
                className="text-primary"
              />
            ) : (
              <ChevronRight
                onClick={() => setIsExpanded(true)}
                className="text-primary"
              />
            )}
            <FlickActions flickActions={flickActions} />
          </div>
        </div>
      </div>

      {isExpanded &&
        flick.hasOwnProperty("responses") &&
        flick.responses.length > 0 && (
          <div className="ml-12 mt-4 border-l-2 border-zinc-200 pl-4">
            {flick.responses.map((response) => (
              <FlickResponseComponent
                key={response.id}
                flickResponse={response}
              />
            ))}
          </div>
        )}
      <ResponseModal
        flick={flick}
        isOpen={isResponseModalOpen}
        onClose={() => {}}
      />
    </div>
  );
};

interface FlickResponseProps {
  flickResponse: FlickResponse;
}
export const FlickResponseComponent: React.FC<FlickResponseProps> = ({
  flickResponse,
}) => {
  return (
    <div className="mb-4 border-b border-zinc-200 pb-4">
      <div className="flex cursor-pointer items-start gap-3">
        <ColorfulAvatar name={flickResponse.creator?.name ?? ""} size={40} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <P className="text-sm font-bold text-zinc-900">
              {flickResponse.creator?.name ?? ""}
            </P>
            <P className="text-sm text-zinc-500">
              {flickResponse.creator?.username ?? ""}
            </P>
          </div>
          <P className="mt-2 text-sm text-zinc-800">
            {flickResponse.description}
          </P>
        </div>
      </div>
    </div>
  );
};

interface ColorfulAvatarProps {
  name: string;
  size?: number;
}

const ColorfulAvatar: React.FC<ColorfulAvatarProps> = ({ name, size = 40 }) => {
  const getColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.floor(
      Math.abs((Math.sin(hash) * 16777215) % 1) * 16777215,
    ).toString(16);
    return "#" + "0".repeat(6 - color.length) + color;
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 1);
  };

  const color = getColor(name);
  const initials = getInitials(name);

  return (
    <div
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: `${size / 3}px`,
      }}
    >
      {initials}
    </div>
  );
};
