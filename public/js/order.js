

const logout= async (Id,nameOnCard,creditCardNo, expMonth,expYear)=>
{
    try{
        const res = await axios ({

            method:'POST',
            url:'/bugSlayers/user/payment',
            data :{Id,nameOnCard,creditCardNo, expMonth,expYear
                }
        })

        console.log(res)
    } catch (err){console.log(err)}
}
document.querySelector('.payment').addEventListener('submit',e=>{
    e.preventDefault();
  const Id = document.getElementById('Id').value
  const nameOnCard= document.getElementById('nameOnCard').value
  const creditCardNo= document.getElementById('creditCardNo').value
  const expMonth=document.getElementById('expMonth').value
  const expYear=document.getElementById('expYear').value
logout(Id,nameOnCard,creditCardNo, expMonth,expYear)
window.alert("uploaded successfull")
});






