import { redirect } from 'next/navigation';

// 301 redirect from old /services/recruitment URL to new full-keyword URL
// This preserves any existing Google index and backlinks
export default function RecruitmentRedirectPage() {
  redirect('/services/recruitment-services');
}
