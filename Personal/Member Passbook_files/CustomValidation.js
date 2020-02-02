// JScript File

// trim functionality
String.prototype.trim = function()
{
    a = this.replace(/^\s+/, '');
    return a.replace(/\s+$/, '');
}; 

// required field validation function
function validate_required(field,alerttxt1, vcase, alerttxt2) 
{
//alert("inside validate_required");
    var check="";
    var fvalue = field.value.trim();
    if (fvalue == null || fvalue == "")
        return alerttxt1;
    else
    {
        check = validate_expression(field, vcase, alerttxt2);
        return check;            
    }
}

// regular expression check function

function validate_expression(field, vcase, alerttxt)
{
    var regex = "";
    switch(vcase)
    { 
        case 'otp':
            regex="^[0-9]{4}$";
            break;
        case 'pin':    // Only Digits
                regex = "^[0-9]{6}$";
                break;   
        case 'spChar': 
                regex="^(?=.*[$-\/:-?{-~!^_'\[\]]{2,}).{8,}$"
                 break;
        case 'alphanum': 
                regex="^(?=.*\w{4,}).{8,}$"
                break;
        case 'a':    // Only alphabets and space(s)
            regex = "^[a-zA-Z ]*$"
            break;
        case 'pan': // For PAN number
             regex = "[A-Za-z]{3}[pP]{1}[A-Za-z]{1}\\d{4}[A-Za-z]{1}";             
            break;
        case 'memId': //member id
            regex="^[a-zA-Z0-9]{1,22}$"
            break;
        case 'd':    // Only Digits
            regex = "^[0-9]*$"
            break;
        case 'd1':    // 12 Digits
            //regex = "^[0-9]*.{12}$"
            regex = "^[0-9]{12}$";
            break;
        case 'd2':    // 10 Digits
            //regex = "^[0-9]*.{12}$"
            regex = "^[0-9]{10}$";
            break;
        case 'e':    // Only alphabets and space(s) and period only 85 characters
            regex = "^[a-zA-Z. ]{85}*$"
            break; 
        
        case 'f':   // floating point numbers
            //regex = "^[0-9]+$|[0-9]+(?:(.|))[0-9]+$";
            regex = "^[0-9]+$|^[0-9]+(?:(\\.|))[0-9]+$";
            break;  
        case 'g':  // Email Validation C
            regex= "^([a-zA-Z0-9]+[._-])*[a-zA-Z0-9]+\@[a-zA-Z0-9]+[\\.]([a-zA-Z]{2,5}|[a-zA-z]{2,5}[\\.][a-zA-Z]{2,5})$";
            break;
        case 'h':    // Aplphanumeric [Alphabets+Digits] + space(s) + hyphen
            regex = "^[a-zA-Z0-9 -]*$"
            break;
        case 'passport': //Passport number by C
            regex = "^[a-zA-Z0-9]{8,10}$";
            break;
        case 'n':    // Aplphanumeric [Alphabets+Digits] (Space Not Allowed)
            //regex = "^[a-zA-Z0-9 ]"
            regex = "^[a-zA-Z0-9 ]*$"
            break;   
        case 'o':    // Only alphabets and space(s) and period
            regex = "^[a-zA-Z. ]*$"
            break;
        case 'p':    // Everything except < > ' ;
            regex = "^[^<>';]*$"
            break;
        case 't':   // used for date validation in dd/mm/yyyy format
	     //regex = "^(?:(31)(/)(0?[13578]|1[02])\\2|(29|30)(/)(0?[13-9]|1[0-2])\\5|(0?[1-9]|1\\d|2[0-8])(/)(0?[1-9]|1[0-2])\\8)((?:1[6-9]|[2-9]\\d)?\\d{2})$|^(29)(/)(0?2)\\12((?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)$";
             //	     regex = "^(?:(31)(/)(0?[13578]|1[02])\\2|(29|30)(/)(0?[13-9]|1[0-2])\\5|(0?[1-9]|1\\d|2[0-8])(/)(0?[1-9]|1[0-2])\\8)((?:1[6-9]|[2-9]\\d)?\\d{2})$|^(29)(/)(0?2)\\12((?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)$";
            regex = "^(((0[1-9]|[12]\\d|3[01])\\/(0[13578]|1[02])\\/((19|[2-9]\\d)\\d{2}))|((0[1-9]|[12]\\d|30)\\/(0[13456789]|1[012])\\/((19|[2-9]\\d)\\d{2}))|((0[1-9]|1\\d|2[0-8])\\/02\\/((19|[2-9]\\d)\\d{2}))|(29\\/02\\/((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$"; 
            break;
        case 'w':
            regex = "^[]{0,35}$"
        case 'y':   // used for having clause in drg for numbers
            regex = "^[1-9][0-9]*$";
            break;
        case 'z':   // used for having clause in drg for between and not between
            regex = "^[1-9][0-9]* (?:(and|AND)) [1-9][0-9]*$";
            break;
        case 'aadhaar':   // Aadhaar
               regex = "^[0-9]{12}$";
               break;
        case 'ifsc':   // IFSC validation
               //regex = "[a-zA-Z]{4}\\d{7}";
               regex = "[A-Z|a-z]{4}[0][A-Z|a-z|0-9]{6}$";
               break;
        case 'space':   // string containing space only
               regex = "^\s*$";
               break;
        case 'bank':    // Aplphanumeric [Alphabets+Digits] (Space Not Allowed)
               regex = "^[a-zA-Z0-9]{10,20}$";
               break;
        case 'ownEstMemberId':    // Only 7 Digits
                //regex = "^[0-9]{7}$";
                //regex = "\\d{7}";
                regex = "^[0-9]{7}$";
                break;   
        case "memberIdNew":    //Added By Rahul
                regex = "^[A-Za-z]{5}[0-9]{17}$";
                break;          
    }
    var fvalue = field.value.trim();
    if(fvalue.length >0)
    {
        var re = new RegExp(regex);
        var str = fvalue.match(re);
        if (str != null && str != "")
            return "";
        else
            return alerttxt;
    }
    else
        return "";
}

