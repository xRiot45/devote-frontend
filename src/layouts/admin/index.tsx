// src/layouts/admin.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <aside>Sidebar Admin</aside>
            <main>{children}</main>
        </div>
    );
}
