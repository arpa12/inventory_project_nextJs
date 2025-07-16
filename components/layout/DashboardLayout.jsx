'use client';

import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';

export default function DashboardLayout({ children }) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <div style={{ flex: 1, background: '#EDF2F7' }}>
                <Topbar />
                <div style={{ padding: 24 }}>{children}</div>
            </div>
        </div>
    );
}
