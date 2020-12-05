import Vue from 'vue';
import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import { nextTick } from 'vue';

const routes = [
    {
        path: '/criarAluno',
        name: 'Cadastrando',
        component: () => import('../components/criarAluno/cadastroAluno'),
    },
    {
        path: '/listarAluno',
        name: 'Listar Alunos',
        component: () => import('../components/listarAluno/listAluno'),
    },
    {
        path: '/editarAluno/:id',
        name: 'Update Student',
        component: () => import('../components/editarAluno/updateAluno'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.nome) {
        NProgress.start();
    }
    next();
});

router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
