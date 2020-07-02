const sounds = ['03437.mp3', '03420.mp3']



export const playRandomAudio = () => {
    const randomAudio = () => sounds[Math.floor(Math.random() * sounds.length)]

    const audio = document.getElementById('audio')
    
    audio.src = './sounds/' + randomAudio()
    
    audio.play()
} 