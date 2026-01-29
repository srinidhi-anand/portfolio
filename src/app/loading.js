import Image from "next/image";
import './globals.css';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-zinc-950/90 backdrop-blur-md">
            <div className="relative flex flex-col items-center">

                {/* The Half-Route Spinner */}
                <div className="relative flex h-24 w-24 items-center justify-center">
                    {/* Static Background Ring (Darker/Subtle) */}
                    <div className="absolute h-full w-full rounded-full border-[3px] border-zinc-200 dark:border-zinc-800"></div>

                    {/* The Spinning Half-Route */}
                    <div className="absolute h-full w-full animate-spin rounded-full border-[3px] border-transparent border-t-zinc-900 dark:border-t-zinc-100"></div>

                    {/* Central Logo - Non-spinning */}
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-black shadow-lg loader-logo">

                        <Image
                            src='/logo.jpeg'
                            alt='logo'
                            width={40}
                            height={40}
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Minimalist Reveal Animation for Text */}
                <div className="mt-8 overflow-hidden">
                    <p className="animate-[slide-up_1.5s_ease-in-out_infinite] text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase  font-bold italic">
                        Loading Section...
                    </p>
                </div>

            </div>
        </div>
    );
}