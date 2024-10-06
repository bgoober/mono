
import P from "../P";
import { FlickActions } from "./FlickActions";

export type FlickData = {
  id: string;
  displayName: string;
  username: string;
  data: string;
  responses?: FlickData[];
};

interface FlickProps extends FlickData {
  isExpanded: boolean;
  onToggle: () => void;
}

export const Flick: React.FC<FlickProps> = ({
  id,
  displayName,
  username,
  data,
  responses = [],
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="mb-4 border-b border-zinc-200 pb-4">
      <div className="flex cursor-pointer items-start gap-3" onClick={onToggle}>
        <ColorfulAvatar name={displayName} size={40} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <P className="text-sm font-bold text-zinc-600">{displayName}</P>
            <P className="text-sm text-zinc-500">{username}</P>
          </div>
          <P className="mt-2 text-sm text-zinc-800">{data}</P>
          <FlickActions />
        </div>
      </div>

      {isExpanded && responses.length > 0 && (
        <div className="ml-12 mt-4 border-l-2 border-zinc-200 pl-4">
          {responses.map((response) => (
            <Flick
              key={response.id}
              {...response}
              isExpanded={false}
              onToggle={() => {}}
            />
          ))}
        </div>
      )}
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
