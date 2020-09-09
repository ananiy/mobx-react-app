import { observable, computed, action } from "mobx";
import React from "react";

class UserService {
  @observable name?: string;

  constructor(name?: string) {
    this.name = name;
  }

  @computed get displayName() {
    return this.name ? `dear ${this.name}~` : "default display";
  }

  @action.bound updateName(name: string) {
    this.name = name;
  }
}

const UserServiceContext = React.createContext(new UserService());

export const UserServiceProvider: React.FC<{ initName?: string }> = ({
  children,
  initName,
}) => (
  <UserServiceContext.Provider value={new UserService(initName)}>
    {children}
  </UserServiceContext.Provider>
);

export const useUserService = () => {
  const userService = React.useContext(UserServiceContext);

  React.useEffect(() => {
    if (userService.name !== undefined) {
      console.log(userService.name);
    }
  }, [userService]);

  return userService;
};
