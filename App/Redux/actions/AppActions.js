import {
    USER_CONFIRM_PHONE,
    USER_GET_COURSES_LIST,
    USER_SET_ROLE,
    ACTIVATE_TEACHER,
    USER_GET_COURSE,
    USER_GET_COURSE_TRAINING
} from '../constants';

import Axios from 'axios';
import { baseUrl } from '../../src/Config';

export const UserConfirmPhone = (phone) => ({
    type: USER_CONFIRM_PHONE,
    payload: Axios({
        method: 'POST',
        baseURL: baseUrl,
        url: 'mobile/confirmPhone',
        data: {
            phone,
        },
    }).then((res) => res.data),
});

export const getCoursesList = (token) => {
    return {
        type: USER_GET_COURSES_LIST,
        payload: Axios({
                method: 'GET',
                baseURL: baseUrl,
                url: 'mobile/courses',
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => console.log({
                err
            })),
    };
};

export const getCourse = (id) => {
    return {
        type: USER_GET_COURSE,
        payload: Axios({
                method: 'GET',
                baseURL: baseUrl,
                url: 'mobile/course',
                params: {
                    id: id
                }
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => console.log({
                err
            })),
    };
};

export const getCourseTraining = (id) => {
    return {
        type: USER_GET_COURSE_TRAINING,
        payload: Axios({
            method: 'GET',
            baseURL: baseUrl,
            url: 'mobile/task',
            params: {
                id: id
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => console.log({
            err
        })),
    };
};

export const setUserRole = (role) => {
    return {
        type: USER_SET_ROLE,
        payload: role
    };
};

export const activateTeacher = () => {
    return {
        type: ACTIVATE_TEACHER,
        payload: true
    };
};