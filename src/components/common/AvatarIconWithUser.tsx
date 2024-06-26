import { Avatar } from '@nextui-org/react';

interface AvatarIconWithUserProps {
  imageSrc: string;
  userName: string;
  imageSize?: number;
}

const AvatarIconWithUser = ({
  imageSrc,
  userName,
  imageSize,
}: AvatarIconWithUserProps) => {
  return (
    <div className="flex items-center gap-1">
      <Avatar src={imageSrc} className="w-6 h-6" />
      <span className="text-sm">{userName}</span>
    </div>
  );
};

export default AvatarIconWithUser;
