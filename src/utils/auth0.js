import createAuth0Client from "@auth0/auth0-spa-js"

const init = async () => {
    const client = await createAuth0Client({
        domain: "murphee.us.auth0.com",
        client_id: "amAeOObnAWz0IP3IpPx6WeyBV01Wf4Do",
        redirect_uri: "http://localhost:8888",
    })

    return client
}

const login = async () => {
    const auth0 = await init()
    auth0.loginWithRedirect({screen_hint: "signup"})
}

export {login}
