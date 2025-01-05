import { memo } from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  withBackground?: boolean;
}

function LogoComponent({ withBackground = false, ...props }: LogoProps) {
  const LogoSVG = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Glow effect */}
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        fill="white"
        className="blur-[4px] opacity-30 animate-in fade-in duration-700"
      />

      {/* Shadow layer */}
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        fill="#0A0A0C"
        className="translate-x-[1px] translate-y-[1px] opacity-60 scale-[0.99] animate-in fade-in duration-700"
      />

      {/* Main shape */}
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        fill="white"
        className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)] animate-in zoom-in duration-700 delay-300"
      />

      {/* Subtle outline */}
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
        fill="none"
        className="animate-in fade-in duration-700 delay-500"
      />
    </svg>
  );

  if (withBackground) {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-xl bg-[#0A0A0C] border border-white/[0.05] 
          shadow-[0_0_15px_rgba(0,0,0,0.3)]" />
        <div className="relative h-full w-full p-1.5">
          {LogoSVG}
        </div>
      </div>
    );
  }

  return LogoSVG;
}

export const Logo = memo(LogoComponent);
