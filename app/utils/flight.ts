export const fmtMonth = (m?: string) => (m ? m.replace('-', '.') : '')

export const fmtPeriod = (p?: { start: string, end?: string }, present = '') =>
  p ? `${fmtMonth(p.start)} – ${p.end ? fmtMonth(p.end) : present}`.trim() : ''

const GATE: Record<string, string> = { web: 'WEB', macos: 'macOS', ios: 'iOS', android: 'AND', desktop: 'DESK', edge: 'EDGE', server: 'SRV' }
export const gateOf = (platforms: string[] = []) => platforms.map(p => GATE[p] ?? p.toUpperCase()).slice(0, 2).join(' · ')

export const slugOf = (path: string) => path.split('/').pop() ?? path
