function Forma (){
    let massege = {
        loading: 'Идёт отправка...',
        complete: 'Спасибо что подождали, оправка завершена!',
        failure: 'Ой... Что-то пошло не так...'
    };
    
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input');
    
    let statusMassage = document.createElement('div');
    statusMassage.classList.add('status');
    
    let form2 = document.getElementById('form');
    
    form2.addEventListener('submit',(event)=>{
        event.preventDefault();
        form2.appendChild(statusMassage);
    
        let request = new XMLHttpRequest();
        request.open('POST','server.php');
        request.setRequestHeader('Content-Type','application/json; charset =utf-8');
    
        let obj={};
    
        let formData2 = new FormData();
    
        formData2.forEach((value, key)=>{
            obj[key] = value;
        });
    
        let json = JSON.stringify(obj);
    
        request.send(json);
    
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState < 4){
                statusMassage.innerHTML = massege.loading;
            } else if (request.readyState === 4 && request.status == 200){
                statusMassage.innerHTML =massege.complete;
            } else{
                statusMassage.innerHTML =massege.failure;
            }
        });
    });
    
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        form.appendChild(statusMassage);
    
            let formData1 = new FormData();
            let request = new XMLHttpRequest();
            function postData(data){
            return new Promise((resolve,reject)=>{ request.open('POST','server.php');
            request.setRequestHeader('Content-Type','application/json; charset =utf-8');
        
            let obj={};
        
            
        
            formData1.forEach((value, key)=>{
                obj[key] = value;
            });
        
            let json = JSON.stringify(obj);
        
            request.send(json);
        
            request.addEventListener('readystatechange', ()=>{
                if(request.readyState < 4){
                    resolve();
                } else if (request.readyState === 4 && request.status == 200){
                    resolve();
                } else{
                    reject();
                }
        });
    });
    }
    postData(formData1).then(()=>{
        statusMassage.innerHTML = massege.loading;
    }).then(()=>{
        statusMassage.innerHTML = massege.complete;
    }).catch(()=>{
        statusMassage.innerHTML =massege.failure;
    }); 
    });
}

module.exports = Forma;