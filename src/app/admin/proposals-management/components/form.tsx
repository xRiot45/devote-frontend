'use client';

import { DatePickerInput } from '@/components/date-picker-input';
import FileDropzone from '@/components/file-dropzone';
import RichTextEditor from '@/components/rich-text-editor';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProposalFormValues } from '@/interfaces/proposal';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useFieldArray, useFormContext } from 'react-hook-form';

interface ProposalFormProps {
    onSubmit: (payload: ProposalFormValues) => void;
    isEdit?: boolean;
}

const ProposalForm: React.FC<ProposalFormProps> = ({ onSubmit, isEdit = false }) => {
    const form = useFormContext<ProposalFormValues>();
    const { fields, append, remove } = useFieldArray({ control: form.control, name: 'options' });
    const router = useRouter();

    const handleFileChange = (index: number, file: File) => {
        form.setValue(`options.${index}.image`, file);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Proposal Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="e.g. Community leader voting"
                                    {...field}
                                    className={`py-6 rounded-md text-base shadow-none ${
                                        form.formState.errors.title ? 'border-red-500 focus-visible:ring-red-500' : ''
                                    }`}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Proposal Category */}
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="e.g. Community"
                                    {...field}
                                    className={`py-6 rounded-md text-base shadow-none ${
                                        form.formState.errors.category
                                            ? 'border-red-500 focus-visible:ring-red-500'
                                            : ''
                                    }`}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Proposal Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <RichTextEditor
                                    value={field.value}
                                    onChangeAction={field.onChange}
                                    error={form.formState.errors.description?.message}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Proposal Start Time */}
                <FormField
                    control={form.control}
                    name="startTime"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Start Time</FormLabel>
                            <FormControl>
                                <DatePickerInput
                                    date={field.value}
                                    onChangeAction={field.onChange}
                                    placeholder="Select start date"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Proposal End Time */}
                <FormField
                    control={form.control}
                    name="endTime"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>End Time</FormLabel>
                            <FormControl>
                                <DatePickerInput
                                    date={field.value}
                                    onChangeAction={field.onChange}
                                    placeholder="Select end date"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Proposal Options */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Proposal Options</h3>
                    {fields.map((field, index) => (
                        <Card key={field.id} className=" border p-6 rounded-md shadow-none relative">
                            {/* Label */}
                            <FormField
                                control={form.control}
                                name={`options.${index}.label`}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Label</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="e.g. Candidate A"
                                                {...field}
                                                className={`py-6 rounded-md text-base shadow-none ${
                                                    form.formState.errors.options?.[index]?.label?.message
                                                        ? 'border-red-500 focus-visible:ring-red-500'
                                                        : ''
                                                }`}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Description */}
                            <FormField
                                control={form.control}
                                name={`options.${index}.description`}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <RichTextEditor
                                                value={field.value}
                                                onChangeAction={field.onChange}
                                                error={form.formState.errors.options?.[index]?.description?.message}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Image */}
                            <FormField
                                control={form.control}
                                name={`options.${index}.image`}
                                render={({}) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <FileDropzone
                                                onFileChange={(file: File) => handleFileChange(index, file)}
                                                error={form.formState.errors.options?.[index]?.image?.message}
                                                initialImage={form.getValues(`options.${index}.initialImage`)}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Order */}
                            <FormField
                                control={form.control}
                                name={`options.${index}.order`}
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel>Order</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                value={field.value ?? ''}
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    field.onChange(value === '' ? undefined : Number(value));
                                                }}
                                                className={`py-6 rounded-md text-base shadow-none ${
                                                    form.formState.errors.options?.[index]?.order?.message
                                                        ? 'border-red-500 focus-visible:ring-red-500'
                                                        : ''
                                                }`}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Remove Option Button */}
                            <Button
                                type="button"
                                onClick={() => remove(index)}
                                className="absolute -top-4 -right-2 bg-red-500 text-white rounded-full w-8 h-8 cursor-pointer text-sm flex items-center justify-center hover:bg-red-700 transition"
                                title="Remove Option"
                            >
                                ×
                            </Button>
                        </Card>
                    ))}

                    {/* Add Option Button */}
                    <div className="flex items-center justify-end gap-2">
                        <Button
                            type="button"
                            onClick={() =>
                                append({ label: '', description: '', image: undefined, order: fields.length + 1 })
                            }
                            className="bg-blue-500 cursor-pointer hover:bg-blue-700 py-5"
                        >
                            Add Option
                            <Icon icon={'ic:baseline-plus'} />
                        </Button>
                        <Button
                            variant="destructive"
                            type="button"
                            onClick={router.back}
                            className="cursor-pointer py-5"
                        >
                            Cancel
                            <Icon icon={'material-symbols:cancel'} />
                        </Button>
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer py-5"
                        >
                            {isEdit ? 'Update Proposal' : 'Create Proposal'}
                            <Icon icon={'material-symbols:done'} />
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default ProposalForm;
