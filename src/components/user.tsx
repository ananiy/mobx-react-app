import React from "react";
import { observer } from "mobx-react-lite";
import { useUserService, UserServiceProvider } from "../services/user";

interface UserProps {
  name?: string;
}

export const User = observer<UserProps>(({ name }) => {
  const userService = useUserService();
  return (
    <div>
      <h3>{userService.name ?? name ?? "default name"}</h3>
      <div>
        <input
          type="text"
          onChange={(e) => {
            userService.updateName(e.target.value);
          }}
        />
        <span> {userService.displayName}</span>
      </div>
    </div>
  );
});

export const Users = () => {
  return (
    <div>
      <User name="root"></User>
      <User></User>
      {new Array(3).fill(0).map((n, i) => (
        <UserServiceProvider key={i} initName={`init name: ${i}`}>
          <User name={`${i}`}></User>
        </UserServiceProvider>
      ))}
    </div>
  );
};
