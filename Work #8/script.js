'use strict';
class options{
    constructor(height, width, bg, fontSize, textAlign, content){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.content = content;
    }

    create (){
        document.body.innerHTML=`<div>${this.content}</div>`;
        let text = document.querySelector('div');
        text.style.textAlign = this.textAlign;
        text.style.fontSize = this.fontSize;
    }
}

let test = new options(500,500,0,'70px','center','Приветики!))');
test.create();