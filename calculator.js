function displayData(data){
    result.value+=data
}

function allClear(){
    result.value=""
}

function outPutOper(){
    result.value=eval(result.value)
}

function del(){
    result.value=result.value.slice(0,-1)
}