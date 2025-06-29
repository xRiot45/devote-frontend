'use client';

import { BreadcrumbItem } from '@/types';
import { createContext, useContext, useState } from 'react';

const BreadcrumbContext = createContext<{
    breadcrumbs: BreadcrumbItem[];
    setBreadcrumbs: (items: BreadcrumbItem[]) => void;
} | null>(null);

export function BreadcrumbProvider({ children }: { children: React.ReactNode }) {
    const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
    return <BreadcrumbContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>{children}</BreadcrumbContext.Provider>;
}

export function useBreadcrumb() {
    const context = useContext(BreadcrumbContext);
    if (!context) throw new Error('useBreadcrumb harus digunakan dalam BreadcrumbProvider');
    return context;
}
