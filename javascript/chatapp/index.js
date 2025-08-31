function add(e) {

    var chats = document.querySelector('#chats')
    if (e.keyCode == 13) {
        // console.log(e.target.value);
        var chat = e.target.value
        chats.innerHTML += `<li class='align-self-end ' > ${chat} </li>`
        e.target.value = ''
        if (["hi", "hello", "meri bat suno"].includes(chat)){
            function chatReturn() {

                return chats.innerHTML += `<li class='align-self-start'> hello </li>`
            }
        setTimeout(chatReturn, 3000)


    }else if(["sayalani", "smit", "course",].includes(chat)){
         function chatReturn() {

                return chats.innerHTML += `<li class='align-self-start'> course k baray main info chaiyeh apko </li>`
            }
        setTimeout(chatReturn, 3000)
    }

}

}

