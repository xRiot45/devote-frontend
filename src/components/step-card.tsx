interface StepCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => {
    return (
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-none p-6 transition-all ">
            <div className="flex items-center gap-4 mb-4">
                <div className=" p-2 rounded-full">{icon}</div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    );
};

export default StepCard;
