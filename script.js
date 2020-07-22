console.log('it is connected!')

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('options');

let state = {}

function start(){
    showText(1)
    state = {}
}

function showText (showTextIndex){
    const textBank = textBanks.find(textBank => textBank.id === showTextIndex)
    // console.log(textBank);
    textElement.innerText = textBank.text
    console.log(textBank.text)
    while (optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textBank.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innnerText = option.text
            button.classList.add('clicks')
            button.addEventListener('click', () => selectOption(option))
            console.log(selectOption)
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextBank = option.nextText
    if (nextTextBank <= 0){
        return start()
    }
    state = Object.assign(state, option.setState)
    showText(nextTextBank)
}

const textBanks = [
    {
        id: 1, 
        text:'You got a streaming device as a gift from a friend. What will you do?',
        options: [
            {
                text: 'Keep the device and stream away',
                setState: { device: true, cash: false},
                nextText: 2
            },
            {
                text:'Im not into it, return device for cash',
                setState: {device: false, cash: true},
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Online coding has became a thing, will you jump ',
        options: [
            {
                text: 'Use the viewbot',
                
            },
            {
                text: 'aaaaaa',
            }

        ]
    }
]

start();

/* breaking it down to smallest pictures and scopes
what kind of function or actions need?
after game start and user read through welcome message
1. function to be able to click each boxes
    a. upon onclick events, that followers/cash/fatigue bar work accordingly
2. if user does not have enough health or cash, the boxes that require certain number will not be
able to use the action and show message "you do not have enough resources!"
3. create set of random texts accordingly to the each event boxes and spit out the text to textbox
when the action is pressed upon
    
4. store the random set boxes
5. the dates will pass by per action boxes
    a. have next day button setup to refresh fatigue bar
6. the fatigue will decrease per action
    a. refreshed upon next day button onclick
7. save the current cash / follower number upon next day
8. win condition function that if follower reached 1million, the browser stops and alert win message.

breaking down action events
aa. the losing percentage / lose amount will be small (going above and beyond)
1. stream = gain small number of follower / gain money / fatigue bar goes down
2. hosting event = can gain or *lose* bigger number of followers / lose money / fatigue bar goes down significantly
3. streamathon = ++ gain of followers / bigger donations / larger loss of fatigue
4. giveaway = possibly one of the biggest gain of follower / loss of significant money / almost no fatigue
5 sponsor from big company = big gains on followers / earn significant money / almost no fatigue
6. hosting offline event = biggest gain on follower / loss of money / entire fatigue wasted 

breaking down random set of text boxes

1. stream: [you have streamed couple people enjoyed your stream, new follower! 
            you had a good day, some people started talk about you among community
            you interacted with your fans really well, positivie day!]
2. event [ hosting online event can be rought but community has heard you and lots of people dropped by
            bigger number of audience than usual but you pulled through! 
            you have created buzz around the community]
3. streamathon [the streamathon is very tiring but its for a good cause and your reputation has increased
                you got mentioned on local television about streamathon! community people took sharp notice
                your followers have stayed with you overnight streaming, it is very special bond]
4. giveaway [you have given away different sets of products that you use , it attracted lots of people
            lots of new followers subscribed to win the giveway but they enjoyed your channel
            you lost big money in purchasing items for the giveaway but it was succesful PR move!]

5. sponsor from big company: []            

going above and beyond
** marked will be going above and beyond featues 
    chance of losing or earning will be feature to look upon */