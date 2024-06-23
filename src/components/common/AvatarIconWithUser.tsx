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
      <div className="w-4 h-4 rounded-full bg-gray-300"></div>{' '}
      <span className="text-sm">{userName}</span>
    </div>
  );
};

export default AvatarIconWithUser;
