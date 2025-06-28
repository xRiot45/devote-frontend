import { cn } from '@/lib/utils';
import React from 'react';
import { Card, CardContent } from './ui/card';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <Card
            className={cn(
                'bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-none dark:shadow-md backdrop-blur-xl transition-colors',
            )}
        >
            <CardContent className="p-6 flex flex-col items-start">
                <div className="mb-4">{icon}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
