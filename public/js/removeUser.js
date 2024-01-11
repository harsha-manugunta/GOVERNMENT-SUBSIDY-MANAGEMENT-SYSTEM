

const signin= async (mail)=>
{
    try{
        const res = await axios ({

            method:'DELETE',
            url:'/bugSlayers/user/removeUser',
            data :{
                mail}
        })

        // console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.form--signUp').addEventListener('submit',e=>{
    e.preventDefault();
   const mail= document.getElementById('mail').value;

   
signin(mail)
window.alert("deletion successfull");
});






