import { createContext, useState } from "react";

interface User {
    name: string,
}

type setUser = React.Dispatch<React.SetStateAction<null>>

export const UserContext = createContext<[User | null, setUser]>(null as unknown as [null, setUser]);

function UserProvider({ children } : { children : JSX.Element[]}) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={[ user, setUser ]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;