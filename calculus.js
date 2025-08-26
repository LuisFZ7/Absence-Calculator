const fs = require('fs');

//calculation of the absence
function absencePer(absence, totalClasses){
    let percent;
    return percent = 100 - ((absence/totalClasses)*100);
}

//change the absence percentage on the json file
function classAbsence(file = '', json = '""', absence, totalClasses, className){
    for(var i = 0; i<json.classes.length; i++){
     if(json.classes[i]["className"] == className){
            json.classes[i]["absence percentage"] = absencePer(absence, totalClasses);
            saveJSON(file, json);
        }
    }
}

//load the  JSON file
function loadJSON(file = ''){
    if (fs.existsSync(file)){
        return JSON.parse(fs.readFileSync('classes.json').toString())
    }else{
        return 'No file found'
    }
}

const data = loadJSON('classes.json')

//save the new JSON file
function saveJSON(file = '', json = '""'){
    return fs.writeFileSync(file, JSON.stringify(json, null, 2))
}

//return the list of the classes that appear on your JSON file
function classesNames(file = '', json = '""'){
    if (fs.existsSync(file)){
        JSON.parse(fs.readFileSync('classes.json').toString())
        for(var i = 0; i<json.classes.length; i++){
            console.log(json.classes[i]["className"])
        }
    }else{
        return 'No file found'
    }
}

//select the class you want to change or see the absence
console.log('which class do you want to see the absence percentage?')
classesNames('classes.json', data)


classAbsence('classes.json', data, 7, 16, 'Lab Micro')
classAbsence('classes.json', data, 7, 16, 'Micro')
classAbsence('classes.json', data, 7, 16, 'Sinais e Sistemas')
