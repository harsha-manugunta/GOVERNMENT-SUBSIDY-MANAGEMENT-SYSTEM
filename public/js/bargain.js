

const bargain= async (dealId,bargainedAmount)=>
{
    try{
        const res = await axios ({

            method:'PATCH',
            url:'/bugSlayers/dealers/bargain',
            data :{dealId,
                bargainedAmount

                  }
        })

        // console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.bargain').addEventListener('submit',e=>{
    e.preventDefault();
    const dealId= document.getElementById('dealId').value;
    const text= document.getElementById('bargainedAmount').value;
    const text1=parseInt(text)
    bargain(dealId,text1)
window.alert("Amount Updated Successfully ")
});






