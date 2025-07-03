import clsx from 'clsx';
import React from 'react';

interface Step {
    label: string;
}

interface StepperProps {
    steps: Step[];
    currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="flex items-center space-x-2 mb-10">
            {steps.map((step, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;
                const isUpcoming = stepNumber > currentStep;

                return (
                    <div key={index}>
                        <div className={clsx('flex items-center space-x-3', isUpcoming && 'opacity-50')}>
                            <div
                                className={clsx(
                                    'w-8 h-8 rounded-full flex items-center justify-center font-semibold',
                                    isActive && 'bg-indigo-500 text-white',
                                    isCompleted && 'bg-green-500 text-white',
                                    isUpcoming && 'border border-gray-400 text-gray-400',
                                )}
                            >
                                <span className="text-sm font-normal">{isCompleted ? '✓' : stepNumber}</span>
                            </div>
                            <span
                                className={clsx(
                                    'font-normal',
                                    isActive && 'text-indigo-500',
                                    isCompleted && 'text-green-400',
                                    isUpcoming && 'text-gray-400',
                                )}
                            >
                                {step.label}
                            </span>
                            {index < steps.length - 1 && <div className="w-10 h-[1px] bg-gray-300 dark:bg-gray-600" />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;
