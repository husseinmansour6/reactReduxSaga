import React, { useEffect } from "react"
import { useSelector, useDispatch } from "redux"
import { getUsers } from "../redux/actions/users"
import Card from "./CardComponent"

const Users = () => {
  // useEffect to handle the action and dispatch it in our component
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "blah blah",
          company: {
            name: "Company1",
            catchPhrase: "hey there"
          }
        }
      ])
    )
  }, [])
  return (
    <>
      {users.length > 0 &&
        users.map(user => <Card user={user} key={user.id} />)}
      {users.length === 0 && <p>No users available!</p>}
    </>
  )
}

export default Users
