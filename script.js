console.log('it is connected!')

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('options');
const textBanks = [
    {
        id: 1, 
        text:'You wake up in the coding world, what do you do?',
        options: [
            {
                text: 'Explore the code world',
                nextText: 2
            },
            {
                text:'Im scared... stay put where you are',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'As you explore, you meet your GA instructors. They need your help with coding, what do you do? ',
        options: [
            {
                text: 'Of course! help with the coding',
                nextText: 4
                
            },
            {
                text: 'Im not so good at coding... I rather stay away',
                nextText: 5
            }

        ]
    },
    {
        id: 3,
        text: 'as you stay put wild css monster appears and take you away',
        options: [
            {
                text: 'Game over',
                nextText: -1,
               
            }
        ]
    },
    {
        id: 4,
        text: 'Instructors ask you build a code that will work as long as condition is met, which method do you use?',
        options: [
            {
                text: 'object method',
                nextText: 6
            },
            {
                text: 'for loop,',
                nextText: 7
            }
        ]
    },
    {
        id: 5,
        text: 'as you stay away from your instructors, javascript assasin creeps behind you and drag you to endless callback function world',
        options:[
            {
                text: 'Endless callback!!!, game over',
                nextText: -1
            }
           
        ]  
    },
    {
        id: 6,
        text: 'That is not correct and you become prisoned in object [ ] box forever',
        options: [
            {
                text: 'Boxed, game over',
                nextText: -1
            }
        ]
    },
    {
        id: 7,
        text: 'A wild css monster appears, you see its center div container is off the alignment. what do you do?',
        options: [
            {
                text: 'set its height to auto',
                nextText: 8

            },
            {
                text: 'set align-item to center',
                nextText: 9
            }
        ]
    },
    {
        id: 8,
        text: 'That did nothing to monster and it got hold of you. Monster drag you to its flexbox prison',
        options: [
            {
                text: 'Imprisoned in flexbox, game over',
                nextText: -1
            }
        ]
    },
    {
        id: 9,
        text: 'the div container aligns and monster falls down. The instructors hand you 2 code balls. Which one do you use?',
        options: [
            {
                text: ` "13" === "13" `,
                nextText: 10
            },
            {
                text: ` 13 === "13" `,
                nextText: 11
            }
        ]
    },
    {
        id: 10,
        text: 'The code ball worked! Monster is captured and code world is safe',
        options: [
            {
                text: 'You won!',
            },
        ]
    },
    {
        id: 11,
        text: 'That is incorrect, the code ball traps you into boolean realm',
        options: [
            {
                text: 'trapped in boolean realm. Game over',
                nextText: -1
            }
        ]
    }
]

function showOption(option){
    return option;
}

function selectOption(option) {
    const nextTextBank = option.nextText
    if (nextTextBank <= 0){
        return start()
    }
    showText(nextTextBank)
}

function showText (showTextIndex){
    const textBankObj = textBanks.find(textBank => textBank.id === showTextIndex)
    // console.log(textBank);
    textElement.innerText = textBankObj.text
    //console.log(textBankObj.text)
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textBankObj.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('clicks')
            button.addEventListener('click', () => selectOption(option))
            //console.log(option)
            optionButtonsElement.appendChild(button)
        }
    })
}

function start(){
    showText(1)
}

start();

