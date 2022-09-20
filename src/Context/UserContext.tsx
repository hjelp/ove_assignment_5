import { createContext, useState } from "react";
import  getUserById  from "../API/getUserById";
import { storageRead } from "../Storage/Storage";
import { STORAGE_KEY_USER } from "../Storage/storageKeys";

export interface User {
    id: number,
    username: string,
    translations: string[],
}

type setUser = React.Dispatch<React.SetStateAction<User | null>>


export const UserContext = createContext<[User | null, setUser]>(null as unknown as [null, setUser]);

export function useUserContext() {
    return createContext<[User | null, setUser]>(null as unknown as [null, setUser]);
}

function UserProvider({ children } : { children : JSX.Element | JSX.Element[]}) {
    const [user, setUser] = useState<User | null>(null);
    const userLocal = storageRead(STORAGE_KEY_USER) as number;

    
    if(userLocal !== null && user === null){
        getUserById(userLocal)
        .then(data => {
            let [, user] = data;
            if(user !== null) {
                setUser(user);
            }
        });
    }

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;