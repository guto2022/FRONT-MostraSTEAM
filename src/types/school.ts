/**
 * Informações institucionais. Todo texto marcado como provisório deve
 * ser substituído pela informação oficial fornecida pela organização.
 */
export interface SchoolInfo {
  name: string
  shortName: string
  event: string
  tagline: string
  about: string
  isAboutProvisional: boolean
  address: string
  isAddressProvisional: boolean
}
