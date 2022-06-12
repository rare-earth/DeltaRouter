import Router, { navigate } from "./src/router.js";

const router = new Router();

router.on('/', () => {
    console.log('Welcome Home!');
});

router.on('/user/:uid', (params, search) => {
    console.log(params, search)
});

router.on('/404', pathname => console.error(`"${pathname}" Not Found.`));

router.listen();

const routeLinks = document.querySelectorAll('[data-route-link]');

routeLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navigate(e.target.getAttribute('href'));
    });
});