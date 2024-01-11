

const accepDeal= async (dealId,text)=>
{
    try{
        const res = await axios ({

            method:'PATCH',
            url:'/bugSlayers/dealers/acceptBargain',
            data :{dealId,
                text,


                  }
        })

        console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.aggrement').addEventListener('submit', async e=>{
    e.preventDefault();
    const dealId= document.getElementById('dealId').value;
    const text= document.getElementById('text').value;
    

   
     accepDeal(dealId,text)
window.alert("Accepted successfully")
});






