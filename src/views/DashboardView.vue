<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Menu Lateral -->
    <aside class="w-64 bg-blue-700 shadow-lg">
      <div class="p-6 border-b border-blue-800">
        <h1 class="text-2xl font-bold text-white">LuaPratas</h1>
      </div>
      <nav class="mt-14">
        <ul class="flex flex-col gap-10 px-2">
          <li>
            <button
              class="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800 hover:cursor-pointer hover:shadow-lg transition duration-200 font-semibold"
            >
              Vendas
            </button>
          </li>
          <li>
            <button
              class="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800 hover:cursor-pointer hover:shadow-lg transition duration-200 font-semibold"
            >
              Receita Líquida
            </button>
          </li>
          <li>
            <button
              class="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800 hover:cursor-pointer hover:shadow-lg transition duration-200 font-semibold"
            >
              Receita Bruta
            </button>
          </li>
          <li>
            <button
              class="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800 hover:cursor-pointer hover:shadow-lg transition duration-200 font-semibold"
            >
              Plataformas
            </button>
          </li>
          <li>
            <button
              class="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-800 hover:cursor-pointer hover:shadow-lg transition duration-200 font-semibold"
            >
              Produtos Vendidos
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Conteúdo Principal -->
    <main class="flex-1 p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <!-- Vendas -->
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-bold text-gray-700 mb-4">Vendas Mensais</h2>
          <canvas id="salesChart"></canvas>
        </div>

        <!-- Receita Líquida -->
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-bold text-gray-700 mb-4">Receita Líquida</h2>
          <canvas id="netRevenueChart"></canvas>
        </div>

        <!-- Receita Bruta -->
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-bold text-gray-700 mb-4">Receita Bruta</h2>
          <canvas id="grossRevenueChart"></canvas>
        </div>
      </div>

      <!-- Outras Informações -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        <!-- Plataformas com Resultado -->
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-bold text-gray-700 mb-4">Plataformas com Resultado</h2>
          <canvas id="platformsChart"></canvas>
        </div>

        <!-- Valor Usado em Anúncios -->
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-bold text-gray-700 mb-4">Investimento em Anúncios</h2>
          <canvas id="adSpendChart"></canvas>
        </div>

        <!-- Principais Produtos Vendidos -->
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-bold text-gray-700 mb-4">Top Produtos Vendidos</h2>
          <canvas id="topProductsChart"></canvas>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";

export default {
  name: "DashboardView",
  mounted() {
    // Registrar os componentes do Chart.js
    Chart.register(...registerables);

    // Configuração para os gráficos
    this.createSalesChart();
    this.createNetRevenueChart();
    this.createGrossRevenueChart();
    this.createPlatformsChart();
    this.createAdSpendChart();
    this.createTopProductsChart();
  },
  methods: {
    createSalesChart() {
      const ctx = document.getElementById("salesChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Vendas Mensais",
              data: [100, 150, 200, 170, 250, 300],
              borderColor: "#4CAF50",
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
    createNetRevenueChart() {
      const ctx = document.getElementById("netRevenueChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Receita Líquida",
              data: [1200, 1500, 1800, 2000, 2200, 2400],
              backgroundColor: "#2196F3",
            },
          ],
        },
      });
    },
    createGrossRevenueChart() {
      const ctx = document.getElementById("grossRevenueChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Receita Bruta",
              data: [2000, 2500, 3000, 3500, 4000, 4500],
              backgroundColor: "#FFC107",
            },
          ],
        },
      });
    },
    createPlatformsChart() {
      const ctx = document.getElementById("platformsChart").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Loja Virtual", "Marketplace", "Redes Sociais"],
          datasets: [
            {
              data: [60, 25, 15],
              backgroundColor: ["#FF5722", "#03A9F4", "#8BC34A"],
            },
          ],
        },
      });
    },
    createAdSpendChart() {
      const ctx = document.getElementById("adSpendChart").getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Google Ads", "Facebook Ads", "Instagram Ads"],
          datasets: [
            {
              data: [400, 300, 300],
              backgroundColor: ["#FF9800", "#3F51B5", "#E91E63"],
            },
          ],
        },
      });
    },
    createTopProductsChart() {
      const ctx = document.getElementById("topProductsChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Produto A", "Produto B", "Produto C"],
          datasets: [
            {
              label: "Unidades Vendidas",
              data: [50, 70, 100],
              backgroundColor: "#673AB7",
            },
          ],
        },
      });
    },
  },
};
</script>

<style scoped>
/* Estilização adicional, se necessário */
</style>
