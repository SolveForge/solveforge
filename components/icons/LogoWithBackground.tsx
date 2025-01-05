import { memo } from 'react';
import { Logo } from './Logo';

function LogoWithBackgroundComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 rounded-xl bg-[#0A0A0C] border border-white/[0.05] 
        shadow-[0_0_15px_rgba(0,0,0,0.3)]" />
      <div className="relative h-full w-full p-1.5">
        <Logo className="w-full h-full" />
      </div>
    </div>
  );
}

export const LogoWithBackground = memo(LogoWithBackgroundComponent); 