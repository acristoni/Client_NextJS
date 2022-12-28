export default async function getUsersList (page: number) { 
    try {
        const responseUserList = await fetch(`/api/userslist/${page}`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
        });

        const usersList = await responseUserList.json();
        return usersList
    } catch (err: any) {
        throw new Error(err.response.data.error || err.message)
    }
}