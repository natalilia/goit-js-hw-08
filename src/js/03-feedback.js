import throttle from "lodash.throttle";
import {saveToLS, loadFromLS} from './helpers';
const refs = {
    formElem: document.querySelector('.feedback-form')
};
refs.formElem.addEventListener('input', onFormInput);
function onFormInput(e){
    const key = e.target.name;
    const value = e.target.value;
    
}
function onLoad(){
    const name = loadFromLS('name');
    const message = loadFromLS('message');
}
onLoad();