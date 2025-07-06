'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

interface DatePickerInputProps {
    date: Date | undefined;
    onChangeAction: (date: Date | undefined) => void;
    placeholder?: string;
}

export function DatePickerInput({ date, onChangeAction, placeholder }: DatePickerInputProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal py-6 shadow-none">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>{placeholder || 'Pick a date'}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar mode="single" selected={date} onSelect={onChangeAction} />
            </PopoverContent>
        </Popover>
    );
}
