let btn1 = document.querySelector('#btn1');

const handler1 = () => {
    document.querySelector('body').style.backgroundColor = "black"
    btn1.innerText += 'Hello'
}

btn1.addEventListener("click", handler1)