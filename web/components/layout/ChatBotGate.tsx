'use client';

import { usePathname } from 'next/navigation';
import DirectoryAdvisorBot from '@/components/ecosystem/DirectoryAdvisorBot';

// Pages where the default DirectoryAdvisorBot should NOT be shown
const EXCLUDED_PATHS = ['/fundraising-workshop-15apr'];

export default function ChatBotGate() {
  const pathname = usePathname();

  if (EXCLUDED_PATHS.includes(pathname)) return null;

  return <DirectoryAdvisorBot />;
}
