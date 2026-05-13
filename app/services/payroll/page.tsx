import { redirect } from 'next/navigation';

// 301 redirect from old /services/payroll URL to new full-keyword URL
export default function PayrollRedirectPage() {
  redirect('/services/payroll-processing-services');
}
