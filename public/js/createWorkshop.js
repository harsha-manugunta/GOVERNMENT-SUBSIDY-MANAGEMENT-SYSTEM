

const signup= async (from,eventName,eventAbout,eventDate,eventTime)=>
{
    try{
        const res = await axios ({

            method:'POST',
            url:'/bugSlayers/analyst/createWorkshop',
            data :{
                from,eventName,eventAbout,eventDate,eventTime}
        })

        // console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.form--workshop').addEventListener('submit',e=>{
    e.preventDefault();
   const from= document.getElementById('from').value;
   console.log(from)
   const eventName= document.getElementById('eventName').value;
   const eventAbout=document.getElementById('eventAbout').value;
   const eventDate=document.getElementById('eventDate').value;
   const eventTime=document.getElementById('eventTime').value;
signup(from,eventName,eventAbout,eventDate,eventTime)
window.alert("post successfull")});





