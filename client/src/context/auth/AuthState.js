import React, {useReducer} from 'react';
import AuthContext from './authContext'
import axios from 'axios'
import authReducer from './authReducer'
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR,
        LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_ERRORS } from '../types'

        export const AuthState = props => {
            const initialState = {
                token: localStorage.getItem('token'),
                isAuthenticated: null,
                loading: true,
                user: null,
                error: null
            };

            const [state, dispatch] = useReducer(authReducer, initialState)

            // load user
            const loadUser = () => {
                console.log('load')
            }

            // register user
            const register = async formData => {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                try {
                    const res = await axios.post('/api/users', formData, config);
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: res.data
                    })
                } catch (error) {
                    dispatch({
                        type: REGISTER_FAIL,
                        payload: error.response
                    })
                }
            }

            // login user
            const login = () => {
                console.log('load')
            }

            // logout
            const logout = () => {
                console.log('load')
            }

            // clear errors
            const clearErrors = () => {
                console.log('load')
            }


            return (
                <AuthContext.Provider value={{
                   token: state.token,
                   isAuthenticated: state.isAuthenticated,
                   loading: state.loading,
                   user: state.user,
                    error: state.error,
                    register,
                    loadUser,
                    login,
                    logout,
                    clearErrors
                }}>
                    {props.children}
                </AuthContext.Provider>
            )
        }