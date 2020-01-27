export const getFavoriteShowsByUserId2 = async userId => {
    let response;
    try {
        response = await fetch(`http://localhost:3000/users/${userId}`);
    } catch (ex) {
        return this.setState({
            loading: false,
            error: ex
         })
    }
    if (!response.ok) {
        return this.setState({
            loading: false,
            error: response
        }) 
    }

    const user = await response.json();
    return user.shows
}




