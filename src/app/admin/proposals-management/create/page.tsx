'use client';

import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { useCreateProposal } from '@/hooks/proposal/useCreateProposal';
import { ProposalFormValues } from '@/interfaces/proposal';
import { BreadcrumbItem } from '@/types';
import { proposalValidationSchema } from '@/validations/proposal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, Resolver, useForm } from 'react-hook-form';
import ProposalForm from '../components/form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: '#',
    },
    {
        title: 'Proposals Management',
        href: '/admin/proposals-management',
    },
    {
        title: 'Create Proposal',
        href: '#',
    },
];

export default function CreateProposalPage() {
    const { setBreadcrumbs } = useBreadcrumb();
    const createProposal = useCreateProposal();

    const form = useForm<ProposalFormValues>({
        resolver: zodResolver(proposalValidationSchema) as Resolver<ProposalFormValues>,
        mode: 'onChange',
        defaultValues: {
            title: '',
            description: '',
            category: '',
            startTime: new Date(),
            endTime: new Date(),
            options: [{ label: '', description: '', image: undefined, order: 0 }],
        },
    });

    const onSubmit = (payload: ProposalFormValues) => {
        const formData = new FormData();

        formData.append('title', payload.title);
        formData.append('description', payload.description);
        formData.append('category', payload.category);
        formData.append('startTime', payload.startTime.toISOString());
        formData.append('endTime', payload.endTime.toISOString());

        payload?.options.forEach((option, index) => {
            formData.append(`options[${index}].label`, option.label);
            formData.append(`options[${index}].description`, option.description);
            formData.append(`options[${index}].order`, option.order.toString());

            if (option.image instanceof File) {
                formData.append(`image_${index}`, option.image);
            }
        });

        createProposal.mutate(formData as unknown as ProposalFormValues);
    };

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <main className="p-2">
            <FormProvider {...form}>
                <ProposalForm onSubmit={onSubmit} />
            </FormProvider>
        </main>
    );
}
