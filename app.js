
//Para poder continuar el video: https://www.youtube.com/watch?v=tBbT7hW5-0w&ab_channel=FaztCode
//El porblema es que directamente no carga lo de la consola

const API_KEY = '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'

async function getCompletion(prompt) {
    const res = fetch('https://api.openai.com/v1/audio/transcriptions', {
        methon: 'POST',
        header: {
            'Content-type' : 'application/json',
            'Authorization' : 'Bearer' + API_KEY
        },
        body:JSON.stringify({
            model: 'text-davinci-003',
            prompt: "dame nombre aleatorio de un lenguaje de programación",
            max_tokens: 10,
            //si XD me deja poner temperature: 0.9,
            temperature: 0.9,
        })
    })

    return await res.JSON()

 
    
}

const prompt = document.querySelector('#prompt')
const button = document.querySelector('#generate')
const output = document.querySelector('#output')

button.addEventListener('click', async () => {
    if (!prompt.value) return
    console.log(promt.value)

})
