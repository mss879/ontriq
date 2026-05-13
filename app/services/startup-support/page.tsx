import { redirect } from 'next/navigation';

// 301 redirect from old /services/startup-support URL to new full-keyword URL
export default function StartupSupportRedirectPage() {
  redirect('/services/startup-support-services');
}
