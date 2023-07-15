const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput=document.querySelector("#qr-form input")
const qrCodeImg=document.querySelector("#qr-code img")

 //Eventos
  function generateQrCode(){
    const qrCodeInputValue=qrCodeInput.value;

    if(!qrCodeInputValue) return;
   
     qrCodeBtn.innerText = "Gerando código...";
     qrCodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
      //só mostra quando carregar..
      qrCodeImg.addEventListener("load",()=>{
         container.classList.add("active")
         qrCodeBtn.innerText = "Código gerado";
      })
      
  }

  qrCodeBtn.addEventListener("click",function(){
        generateQrCode()
  })

  qrCodeBtn.addEventListener("keydown",function(e){
      if(e.code==="enter"){
        generateQrCode()
      }
  })

  //Limpar área de qrcode
    qrCodeInput.addEventListener("keyup",function(e){
        if(!qrCodeInput.value){
            qrCodeBtn.innerText="Gerar Qr Code";
            container.classList.remove("active")
        }
    })