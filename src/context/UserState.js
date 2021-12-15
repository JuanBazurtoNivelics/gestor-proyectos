import React from 'react'
import userContext from './userContext'

import UserReducer from './UserReducer'
import { collection, getDocs,addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useReducer } from 'react';



export const UserState = (props) => {
	const initialState = {
		developers:[],
		selectedDeveloper:null
	}
	const[state, dispatch] = useReducer(UserReducer, initialState)
	
	const getDevelopers = async ()=>{
		let developersList = []
		const developers = await getDocs(collection(db,'developers'))
		developers.forEach((developer)=>{
			developersList.push(developer.data())
        })
		dispatch({
			type:'GET_DEVELOPERS',
			payload:developersList
		})
	}	
	const getProfile = (developer)=>{
		 dispatch({
			 type:'GET_PROFILE',
			 payload:developer
		 })
		
	}
	return (
		<userContext.Provider value = {
			{developers:state.developers,
			selectedDeveloper:state.selectedDeveloper,
			getDevelopers,
			getProfile}
		}>
			{props.children}
		</userContext.Provider>
	)
}
export default UserState