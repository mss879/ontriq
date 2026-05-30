import { permanentRedirect } from 'next/navigation';

// 308 permanent redirect from old /services/recruitment URL to new full-keyword URL
// This preserves any existing Google index and backlinks
export default function RecruitmentRedirectPage() {
  permanentRedirect('/services/recruitment-services');
}

