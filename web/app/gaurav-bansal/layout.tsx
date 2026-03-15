import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gaurav Bansal | The Startup School',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
