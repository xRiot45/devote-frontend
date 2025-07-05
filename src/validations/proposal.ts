import z from 'zod';

const dateSchema = z.preprocess(
    (arg) => {
        if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
        return arg;
    },
    z.date({ message: 'Invalid date' }),
);

export const proposalOptionSchema = z.object({
    label: z.string().min(1, { message: 'Option label is required' }).max(100),
    description: z.string().min(1, { message: 'Option description is required' }),
    image: z.string().optional(),
    order: z.number({ message: 'Option order must be a number' }),
});

export const proposalValidationSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }).max(255),
    description: z.string().min(1, { message: 'Description is required' }),
    category: z.string().min(1, { message: 'Category is required' }).max(100),
    startTime: dateSchema,
    endTime: dateSchema,
    options: z.array(proposalOptionSchema).min(1, { message: 'At least one option is required' }),
});
