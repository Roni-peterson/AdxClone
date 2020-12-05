import Api from './Api';

export default {

    // eslint-disable-next-line consistent-return
    async getAluno() {
        try {
            const response = await Api().get('aluno');
            return response.data;
        } catch (error) {
            console.log('Listing Error', error);
        }
    },

    // eslint-disable-next-line consistent-return
    async getAlunoId(id) {
        try {
            const response = await Api().get(`aluno/${id}`);
            return response.data;
        } catch (error) {
            console.log('Listing Error', error);
        }
    },

    // eslint-disable-next-line consistent-return
    async criarNovoAluno(aluno) {
        try {
            const response = await Api().post('/aluno', aluno);
            return response.data;
        } catch (error) {
            console.log('Register Error', error);
        }
    },
    // eslint-disable-next-line consistent-return
    async editarAluno(id, aluno) {
        try {
            const response = await Api().put(`aluno/${id}`, aluno);
            return response.data;
        } catch (error) {
            console.log('Update error', error);
        }
    },

    // eslint-disable-next-line consistent-return
    async excluirAluno(id) {
        try {
            const response = await Api().delete(`aluno/${id}`);
            return response.data;
        } catch (error) {
            console.log('Deletion Error', error);
        }
    },

};