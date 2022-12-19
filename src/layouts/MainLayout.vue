<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="tw-bg-white">
        <q-btn
          flat
          dense
          round color="grey"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="tw-text-gray-600">
          WebPage Plumber
        </q-toolbar-title>

        <div>
          <q-btn round class="tw-text-gray-600 tw-mr-2" color="white" icon="apps">

<q-menu fit>
  <q-list style="min-width: 100px">
    <q-item clickable>
      <q-item-section>New tab</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>New incognito tab</q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable>
      <q-item-section>Recent tabs</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>History</q-item-section>
    </q-item>
    <q-item clickable>
      <q-item-section>Downloads</q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable>
      <q-item-section>Settings</q-item-section>
    </q-item>
    <q-separator />
    <q-item clickable>
      <q-item-section>Help &amp; Feedback</q-item-section>
    </q-item>
  </q-list>
</q-menu>
</q-btn>

    <q-btn round>
      <q-avatar size="42px">
        <img src="~/assets/img/tarik-logo.png">
      </q-avatar>
    </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
