<template>
  <div class="container">
    <div class="card">
      <div class="card-header text-center">
        <h3>Editar aluno</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="editarAluno()">
          <div class="form-group">
            <label class="font-weight-bold">Nome</label>
            <input
              type="nome"
              id="nome"
              nome="nome"
              class="form-control"
              v-model="aluno.nome"
            />
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email</label>
            <input
              type="email"
              id="email"
              nome="email"
              class="form-control"
              v-model="aluno.email"
            />
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Telefone</label>
            <input
              type="telefone"
              id="telefone"
              nome="telefone"
              class="form-control"
              v-model="student.phone"
            />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">Editar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import alunoservice from "../../services/alunoService";

export default {
  name: "updateAluno",
  data() {
    return {
      aluno: {},
    };
  },

  mounted() {
    this.getAlunoId();
  },

  methods: {
    async getAlunoId() {
      const { id } = this.$route.params;
      const response = await alunoService.getAlunoId(id);

      this.aluno = { ...response };
    },

    async editarAluno() {
      // Chamada do service passando as propriedades por meio do 'student' (funciona)
      await alunoservice.editarAluno(this.aluno);
      this.$router.push({
        name: "listas",
      });
    },
  },
};
</script>
