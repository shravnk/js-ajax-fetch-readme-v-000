const app = "I don't do much.";

const token = 'c20d3ba0828c74aa4b4fd673416d381b5fa1a4a3'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
