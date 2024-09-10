export interface CreateUserTypes {
    email: string,
    name: string,
    password: string,
    role: string,
    birthday: Date | string,
    color_race: number | undefined,
    sex: number | undefined,
    zone: number | undefined,
    deficiency: boolean | undefined,
    cpf: string,
    responsable_telephone: string,
    responsable_name: string,
    responsable_cpf: string,
    kinship: string
}