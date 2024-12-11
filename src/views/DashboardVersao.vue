<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Menu Lateral -->
      <aside class="w-64 bg-blue-700 flex flex-col items-center py-8">
        <h2 class="text-white text-2xl font-bold mb-10">LuaPratas Dashboard</h2>
        <nav class="flex flex-col gap-6">
          <button
            v-for="(item, index) in menuItems"
            :key="index"
            @click="navigate(item.route)"
            class="w-48 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800 hover:cursor-pointer hover:shadow-lg transition duration-200 text-center font-semibold"
          >
            {{ item.label }}
          </button>
        </nav>
      </aside>
  
      <!-- Conteúdo Principal -->
      <main class="flex-1 p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Bem-vindo ao Dashboard</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Cartões de Resumo -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800">Vendas</h3>
            <p class="text-3xl font-bold text-blue-600 mt-4">R$ 12.000</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800">Receita Líquida</h3>
            <p class="text-3xl font-bold text-green-600 mt-4">R$ 9.000</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800">Receita Bruta</h3>
            <p class="text-3xl font-bold text-orange-600 mt-4">R$ 15.000</p>
          </div>
        </div>
  
        <!-- Gráficos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white shadow-lg rounded-lg p-6">
            <canvas id="salesChart"></canvas>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6">
            <canvas id="platformChart"></canvas>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    data() {
      return {
        menuItems: [
          { label: 'Vendas', route: '/sales' },
          { label: 'Receita Líquida', route: '/net-revenue' },
          { label: 'Receita Bruta', route: '/gross-revenue' },
          { label: 'Plataformas', route: '/platforms' },
          { label: 'Anúncios', route: '/ads' },
          { label: 'Produtos', route: '/products' },
        ],
      };
    },
    methods: {
      navigate(route) {
        this.$router.push(route);
      },
      createSalesChart() {
        const ctx = document.getElementById('salesChart').getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Vendas Mensais',
                data: [1200, 1900, 3000, 5000, 2000, 3000],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
            },
          },
        });
      },
      createPlatformChart() {
        const ctx = document.getElementById('platformChart').getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Shopify', 'Amazon', 'Ebay'],
            datasets: [
              {
                label: 'Plataformas',
                data: [300, 500, 200],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          },
        });
      },
    },
    mounted() {
      this.createSalesChart();
      this.createPlatformChart();
    },
  };
  </script>
  
  <style scoped>
  /* Ajustes de estilo se necessário */
  </style>
  