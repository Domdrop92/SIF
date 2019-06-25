
    var input_values = document.getElementsByTagName("input")
    function checkOnIt() {
        
        if( input_values[0].value === "<h1>Heading #1</h1>" ){
            alert("right")
        }else{
            alert("wrong")
        }
        if( input_values[1].value === "<h2>Heading #2</h2>" ){
            alert("right")
        }else{
            alert("wrong")
        }
        if( input_values[2].value === "<h3>Heading #3</h3>" ){
            alert("right")
        }else{
            alert("wrong")
        }
    }
    function submitIt() {
       window.location= "#";
    }