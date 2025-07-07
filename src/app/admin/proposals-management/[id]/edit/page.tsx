'use client';

import { BASE_URL } from '@/configs/url';
import { useBreadcrumb } from '@/contexts/breadcrumb-context';
import { useFetchProposalById } from '@/hooks/proposal/useFetchProposalById';
import { useUpdateProposal } from '@/hooks/proposal/useUpdateProposal';
import { ProposalFormValues, ProposalOption } from '@/interfaces/proposal';
import { BreadcrumbItem } from '@/types';
import { proposalValidationSchema } from '@/validations/proposal';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, Resolver, useForm } from 'react-hook-form';
import ProposalForm from '../../components/form';

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
        title: 'Edit Proposal',
        href: '#',
    },
];

export default function EditProposalPage() {
    const params = useParams();
    const id = Number(params.id);

    const updateProposal = useUpdateProposal();
    const { setBreadcrumbs } = useBreadcrumb();
    const { data: proposal } = useFetchProposalById(id);

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

    useEffect(() => {
        if (proposal) {
            form.reset({
                title: proposal.title ?? '',
                description: proposal.description ?? '',
                category: proposal.category ?? '',
                startTime: proposal.startTime ? new Date(proposal.startTime) : new Date(),
                endTime: proposal.endTime ? new Date(proposal.endTime) : new Date(),
                options:
                    proposal.proposalOptions?.map((opt: ProposalOption, index: number) => ({
                        label: opt.label ?? '',
                        description: opt.description ?? '',
                        image: undefined,
                        order: opt.order ?? index + 1,
                        initialImage: opt.image ? `${BASE_URL}/uploads/proposal-images/${opt.image}` : null,
                    })) ?? [],
            });
        }
    }, [proposal, form]);

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

        updateProposal.mutate({ id, payload: formData as unknown as ProposalFormValues });
    };

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [setBreadcrumbs]);

    return (
        <>
            <main className="p-2">
                <FormProvider {...form}>
                    <ProposalForm onSubmit={onSubmit} isEdit />
                </FormProvider>
            </main>
        </>
    );
}
