import { redirect } from 'next/navigation';

// 301 redirect from old /services/bgv URL to new full-keyword URL
// This preserves any existing Google index and backlinks
export default function BgvRedirectPage() {
  redirect('/services/background-verification-services');
}
