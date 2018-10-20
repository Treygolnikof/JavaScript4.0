class options {
    constructor(text, height, width, bg, fontSize, textAlign) {
        this.text = text;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.style.cssText = `
            height: ${this.height}; 
            width: ${this.width}; 
            background-color: ${this.bg}; 
            font-size: ${this.fontSize}; 
            text-align: ${this.textAlign};
        `;
        div.innerText = this.text;
        document.body.appendChild(div);
    }
}

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let text = prompt('Введите текст'),
        h = prompt('Какая будет высота блока?') + 'px',
        w = prompt('Какая будет ширина блока?') + 'px',
        b = prompt('Какой будет цвет у блока?'),
        f = prompt('Какой размер текста будет в блоке?') + 'px',
        t = prompt('Как будет выравнен текст?(right, center, left)');

    let abc = new options(text,h,w,b,f,t);

    abc.createDiv();
});

