/** 章節對應的 Material Design Icons */
const ICONS: Record<string, string> = {
  '01': 'mdi-compass-outline',
  '02': 'mdi-sine-wave',
  '03': 'mdi-handshake-outline',
  '04': 'mdi-factory',
  '05': 'mdi-wrench-cog',
  '06': 'mdi-chip',
}

export function chapterIcon(slug: string): string {
  return ICONS[slug.slice(0, 2)] ?? 'mdi-book-alphabet'
}

export function chapterLabel(order: number | null): string {
  return order == null ? '附錄' : String(order).padStart(2, '0')
}

export type Track = 'overview' | 'fae' | 'equipment' | 'appendix'

/** 章節所屬分類：01 總覽、02–03 FAE、04 起設備與製造、無序號為附錄 */
export function chapterTrack(order: number | null): Track {
  if (order == null) return 'appendix'
  if (order <= 1) return 'overview'
  if (order <= 3) return 'fae'
  return 'equipment'
}

export const TRACK_LABEL: Record<Track, string> = {
  overview: '總覽',
  fae: 'FAE 軌',
  equipment: '設備與製造軌',
  appendix: '附錄',
}

export const TRACK_ICON: Record<Track, string> = {
  overview: 'mdi-compass-outline',
  fae: 'mdi-account-wrench',
  equipment: 'mdi-factory',
  appendix: 'mdi-book-alphabet',
}
