import { createContext, useState } from "react";

export interface User {
    id: number,
    username: string,
    translations: string[],
}

type setUser = React.Dispatch<React.SetStateAction<User | null>>


export const UserContext = createContext<[User | null, setUser]>(null as unknown as [null, setUser]);

function UserProvider({ children } : { children : JSX.Element | JSX.Element[]}) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;