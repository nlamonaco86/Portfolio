let email = String.fromCodePoint(0x1F4E7) 
let phone = String.fromCodePoint(0x1F4DE)
let wrench = String.fromCodePoint(0x1F527)
let mma = String.fromCodePoint(0x1F3EB)
let gym = String.fromCodePoint(0x1F6B6)

console.log('%cHello.', 'background-color: rgb(191, 223, 144); font-size: 3rem;')
console.log(`%cI'm Nicholas LaMonaco`, 'background-color: rgb(191, 223, 144); font-size: 1.5rem;')
console.log(`%cAn aspiring full-stack web developer from New Jersey.`, 'font-size: 1rem;')
console.log(email + '%c nlamonaco86@gmail.com', 'font-size: 1rem;')
console.log(phone + '%c 908-337-9307', 'font-size: 1rem;')
console.log(`%cAbout`, 'font-size: 2rem;')
console.log(`%cWith a minimalist, lightweight approach, I can create effective, efficient, user-friendly and enjoyable web applications for a wide variety of uses. I learn quickly and I'm not afraid to try new ways of doing things.`, 'font-size: .75rem;')
console.log(`%cLinks`, 'font-size: 2rem;')
console.log(`%chttp://github.com/nlamonaco86`, 'font-size: .8rem;')
console.log(`%chttps://nlamonaco86.github.io/Portfolio/assets/resume.pdf`, 'font-size: .8rem;')
console.log(`%chttps://www.linkedin.com/in/nicholas-la-monaco-98b5501b3/`, 'font-size: .8rem;')
console.log(`%cMy Projects`, 'font-size: 2rem;')
console.log(wrench + `%c http://repairtracker.herokuapp.com`, 'font-size: 1rem;')
console.log(mma + `%c https://guarded-hamlet-46204.herokuapp.com/`, 'font-size: 1rem;')
console.log(gym + `%c https://fullstackfitness.herokuapp.com/`, 'font-size: 1rem;')
console.log(`%cDon't Say Goodbye!`, 'background-color: rgb(191, 223, 144); font-size: 2rem;')
console.log('%c nlamonaco86@gmail.com ' + email, 'background-color: rgb(191, 223, 144); font-size: 1rem;')
console.log('%c 908-337-9307 ' + phone, 'background-color: rgb(191, 223, 144); font-size: 1rem;')