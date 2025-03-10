<template>
    <div class="flex items-center justify-between p-5">
      <!-- icons -->
      <div class="flex items-center gap-5">
        <a v-for="(footer, index) in footers" :key="index" :href="footer.url" target="_blank">
          <font-awesome-icon 
            :icon="['fab', footer.icon]" 
            class="w-[25px] h-[25px] sp:w-[20px] sp:h-[20px] hover:text-gray-700" 
          />
        </a>
        <!-- <a href="https://www.facebook.com/jordan.lumapay" target="_blank">
          <font-awesome-icon 
            :icon="['fab', 'facebook']" 
            class="w-[25px] h-[25px] sp:w-[20px] sp:h-[20px] hover:text-gray-700" 
          />
        </a>
        <a :href="messengerLink" target="_blank">
          <font-awesome-icon 
            :icon="['fab', 'fa-facebook-messenger']" 
            class="w-[25px] h-[25px] sp:w-[20px] sp:h-[20px] hover:text-gray-700" 
          />
        </a>
        <a href="">
          <font-awesome-icon 
            :icon="['fab', 'x-twitter']" 
            class="w-[25px] h-[25px] sp:w-[20px] sp:h-[20px] hover:text-gray-700" 
          />
        </a>
        <a href="">
          <font-awesome-icon 
            :icon="['fab', 'tiktok']" 
            class="w-[25px] h-[25px] sp:w-[20px] sp:h-[20px] hover:text-gray-700" 
          />
        </a> -->
      </div>
      <!-- rights -->
      <div class="text-right">
        <div>All Rights Reserved @ {{ today }}</div>
        <div class="ml-5 text-xs">Developed by Uncleloloy</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    footers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      today: new Date().getFullYear(),
      messengerLink:  null,
    };
  },
  mounted() {
    this.messageMe();
  },
  methods: {
    messageMe() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Check if the user is on a mobile device
      if (/android|iphone|ipad|ipod/i.test(userAgent)) {
        this.messengerLink = 'fb-messenger://user-thread/jordan.lumapay'; // Replace with the actual user ID
      } else {
        this.messengerLink = 'https://m.me/jordan.lumapay'; // Replace with the actual user ID
      }
    }
  }
}
</script>