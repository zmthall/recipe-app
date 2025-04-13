<template>
  <section class="min-h-screen bg-white py-20">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="space-y-6 w-full">
        <h1 class="text-3xl font-extrabold text-brand-text-dark mb-4">Contact Us</h1>

        <div class="flex flex-col">
          <label for="name" class="text-sm font-semibold text-brand-text-dark mb-1">Name</label>
          <input
            type="text"
            id="name"
            autocomplete="given-name"
            v-model="form.name"
            required
            class="p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"
          />
        </div>

        <div class="flex flex-col">
          <label for="email" class="text-sm font-semibold text-brand-text-dark mb-1">Email</label>
          <input
            type="email"
            id="email"
            autocomplete="email"
            v-model="form.email"
            required
            class="p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"
          />
        </div>

        <div class="flex flex-col">
          <label for="message" class="text-sm font-semibold text-brand-text-dark mb-1">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            required
            class="resize-none p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-brand-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-brand-secondary transition"
        >
          Send Message
        </button>
      </form>

      <!-- SEO Content Area -->
      <div class="text-brand-text-medium space-y-6">
        <h2 class="text-2xl font-bold text-brand-text-dark">We're here to help</h2>
        <p>
          Whether you’re new to MenuMate or a seasoned home chef, we want to make your recipe organization and meal planning as smooth as possible.
        </p>
        <p>
          Reach out if you need support, have a feature request, or want to collaborate. We're always looking for feedback to improve our all-in-one recipe manager, grocery list builder, and meal planning app.
        </p>
        <p>
          Our goal is to simplify your cooking life. From building personalized cookbooks and tracking your macros to using our food journal or printing out meal plans — MenuMate makes it easier to cook smarter every day.
        </p>
        <p class="font-semibold text-brand-primary">
          Let us know how we can help you make the most out of MenuMate.
        </p>
      </div>

    </div>
  </section>
</template>

<script lang="ts" setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Simulate form handling or send via email API
  alert(`Thank you, ${form.name}! Your message has been received.`);
  form.name = '';
  form.email = '';
  form.message = '';
};
</script>