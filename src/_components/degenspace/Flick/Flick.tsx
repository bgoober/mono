import P from "../P";
import { FlickActions } from "./FlickActions";

export type FlickData = {
  displayName: string;
  username: string;
  data: string;
};

export const Flick = (flickData: FlickData) => {
  return (
    <div className="mb-4 border-b border-zinc-200 pb-4">
      <div className="flex items-start gap-3">
        <ColorfulAvatar name={flickData.displayName} size={40} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <P className="text-sm font-bold text-zinc-600">
              {flickData.displayName}
            </P>
            <P className="text-sm text-zinc-500">{flickData.username}</P>
          </div>
          <P className="mt-2 text-sm text-zinc-800">{flickData.data}</P>
          <FlickActions />
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
