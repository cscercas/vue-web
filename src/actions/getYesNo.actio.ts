
const imaginumYes = [
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW9xc290ZnR6Nm40czVnNzgxMGt5Nm9odGt2YW1jdjBxeGd3dWJ3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5LcfoE5u34kfNvW1Oi/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVnZm5qcnQzcDh6eXFyemQwM2l2bHJvaXNocTBqdDdmeWRoMjQ0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MNmyTin5qt5LSXirxd/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa244YWJ3NDQyZWVienI3aXk1dWZpbnZmNTBkNWp6Yzd4b3VjaHJ2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DEnaNFg7szMO7TwNYZ/giphy.gif',
  'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHVmZzNzeWcyYjRzcW43d3pxcnhxaGZnbmxjbTFia3B3aXdoZXJtcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ER63HUlXWQr1UxIgru/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZreTY0cTNwYnRibWI1OW9wenp3NWp5ZGs4dXE0eDF4eHI2aGUwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S3Ot3hZ5bcy8o/giphy.gif', 
];

const imaginumNo = [
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW03enB0cTUxb202dHZ5dmsyenFiZXpocDc2YTM1aHJremZtb245NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vyTnNTrs3wqQ0UIvwE/giphy.gif',
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTJncHpicTZsdGJ2dHY5Ym94cTgyYTk1NXhpY3Vhd20xMjdncm9jNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6Q2KA5ly49368/giphy.gif', 
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnhmMWs2ZnIzNzJzaXV6Y3Q0aWs0aHd2dDg4ejZueW5uemtyZGdpZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nR4L10XlJcSeQ/giphy.gif', 
  'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2JvZ3RxZmU3MDV1bzh3cmprdnZiMnA1dWUzYnprb29vMzdpMXR0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26hkhKd2Cp5WMWU1O/giphy.gif', 
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZ2cnlsdDB6Y2R0anNoM2NzYXFneTYxZWkzaDRqZWhlcDlreGt0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q5cxEJFxWnMVAJCMen/giphy.gif',
];

export interface YesNoTipus {
    answer: string;
    image: string;

}

export const getYesNo = async () => {

    console.log('Generando una respuesta aleatoria...');

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const estYes = Math.random() > 0.5;
    const responsum = estYes ? 'yes' : 'no' ;
    const imaginesArray = estYes ? imaginumYes : imaginumNo;

    const imago = imaginesArray[ Math.floor(Math.random() * imaginesArray.length )];

    const resultatus : YesNoTipus = {
        answer: responsum,
        image: imago
    }

    console.log('Respuesta generada', resultatus);

    return resultatus

}