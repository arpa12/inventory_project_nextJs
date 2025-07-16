import { Provider } from '@/components/ui/provider';

export const metadata = {
    title: 'My Dashboard',
    description: 'Next.js + Chakra UI starter',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body>
        <Provider>{children}</Provider>
        </body>
        </html>
    );
}

// export default function RootLayout({ children }) {
//     return (
//         <html lang="en">
//         <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>{children}</body>
//         </html>
//     );
// }
