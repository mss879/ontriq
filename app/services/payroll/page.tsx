import { permanentRedirect } from 'next/navigation';

// 308 permanent redirect from old /services/payroll URL to new full-keyword URL
export default function PayrollRedirectPage() {
  permanentRedirect('/services/payroll-processing-services');
}

