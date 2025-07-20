import { NavGroup } from '@/types';

const mainNavItems: NavGroup[] = [
    {
        group: 'Main',
        items: [
            {
                title: 'Dashboard',
                href: '/admin/dashboard',
                icon: 'material-symbols:dashboard',
            },
        ],
    },
    {
        group: 'Management',
        items: [
            {
                title: 'Users Management',
                href: '/admin/users-management',
                icon: 'material-symbols:manage-accounts',
            },
            {
                title: 'Proposals Management',
                href: '/admin/proposals-management',
                icon: 'material-symbols:event-note',
            },
            {
                title: 'Voting Sessions',
                href: '/admin/voting-sessions',
                icon: 'material-symbols:how-to-vote',
            },
            {
                title: 'Voting Results',
                href: '/admin/voting-results',
                icon: 'material-symbols:bar-chart-rounded',
            },
        ],
    },
    // {
    //     group: 'Blockchain',
    //     items: [
    //         {
    //             title: 'Wallet Connections',
    //             href: '/admin/wallet-connections',
    //             icon: 'material-symbols:account-balance-wallet',
    //         },
    //         {
    //             title: 'Audit Logs',
    //             href: '/admin/audit-logs',
    //             icon: 'material-symbols:fact-check',
    //         },
    //     ],
    // },
    // {
    //     group: 'Settings',
    //     items: [
    //         {
    //             title: 'Admin Access',
    //             href: '/admin/admin-access',
    //             icon: 'material-symbols:admin-panel-settings',
    //         },
    //         {
    //             title: 'System Settings',
    //             href: '/admin/system-settings',
    //             icon: 'material-symbols:settings',
    //         },
    //     ],
    // },
];

export default mainNavItems;
