import { createContext, useState } from "react";

interface User {
    name: string,
}

type setUser = React.Dispatch<React.SetStateAction<User | null>>


export const UserContext = createContext<[User | null, setUser]>(null as unknown as [null, setUser]);

export function useUserContext() {
    return createContext<[User | null, setUser]>(null as unknown as [null, setUser]);
}

function UserProvider({ children } : { children : JSX.Element | JSX.Element[]}) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;