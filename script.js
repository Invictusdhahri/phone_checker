
const check_btn=document.getElementById('check-btn');
const clear_btn=document.getElementById('clear-btn');
const output=document.getElementById('results-div');

function check(){
    const input=document.getElementById('user-input').value;
    
    if (input==''){
        alert('Please provide a phone number')
    }
    else {
        const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`

  );

  console.log(phoneRegex)
  phoneRegex.test(input)
        // const phone_number = input.replace(/[^0-9]/g, '');
        // console.log(phone_number);
        if (  phoneRegex.test(input)){
            // output.innerHTML=`Valid US number: ${input}`
            document.getElementById('results-div').innerHTML = 'Valid US number: ' + input;
        }

        else{
            // output.innerHTML=`Invalid US number:  ${input}`
            document.getElementById('results-div').innerHTML = 'Invalid US number: ' + input;

        }
    }


}
function clear(){
    document.getElementById('user-input').value=''
    output.innerHTML=''
}


check_btn.addEventListener('click',check)
clear_btn.addEventListener('click',clear)


