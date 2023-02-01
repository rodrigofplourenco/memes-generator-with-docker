import memeMaker from "@erickwendel/meme-maker"

const options = {
  image: './img/base.jpg',
  outfile: './img/new.png',
  topText: 'DESCULPA TIO BEN',
  bottomText: 'NÃO CONSIGO LARGAR A PROGRAMAÇAO'
} 

memeMaker(options).then(_ => {
  console.log('Image saved at: ' + options.outfile)
}).catch(error => console.error(error))
 