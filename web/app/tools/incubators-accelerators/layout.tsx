import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Incubators & Accelerators | The Startup School',
    description: 'Discover the best incubators and accelerators to help grow your startup from early stage to scale.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
