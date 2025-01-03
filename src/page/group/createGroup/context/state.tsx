import { CreateGroupController } from "../service/controller";
import { CreateGroup } from "../service/types";

export const CreateGroupState = () => {
  const initialValue: CreateGroup = {
    name: "",
  };

  const { CreateGroupMutation } = CreateGroupController();

  const CreateGroup = (body: CreateGroup) => {
    CreateGroupMutation.mutate(body);
  };
  return { initialValue, CreateGroup };
};
