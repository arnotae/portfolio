<template>
  <div id="sidebar" class="font-heading md:h-screen md:fixed">
    <div class="flex justify-center my-8">
      <img alt="profil" src="../assets/images/photo.jpg" class="w-32 h-32 border-4 border-dark-blue-400">
    </div>
    <div class="relative">
      <div class="name">Arnaud</div>
      <div class="name">Taelman Martini</div>
    </div>
    <div class="mt-8">
      <div class="activity">Lead Développeur Symfony & Rust</div>
      <div class="activity">Scrum master</div>
      <div class="activity">10 ans exp.</div>
    </div>
    <div class="flex justify-center my-8 interests">
      <img v-tooltip="'Développer'" src="../assets/images/working-with-a-laptop.png"/>
      <img v-tooltip="'Faire du squash'" src="../assets/images/racquetball.png"/>
      <img v-tooltip="'Jouer de la guitare'" src="../assets/images/guitar.png"/>
      <img v-tooltip="'Voyager'" src="../assets/images/around-the-globe.png"/>
      <img v-tooltip="'Escalade'" src="../assets/images/climbing.png"/>
      <img v-tooltip="'Caffffééééééé !'" src="../assets/images/cafe.png"/>
    </div>
    <div class="absolute bottom-m45 left-m45">
      <toggle-button
        :color="{checked: '#2900d8', unchecked: '#FFF'}"
        :labels="{checked: 'Dark', unchecked: 'Light'}"
        :width="85"
        :value="theme === 'dark'"
        @change="toggleTheme"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      theme: null,
    };
  },
  beforeMount() {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }
    document.body.setAttribute('data-theme', this.theme);
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', this.theme);
      localStorage.setItem('theme', this.theme);
    },
  },
};
</script>

<style lang="scss" scoped>
  #sidebar {
    @apply border-50 border-inverse flex justify-center flex-col text-on-primary relative bg-back;
  }

  .interests {
    img {
      margin: 3px;
      width: 25px;
      height: 25px;
    }
  }

  .name {
    transition: all 300ms;
    text-shadow: 3px 3px 0 #A999EF;
    @apply text-center text-2xl text-on-back;
    @screen lg {
      @apply whitespace-no-wrap;
    }
    @screen xl {
      @apply text-4xl;
    }
  }

  .activity {
    transition: all 300ms;
    @apply text-center text-on-back;
    @screen sm {
      @apply text-xs;
    }
    @screen md {
      @apply text-sm;
    }
    @screen lg {
      @apply whitespace-no-wrap;
    }
    @screen xl {
      @apply text-base whitespace-no-wrap;
    }
  }
</style>
