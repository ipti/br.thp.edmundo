import { createContext } from "react";
import { CreateOrEditFormState } from "./state";
import { CreateOrEditFormTypes } from "../../../../Types/types";

export const CreateOrEditFormContext = createContext<CreateOrEditFormTypes | null>(null);

const CreateOrEditFormProvider = ({ children }: {children: React.ReactNode}) => {

    const {form, setform, responses, CreateForm} =  CreateOrEditFormState()

    return (
        <CreateOrEditFormContext.Provider value={{ form, setform, responses, CreateForm }}>
            {children}
        </CreateOrEditFormContext.Provider>
    )
}

export default CreateOrEditFormProvider;