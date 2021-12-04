
cabecalho=document.getElementById('header-container');
//cabecalho=document.querySelector('#header-container');
cabecalho.style.backgroundColor='rgb(0, 176, 105)';

urgente=document.getElementsByClassName('emergency-tasks');
//urgente=document.querySelectorAll('.emergency-tasks');
urgente[0].style.backgroundColor='rgb(255, 159, 132)';

for(urgente_h3 of document.querySelectorAll('.emergency-tasks h3'))
    urgente_h3.style.backgroundColor='rgb(165, 0, 243)';



//naourgente=document.getElementsByClassName('no-emergency-tasks');
naourgente=document.querySelector('.no-emergency-tasks');
naourgente.style.backgroundColor='rgb(249, 219, 94)';

naourgente_h3=document.querySelectorAll('.no-emergency-tasks h3');
for(let i=0;i<naourgente_h3.length;i++)
{
    naourgente_h3[i].style.backgroundColor='rgb(35, 37, 37)';
};

rodape=document.querySelector('footer');
rodape.style.backgroundColor='rgb(0, 53, 51)';







//GABARITO:
/*
const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';
*/