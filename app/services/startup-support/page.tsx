import { permanentRedirect } from 'next/navigation';

// 308 permanent redirect from old /services/startup-support URL to new full-keyword URL
export default function StartupSupportRedirectPage() {
  permanentRedirect('/services/startup-support-services');
}

