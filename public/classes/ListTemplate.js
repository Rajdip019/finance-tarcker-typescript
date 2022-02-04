export class ListTemplate {
    constructor(conatainer) {
        this.conatainer = conatainer;
    }
    render(item, heading, pos) {
        console.log(heading);
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.conatainer.prepend(li);
        }
        else {
            this.conatainer.append(li);
        }
    }
}
