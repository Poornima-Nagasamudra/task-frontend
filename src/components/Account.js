import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetAccount } from '../actions/userAction'

function Account(props){
    const dispatch = useDispatch()

    const user = useSelector((state) => {
        return state.user
    })

    useEffect(() => {
       dispatch(startGetAccount())
    }, [dispatch])

    return(
        <div >
             <h1>User Account</h1>

            {Object.keys(user).length !== 0 &&  (
                <div  style={{color: "green"}}>
                    <h3  >User Name:</h3>
                    <h4>{user.username}</h4>

                    <h3 >Email Id :</h3>
                    <h4>{user.email}</h4>
                </div>
            )}
        </div>
    )
}

export default Account