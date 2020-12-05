<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar aluno</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label class="font-weight-bold">Nome:</label>
            <input
              class="form-control"
              type="nome"
              placeholder="Type Your Name"
              v-model="aluno.nome"
              required
            />
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email:</label>
            <input
              class="form-control"
              type="email"
              placeholder="Type Your Email"
              v-model="aluno.email"
              required
            />
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Telefone:</label>
            <input
              class="form-control"
              type="telefone"
              placeholder="Type Your Phone"
              v-model="aluno.telefone"
              required
            />
          </div>
          <div class="form-group">
            <button
              type="submit"
              @click="enviarNovoAluno"
              class="btn btn-primary"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import alunoservice from "../../services/alunoServices";

export default {
  components: {
    name: "cadastroAluno",
  },
  data() {
    return {
      aluno: {
        nome: null,
        email: null,
        telefone: null,
      },
    };
  },
  methods: {
    async enviarNovoAluno() {
      try {
        await alunoservice.criarAluno(this.aluno);
        this.$router.push({
          name: "Listar todos alunos",
        });
      } catch (error) {
        // eslint-disable-next-line
        alert("erro inicial", error);
      }
    },
  },
};
</script>