<template>
  <nav class="continer h-24 backdrop-blur-md w-full text-white sticky flex items-center justify-around">
    <div class="nav-start w-2/12">
      <RouterLink :to="{name: 'dashboard'}">
        <h1 class="logo text-[#00ADB5] font-bold text-2xl">Nexus</h1>
      </RouterLink>
    </div>

    <ul class="nav-center flex w-4/12 items-center justify-evenly">
      <a href="/#about-section">
        <li>About</li>
      </a>
      <a href="/#services-section">
        <li>Services</li>
      </a>
      <a href="/#contact-section">
        <li>Contact</li>
      </a>
    </ul>

    <div class="nav-end h-10 flex w-2/12 items-center justify-end space-x-10">
      <RouterLink :to="{name: 'login'}">
        <button class="bg-[#00ADB5] w-28 h-8 rounded-lg">Login</button>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>