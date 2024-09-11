import http from "../../../../service/axios"

export const CreateUserRequest = async (body: any) => {

    const [day, month, year] = body.birthday.split("/");
    const dateObject = new Date(`${year}-${month}-${day}`);
    return await http.post("/user-registration-bff", {...body, kinship: body.kinship.id ?? undefined,birthday: dateObject, deficiency: body.deficiency.id, color_race: body.color_race.id, sex: body.sex.id, cpf: body.cpf.replace(/[^a-zA-Z0-9]/g, ''), responsable_telephone: body.responsable_telephone.replace(/[^a-zA-Z0-9]/g, ''), responsable_cpf: body.responsable_cpf.replace(/[^a-zA-Z0-9]/g, '')})
}

