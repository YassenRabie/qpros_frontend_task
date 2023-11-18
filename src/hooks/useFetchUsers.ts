import {useEffect, useState} from "react";
import {UserType} from "@/types/user";

export function useFetchUsers() {
    const [users, setUsers] = useState<UserType[]>([]);

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getUsers();
    }, []);

    return { users };
}