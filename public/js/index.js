async function getDataByUser(user){
    
    const info_container = document.querySelector('.info-container');

    const avatar = document.querySelector('.avatar-container img');

    const githubData = await fetch(`https://api.github.com/users/${user.github}`).then((data) => data.json())    

    const {name, login, bio, avatar_url} = githubData;

    const template = `
        <h1>${name}</h1>
        <p>@${login}</p>
        <p>${bio}</p>
    `    
    avatar.src = avatar_url;
    info_container.innerHTML = template;

    document.querySelectorAll('.social-container a').forEach(i => {
        const social = i.dataset.social;        
        const ld = social == 'linkedin' ? 'in/' : '';
        i.href = `https://${social}.com/${ld}${user[social]}`;
    })
};
const user = {
    github: 'nathan-barbosa',
    linkedin: 'barbosa-nathan-4p',
    instagram: 'kaze_neithan',
    facebook: 'nathan.barbosa.56'
}

getDataByUser(user);

const theme = document.querySelector('.toggle')

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})