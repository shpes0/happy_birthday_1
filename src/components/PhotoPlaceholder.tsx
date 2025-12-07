interface PhotoPlaceholderProps {
  size?: 'small' | 'medium' | 'large' | 'wide';
  className?: string;
}

export function PhotoPlaceholder({ size = 'medium', className = '' }: PhotoPlaceholderProps) {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64',
    wide: 'w-full h-48'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-[30px] shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center`}>
      <div className="text-white/30 text-4xl">📷</div>
    </div>
  );
}
