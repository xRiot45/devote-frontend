'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ProposalFormValues } from '@/interfaces/proposal';
import { formatDateTimeLocal } from '@/utils/format-date-time-local';
import { proposalValidationSchema } from '@/validations/proposal';
import { zodResolver } from '@hookform/resolvers/zod';
import { Resolver, useFieldArray, useForm } from 'react-hook-form';

export default function CreateProposalPage() {
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors },
    } = useForm<ProposalFormValues>({
        resolver: zodResolver(proposalValidationSchema) as Resolver<ProposalFormValues>,
        mode: 'onChange',
        defaultValues: {
            title: '',
            description: '',
            category: '',
            startTime: new Date(),
            endTime: new Date(),
            options: [{ label: '', description: '', order: 1 }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'options',
    });

    const onSubmit = (data: ProposalFormValues) => {
        console.log('✅ Submitted data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...register('title')} />
                {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
            </div>

            <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" {...register('description')} />
                {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
            </div>

            <div>
                <Label htmlFor="category">Category</Label>
                <Input id="category" {...register('category')} />
                {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
            </div>

            <div>
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                    id="startTime"
                    type="datetime-local"
                    {...register('startTime')}
                    value={formatDateTimeLocal(watch('startTime'))}
                />
                {errors.startTime && <p className="text-sm text-red-500">{errors.startTime.message}</p>}
            </div>

            <div>
                <Label htmlFor="endTime">End Time</Label>
                <Input
                    id="endTime"
                    type="datetime-local"
                    {...register('endTime')}
                    value={formatDateTimeLocal(watch('endTime'))}
                />
                {errors.endTime && <p className="text-sm text-red-500">{errors.endTime.message}</p>}
            </div>

            <div>
                <Label>Options</Label>
                <div className="space-y-4">
                    {fields.map((field, index) => (
                        <div key={field.id} className="border rounded p-4 space-y-3">
                            <div>
                                <Label>Label</Label>
                                <Input {...register(`options.${index}.label`)} />
                                {errors.options?.[index]?.label && (
                                    <p className="text-sm text-red-500">{errors.options[index]?.label?.message}</p>
                                )}
                            </div>

                            <div>
                                <Label>Description</Label>
                                <Textarea {...register(`options.${index}.description`)} />
                                {errors.options?.[index]?.description && (
                                    <p className="text-sm text-red-500">
                                        {errors.options[index]?.description?.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <Label>Image URL</Label>
                                <Input {...register(`options.${index}.image`)} />
                            </div>

                            <div>
                                <Label>Order</Label>
                                <Input type="number" {...register(`options.${index}.order`, { valueAsNumber: true })} />
                                {errors.options?.[index]?.order && (
                                    <p className="text-sm text-red-500">{errors.options[index]?.order?.message}</p>
                                )}
                            </div>

                            <Button type="button" variant="destructive" onClick={() => remove(index)}>
                                Remove Option
                            </Button>
                        </div>
                    ))}
                </div>

                <Button
                    type="button"
                    onClick={() => append({ label: '', description: '', image: '', order: fields.length + 1 })}
                >
                    Add Option
                </Button>
            </div>

            <Button type="submit">Submit</Button>
        </form>
    );
}
