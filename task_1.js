
let question = prompt('Your age?');
if(question <= 17){
    confirm ('Do you study at school ?')
}
else if(question > 17 && question <= 25 ){
    confirm ('Do you study at university ?')
}
else if(question >= 25 && question < 60 ){
    confirm ('Do you have a job ?')
}
else {
    confirm ('What are yoy doing ?')
}
