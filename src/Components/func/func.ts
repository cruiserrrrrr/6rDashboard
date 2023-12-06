export const generateRandomId = () => {
    const characters = 'QWERTYUIOPASDFGHJKLZXCBVNM0123456789';
    const idLength = Math.floor(Math.random() * 10) + 12; // Длина от 10 до 16 символов
    let randomId = '';

    for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}