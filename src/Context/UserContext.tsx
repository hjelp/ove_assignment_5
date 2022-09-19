import { createContext, useState } from "react";
import { getUser } from "../API/getUser";
import { storageRead } from "../Storage/Storage";

export interface User {
    id: number,
    username: string,
    translations: string[],
}

type setUser = React.Dispatch<React.SetStateAction<User | null>>


export const UserContext = createContext<[User | null, setUser]>(null as unknown as [null, setUser]);

function UserProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
    const [user, setUser] = useState<User | null>(null);

    // Read local-storage and try to login
    const userLocal = storageRead('translate-user');
    if (userLocal !== null) {
        (async function fetchData() {
            const [error, user] = await getUser(userLocal)
            if (error == null) {
                setUser(user)
            }
        }
        )()
    }
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;