// function to retrieve url parametes using regular expressions.
function Get_Parameter(name)
{
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp(regexS);
  var winUrl = window.location.href;
  var results = regex.exec(winUrl);
  if( results == null )
    return "";
  else
    return results[1];
}

function SearchEmpId(priv,idtxtbox){
    if(priv == "E"){
		alert('You don\'t have rights to see the list of employees.'); 
    }else{
		var mine = window.open('/menumodule/svr/MiscellaneousServlet?status=EmpIdSearchView&idtxtbox='+idtxtbox,'','top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes');
        if(!mine)
            alert("Popup Blocked. Please Disable Pop Up Blocker.");
	}
}

function SearchGroupEmpId(priv,idtxtbox){
    if(priv == "E"){
        alert('You don\'t have rights to see the list of employees.'); 
    }else{
        //var mine = window.open('/menumodule/jsp/SearchEmployee/SearchEmployee.jsp?status=first&idtxtbox='+idtxtbox,'','top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes');
		var mine = window.open('/menumodule/svr/MiscellaneousServlet?status=EmpIdSearchView&idtxtbox='+idtxtbox,'','top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes');
        if(!mine)
            alert("Popup Blocked. Please Disable Pop Up Blocker.");
    }
}

function SearchITSPNewId(priv,idtxtbox){
    if(priv == "E"){
            alert('You don\'t have rights to see the list of employees.');
    }else{
          //  var mine = window.open('/menumodule/jsp/SearchEmployee/ITSPSearchEmployee.jsp?status=first&idtxtbox='+idtxtbox,'','top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes');
          var mine = window.open('/menumodule/svr/ITSPAttendanceServlet?status=ITSPEmpSearchListView&idtxtbox='+idtxtbox,'','top=10,left=10,resizable=1,height=500,width=740, scrollbars=1, status=yes');

        if(!mine)
            alert("Popup Blocked. Please Disable Pop Up Blocker.");
	}
}

function validateRequiredEmpId(field, alerttxt1, alerttxt2) {
    if(alerttxt1 == '') alerttxt1 = "Enter employee Id.\n";
    if(alerttxt2 == '') alerttxt2 = "Enter valid employee Id.\n";   
   return validate_required(field,alerttxt1,'d',alerttxt2);
}

function validateEmpId(field, alerttxt) {
   if(alerttxt == '') alerttxt = "Enter valid employee Id.\n";
   return validate_expression(field, 'd',alerttxt);
}
function setAndRemoveErrorMsg(object,msg){
    if(msg !==''){
       $(object).parent().find("P").remove();
       $(object).parent().append('<p style="color:red;">'+msg+'</p>');
       object.focus(function() {$(object).parent().find("P").remove(); });
    }
 }
 