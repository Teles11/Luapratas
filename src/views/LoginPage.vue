<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <!-- Nome da Empresa -->
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">LuaPratas</h2>

      <!-- Formulário de Login -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email ou Usuário</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Digite seu email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-semibold mb-2">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Digite sua senha"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Links de Ação -->
        <div class="flex justify-between text-sm text-blue-500 mb-4">
          <router-link to="/recuperacao-senha" class="hover:underline">Esqueci minha senha</router-link>
          <router-link to="/register" class="hover:underline">Criar conta</router-link>
        </div>

        <!-- Botão de Login -->
        <button type="submit" class="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 mb-6">
          Entrar
        </button>
      </form>

      <!-- Link do Google com imagens lado a lado -->
      <div class="mt-6 text-center">
        <p class="text-sm font-semibold text-black mb-4">Entrar com</p>
        <div class="flex justify-center gap-12">
          <a @click="loginWithGoogle">
            <img
              src="../assets/google.png"
              alt="Google"
              class="w-12 h-12"
            />
          </a>
          <a @click="loginWithGoogle">
            <img
              src="../assets/github.png"
              alt="GitHub"
              class="w-12 h-12"
            />
          </a>
          <a @click="loginWithGoogle">
            <img
              src="../assets/facebook.png"
              alt="Facebook"
              class="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // Aqui você pode adicionar a lógica de autenticação do usuário (verificar se o email e senha são corretos, por exemplo).
      // Caso o login seja bem-sucedido, o usuário será redirecionado para o Dashboard.
      console.log("Login enviado:", this.email, this.password);

      // Após o login, redireciona para o Dashboard.
      this.$router.push({ name: 'dashboard' });
    },
    loginWithGoogle() {
      // Função fictícia de login via Google
      alert("Logado com Google!");

      // Após o login com o Google, redireciona para o Dashboard
      this.$router.push({ name: '' });
    },
  },
};
</script>

<style scoped>
/* Personalização de estilo se necessário */
</style>
