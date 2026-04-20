import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Registration Confirmed | AI Startup Bootcamp – The Startup School',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
