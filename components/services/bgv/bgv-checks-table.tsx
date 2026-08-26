// Server-renderable comparison table targeting featured snippets for
// "types of background checks" queries. Deliberately NOT wrapped in any
// animation so the table is always present in the crawlable HTML.

const checkRows = [
  {
    check: 'Employment History Verification',
    verifies: 'Job titles, tenure, reporting lines, and reasons for leaving — confirmed directly with previous employers',
    turnaround: '3–5 working days',
  },
  {
    check: 'Educational Background Verification',
    verifies: 'Degrees, diplomas, transcripts, and the accreditation of issuing institutions',
    turnaround: '4–7 working days',
  },
  {
    check: 'Criminal Record & Legal Checks',
    verifies: 'Police records, court registries, and pending litigation',
    turnaround: '5–7 working days',
  },
  {
    check: 'Identity & Address Verification',
    verifies: 'NIC/passport authenticity and residential address, including field visits',
    turnaround: '2–4 working days',
  },
  {
    check: 'Professional Reference Checks',
    verifies: 'Structured feedback from former supervisors and professional contacts',
    turnaround: '2–3 working days',
  },
  {
    check: 'Global Sanction & Watchlist Screening',
    verifies: 'International sanction lists, global watchlists, and AML databases',
    turnaround: '1–2 working days',
  },
  {
    check: 'Drug Testing & Screening',
    verifies: 'Laboratory-certified pre-employment and random drug screening',
    turnaround: '2–3 working days',
  },
];

export function BgvChecksTable() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">
        Background Check Types &amp; Turnaround Times
      </h3>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th scope="col" className="px-6 py-4 font-semibold text-slate-900">Check Type</th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-900">What We Verify</th>
              <th scope="col" className="px-6 py-4 font-semibold text-slate-900 whitespace-nowrap">Typical Turnaround</th>
            </tr>
          </thead>
          <tbody>
            {checkRows.map((row) => (
              <tr key={row.check} className="border-b border-slate-100 last:border-b-0">
                <td className="px-6 py-4 font-medium text-slate-900">{row.check}</td>
                <td className="px-6 py-4 text-slate-600">{row.verifies}</td>
                <td className="px-6 py-4 text-slate-600 whitespace-nowrap">{row.turnaround}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-slate-500">
        Individual checks run in parallel, so a complete multi-check background verification case is still delivered within 7 working days.
      </p>
    </div>
  );
}
