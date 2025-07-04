import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export function Loader({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                'fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-black/50 backdrop-blur-sm pointer-events-auto',
                className,
            )}
        >
            <div className="flex flex-col items-center space-y-2">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Loading, please wait...</p>
            </div>
        </div>
    );
}
