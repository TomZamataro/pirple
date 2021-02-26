// Homework#3 of Keeping Up With The Javascripts: ES6 by Pirple.com

const isMortal = function(p)
{
  if (men.mortal)
    {
      return men.they.includes(p);
    }
  return ' opsi, my bad, men aren\'t mortal apparently.'
}

let txt;
let men = {
  they: ['socrates', 'aristoteles', 'tom', 'camila'],
  mortal: true,
}
txt = 'All men are mortal\n';
if ((typeof isMortal('Socrates'.toLowerCase()) !== 'string')
    && isMortal('Socrates'.toLowerCase()))
  {
    txt += ' Socrates is a man\n Therefore, Socrates is mortal\n';
  }
else if (typeof isMortal('Socrates'.toLowerCase()) === 'string')
  {
    txt += isMortal('Socrates'.toLowerCase()) + '\n';
  }
else
  {
    txt += ' Socrates isn\'t a man\n Therefore, Socrates isn\'t mortal\n';
  }

// This cake is either vanilla or chocolate (...)

txt += "\n     Extra Credit: This cake is either vanilla or chocolate (...)\n\n";

function cake(isC)
{
  this.isCho = isC
}

let cakes = [new cake(true),
             new cake(false),
             new cake(false),
             new cake(true),]
txt += ' this cake is either vanilla or chocolate\n\n';
for (i = 0; i < cakes.length; i++)
  {
    if (cakes[i].isCho)
      {
        txt += ' cake of index ' + i + ' IS chocolate' +
               ' therefore, this cake IS NOT vanilla';
        if (i !== (cakes.length - 1))
          {
            txt += '\n\n'
          }
      }
    else
      {
        txt += ' cake of index ' + i + ' IS NOT chocolate' +
               ' therefore, this cake IS vanilla';
        if (i !== (cakes.length - 1))
          {
            txt += '\n\n'
          }
      }
  }
console.log(txt)