<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Nome</th>
          <th class="text-center">Email</th>
          <th class="text-center">Telefone</th>
          <th class="text-center">configurar</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="aluno in aluno" :key="aluno.id">
          <td>{{ aluno.nome }}</td>
          <td>{{ aluno.email }}</td>
          <td>{{ aluno.telefone }}</td>
          <td>
            <router-link
              :to="{ name: 'Editar Aluno', params: { id: aluno.id } }"
              class="btn btn-primary"
            >
              Editar</router-link
            >
          </td>
          <td>
            <button @click="excluirAluno(aluno.id)" class="btn btn-danger">
              Deletar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alunoservice from "../../services/alunoService";

export default {
  name: "listAluno",
  data() {
    return {
      aluno: [],
    };
  },
  mounted() {
    this.listarTodosAlunos();
  },
  methods: {
    async listarTodosAlunos() {
      const response = await alunoservice.getAlunos();
      this.aluno = response;
    },

    async removerAluno(id) {
      try {
        await alunoservice.removerAluno(this.id);
        // eslint-disable-next-line no-alert
        alert("Delete on Success");
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert("Failed to delete!");
      }
    },
  },
};
</script>
