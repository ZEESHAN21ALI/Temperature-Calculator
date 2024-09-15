function btn(){

    let temperature = document.getElementById("tempValue").value;
    let unit = document.getElementById("unitValue").value;
    let tempresult = 0;
    
    if(unit.toLowerCase() == "f"){
        tempResult = (temperature - 32) * 5/9
        document.getElementById("tempresult").value=temperature+"F" +" is Equal to "+ tempResult.toFixed(2)+"C";
    }
    else if(unit.toLowerCase() == "c"){
        tempResult = (temperature * 9/5) + 32
        document.getElementById("tempresult").value=temperature+"C" +" is Equal to "+ tempResult+"F";
    }
    else{
        document.write("Invalid unit")
    }
}