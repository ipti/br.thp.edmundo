export interface UpdateUser {
  name?: string,
  email?: string,
  birthday?: Date | string,
  color_race?: number | undefined,
  sex?: number | undefined,
  zone?: number | undefined,
  deficiency?: boolean | undefined,
  cpf?: string,
  responsable_telephone?: string,
  responsable_name?: string,
  responsable_cpf?: string,
  kinship?: string
}