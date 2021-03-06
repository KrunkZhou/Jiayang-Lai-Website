var ConsoleManager={
            onOpen:function(){
                alert("Console is opened")
            },
            onClose:function(){
                alert("Console is closed")
            },
            init:function(){
                var self = this;
                var x = document.createElement('div');
                var isOpening = false,isOpened=false;
                Object.defineProperty(x, 'id', {
                    get:function(){
                        if(!isOpening){
                            self.onOpen();
                            isOpening=true;
                        }
                        isOpened=true;
                    }
                });
                setInterval(function(){
                    isOpened=false;
                    console.info(x);
                    console.clear();
                    if(!isOpened && isOpening){
                        self.onClose();
                        isOpening=false;
                    }
                },200)
            }
        }

        ConsoleManager.onOpen = function(){
            //Redirect to error page
            try{
                window.open('stop.html',target='_self');
            }catch(err){
                var a = document.createElement("button");
                    a.onclick=function(){
                    window.open('stop.html',target='_self');
                }
                a.click();  
            }
        }
        ConsoleManager.onClose = function(){
            alert("Console is closed!!!!!")
        }
        ConsoleManager.init();