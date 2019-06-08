/**
 * Created by eric on 1/1/19.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //定义state属性
        answerId_01: '',
        answerId_04: '',

        phone: '',
        token: ''
    },
    mutations: {
        setAnswerId(state, objs ){
            if( objs.index && objs.index === 1 ){
                state.answerId_01 = objs.answerId;
            }else{
                state.answerId_04 = objs.answerId;
            }
        },


        setPhone(state, phone){
            state.phone = phone
        },
        setToken(state, token){
            state.token = token
        },
    },
    
})

export default store
