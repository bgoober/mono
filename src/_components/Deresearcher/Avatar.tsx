export const Avatar = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      className={className}
    >
      <rect width="100%" height="100%" fill="#FF4802" />

      <path d="M0 0 h100 v100 h-100 z" fill="#6226EF" />
      <path d="M100 0 h100 a100 100 0 0 1 -100 100 v-100" fill="#FED7D0" />
      <path d="M200 0 h100 v100 h-100 z" fill="#6226EF" />

      <path d="M0 100 h100 a100 100 0 0 1 -100 100 v-100" fill="#FED7D0" />
      <path d="M100 100 h100 v100 h-100 z" fill="#6226EF" />
      <path d="M200 100 h100 a100 100 0 0 1 -100 100 v-100" fill="#FED7D0" />

      <path d="M0 200 h100 v100 h-100 z" fill="#6226EF" />
      <path d="M100 200 h100 a100 100 0 0 0 -100 100 v-100" fill="#FED7D0" />
      <path d="M200 200 h100 v100 h-100 z" fill="#6226EF" />
    </svg>
  );
};

interface AvatarProps {
  name: string;
  size?: number;
}

export const AvatarWithName: React.FC<AvatarProps> = ({ name, size = 8 }) => {
  const initials = name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase();
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];
  const colorIndex =
    name
      .split("")
      .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return (
    <div
      className={`w-${size} h-${size} ${colors[colorIndex]} rounded-full flex items-center justify-center text-white text-xs `}
    >
      {initials}
    </div>
  );
};
