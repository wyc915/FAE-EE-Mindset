/** 章節對應的 Material Design Icons */
const ICONS: Record<string, string> = {
  '01': 'mdi-compass-outline',
  '02': 'mdi-sine-wave',
  '03': 'mdi-handshake-outline',
  '04': 'mdi-flash',
  '05': 'mdi-wifi',
  '06': 'mdi-car-electric',
  '07': 'mdi-factory',
  '08': 'mdi-wrench-cog',
  '09': 'mdi-flare',
  '10': 'mdi-layers-triple',
  '11': 'mdi-rotate-orbit',
  '12': 'mdi-package-variant-closed',
  '13': 'mdi-chip',
  '14': 'mdi-account-tie-voice',
}

export function chapterIcon(slug: string): string {
  return ICONS[slug.slice(0, 2)] ?? 'mdi-book-alphabet'
}

export function chapterLabel(order: number | null): string {
  return order == null ? '附錄' : String(order).padStart(2, '0')
}

export type Track = 'overview' | 'fae' | 'equipment' | 'interview' | 'appendix'

/** 章節所屬分類：01 總覽、02–06 FAE、07–13 設備與製造、14 起面試準備、無序號為附錄 */
export function chapterTrack(order: number | null): Track {
  if (order == null) return 'appendix'
  if (order <= 1) return 'overview'
  if (order <= 6) return 'fae'
  if (order <= 13) return 'equipment'
  return 'interview'
}

export const TRACK_LABEL: Record<Track, string> = {
  overview: '總覽',
  fae: 'FAE 軌',
  equipment: '設備與製造軌',
  interview: '面試準備',
  appendix: '附錄',
}

export const TRACK_ICON: Record<Track, string> = {
  overview: 'mdi-compass-outline',
  fae: 'mdi-account-wrench',
  equipment: 'mdi-factory',
  interview: 'mdi-account-tie-voice',
  appendix: 'mdi-book-alphabet',
}
