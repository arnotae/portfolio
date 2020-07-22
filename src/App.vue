<template>
  <div id="app" class="grid md:grid-cols-2 font-body bg-primary">
    <side-bar/>
    <resume/>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import Resume from './components/Resume.vue';

export default {
  name: 'App',
  components: {
    SideBar,
    Resume,
  },
  beforeMount() {
    console.log('\n'
      + ' ___          ________  _______   _______            ___    ___ ________  ___  ___     \n'
      + '|\\  \\        |\\   ____\\|\\  ___ \\ |\\  ___ \\          |\\  \\  /  /|\\   __  \\|\\  \\|\\  \\    \n'
      + '\\ \\  \\       \\ \\  \\___|\\ \\   __/|\\ \\   __/|         \\ \\  \\/  / | \\  \\|\\  \\ \\  \\\\\\  \\   \n'
      + ' \\ \\  \\       \\ \\_____  \\ \\  \\_|/_\\ \\  \\_|/__        \\ \\    / / \\ \\  \\\\\\  \\ \\  \\\\\\  \\  \n'
      + '  \\ \\  \\       \\|____|\\  \\ \\  \\_|\\ \\ \\  \\_|\\ \\        \\/  /  /   \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \n'
      + '   \\ \\__\\        ____\\_\\  \\ \\_______\\ \\_______\\     __/  / /      \\ \\_______\\ \\_______\\\n'
      + '    \\|__|       |\\_________\\|_______|\\|_______|    |\\___/ /        \\|_______|\\|_______|\n'
      + '                \\|_________|                       \\|___|/                             \n'
      + '                                                                                       \n'
      + '                                                                                       ');
  },
};
</script>

<style lang="scss">
  #app {
    @apply antialiased;
    transition: all 300ms;
  }
</style>
