import { Icon } from '@iconify/react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const NavUser: React.FC = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatar.jpg" alt="User" />
                        <AvatarFallback>TA</AvatarFallback>
                    </Avatar>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 space-y-3 p-4 rounded-lg border border-border mr-4 mt-4">
                <div className="space-y-0.5 flex items-center gap-4">
                    <Avatar className="h-9 w-9">
                        <AvatarImage src="/avatar.jpg" alt="User" />
                        <AvatarFallback>TA</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold">Thomas Alberto</p>
                        <p className="text-xs text-muted-foreground">admin@example.com</p>
                    </div>
                </div>

                <div className="border-t pt-3 space-y-1">
                    <Button
                        variant="ghost"
                        className="w-full justify-start font-normal gap-2 hover:bg-accent py-6 cursor-pointer"
                    >
                        <Icon icon={'mdi:user'} className="h-4 w-4" />
                        My Profile
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 font-normal hover:bg-accent py-6 cursor-pointer"
                    >
                        <Icon icon={'material-symbols:settings'} className="h-4 w-4" />
                        Settings
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 hover:bg-red-100 font-normal dark:hover:bg-red-500/10 text-red-600 hover:text-red-600 py-6 cursor-pointer"
                    >
                        <Icon icon={'mdi:logout'} className="h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default NavUser;
