// Happy coding

// Primeros pasos: carga el fichero JSON y muestra su contenido en la consola. Luego, ya puedes implementar la iteración 1. Para mostrar la fecha legible, puedes buscar por Chat GPT o por Google como convertir un timestamp 

const fileSystem = require('fs');

const content = fileSystem.readFileSync('expenses.json', 'utf-8');

const expenses = JSON.parse(content);

const command = process.argv[2];

switch (command) {
    case '--list':
        console.log('action for list');

        for (const expense of expenses) {
            const dateTime = new Date(expense.timestamp * 1000) ;
            console.log(`#${expense.id} ${dateTime.toLocaleDateString('es-es')} ${expense.concept} ${expense.category} ${expense.amount} €`);
        }

        break;

    case '--help':
        console.log('action for help');
        break;


    default:
        break;
}