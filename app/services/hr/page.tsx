import { permanentRedirect } from 'next/navigation';

// 308 permanent redirect from old /services/hr URL to new full-keyword URL
export default function HrRedirectPage() {
  permanentRedirect('/services/hr-management-services');
}

