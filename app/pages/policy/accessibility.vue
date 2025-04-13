<template>
  <section class="bg-white py-20">
    <div class="max-w-4xl mx-auto px-6 space-y-10 text-brand-text-dark leading-relaxed">

      <h1 class="text-3xl font-extrabold mb-4">Accessibility Policy</h1>
      <p class="text-sm text-brand-text-medium">Effective date: April 13, 2025</p>

      <p>
        MenuMate is committed to ensuring digital accessibility for all people, including individuals with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA wherever possible and continuously work to improve user experience for everyone.
      </p>

      <h2 class="text-xl font-bold">Our Accessibility Practices</h2>
      <ul class="list-disc pl-6">
        <li>Using semantic HTML to support screen readers</li>
        <li>Ensuring color contrast meets accessibility standards</li>
        <li>Providing keyboard navigability throughout the site</li>
        <li>Supporting scalable text and responsive layout</li>
        <li>Testing pages with accessibility tools and manual audits</li>
      </ul>

      <h2 class="text-xl font-bold">Ongoing Improvements</h2>
      <p>
        Accessibility is an ongoing commitment. We are continually working to enhance our site's usability and accessibility features based on user feedback, evolving technology, and updated guidelines.
      </p>

      <h2 class="text-xl font-bold">Feedback & Assistance</h2>
      <p>
        If you encounter any accessibility barriers while using MenuMate, or if you have suggestions on how we can improve your experience, please fill out the form below or email us directly at
        <a href="mailto:zack@yourmenumate.com" class="text-brand-link underline">zack@yourmenumate.com</a>.
      </p>

      <!-- Accessibility Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6 max-w-2xl mx-auto pt-4">
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium mb-1">Your Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"
          />
        </div>

        <div class="flex flex-col">
          <label for="email" class="text-sm font-medium mb-1">Your Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="p-2 border-2 bg-gray-50/50 border-brand-border/50 hover:border-brand-primary/50 hover:bg-brand-secondary/10 focus:outline-none focus:border-brand-primary/50 focus:bg-brand-secondary/10 rounded-md mb-4"
          />
        </div>

        <div class="flex flex-col">
          <label for="message" class="text-sm font-medium mb-1">Describe the Issue</label>
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
          class="bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-secondary transition"
        >
          Submit Feedback
        </button>
      </form>

    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  alert(`Thank you, ${form.name}. Your accessibility concern has been received.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
/* Optional custom styles */
</style>