import { permanentRedirect } from 'next/navigation';

// 308 permanent redirect from old /services/bgv URL to new full-keyword URL
// This preserves any existing Google index and backlinks
export default function BgvRedirectPage() {
  permanentRedirect('/services/background-verification-services');
}

