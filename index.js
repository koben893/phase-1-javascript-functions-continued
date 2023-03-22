function saturdayFun(activity = 'roller-skate') { 
    return `This Saturday, I want to ${activity}!`  
}

function mondayWork(descision = 'go to the office') { 
    return `This Monday, I will ${descision}.`  
}
function wrapAdjective(wrap = '*') {
    return function(adjective = 'special') {
        return `You are ${wrap}${adjective}${wrap}!`
    }

}