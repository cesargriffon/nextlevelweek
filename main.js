const LinksSocialMedia = {
    github: "cesargriffon",
    facebook: "cesar.nascimento.9400",
    youtube: "cesargriffon",
    instagram: "cesar.griffon",
    twitter: "cesar.griffon"
}

function changeSocialMediaLinks(){
    for (let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  
    }
}



changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`   
    fetch(url)
    .then(response => response.json())
    .then(data => {
        UserName.textContext = data.name
        userBio.textContext = data.bio
    })
} 


getGitHubProfileInfos()