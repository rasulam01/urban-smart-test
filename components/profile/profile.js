import { useSelector } from "react-redux"
export const Profile = () => {

    const login = useSelector(state => state.login)

    return (
        <>
          <div className="greeting">
              <h1>Welcome aboard, {login}!</h1>
          </div>
        </>
    )
}