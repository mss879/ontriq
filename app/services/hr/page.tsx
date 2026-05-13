import { redirect } from 'next/navigation';

// 301 redirect from old /services/hr URL to new full-keyword URL
export default function HrRedirectPage() {
  redirect('/services/hr-management-services');
}
