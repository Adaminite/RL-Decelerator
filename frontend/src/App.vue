<script setup>
import { RouterView } from 'vue-router'
import Navbar from '../src/components/Navbar.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
</script>

<template>
  <Navbar/>
  <RouterView />
</template>
