import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

export default function ButtonPartials() {
    return (
        <div className="flex gap-2">
            <Button onClick={() => window.location.reload()} className="cursor-pointer">
                <span>Refresh Page</span>
                <Icon icon={'material-symbols:refresh'} className="text-background" />
            </Button>
        </div>
    );
}
