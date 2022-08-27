({
    myAction : function(component, event, helper) {

    },
    handleClick : function (component, event, helper) {
        var str = component.get("v.phone");
        var patt = new RegExp("^[\+]?[0-9]{6,15}$");
        if(patt.test(str)){
            if(str.substring(0,1) == '+'){
                console.log("Under If");
                alert("You clicked: " + str.substring(1));
            }
            else{
                console.log("Under else");  
                alert("You clicked: " + str);
            }
            
        }
        else{
            alert("Please choose right syntax" );
        }
        
    }
})



// var str = "sdhdhh@gmail.com"; // true but coming false
// var str1 = "sdhdhh@gmail.co.uk"; // expected true coming false
// var str2 = "sdhdhh@gmail.org";
// var str3 = "sdhdhh@gmail.org.uk";
// var patt = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+?[\.co.uk]?[\.org]?[\.org.uk]$");
// console.log( str + " is " + patt.test(str));
// console.log( str1 + " is " + patt.test(str1));
// console.log( str2 + " is " + patt.test(str2));
// console.log( str3 + " is " + patt.test(str3));