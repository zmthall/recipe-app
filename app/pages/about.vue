<template>
  <section class="bg-white py-20">
    <div class="max-w-5xl mx-auto px-6 space-y-12 text-brand-text-dark">

      <!-- Intro Heading -->
      <div class="text-center">
        <h1 class="text-4xl font-extrabold mb-4">About MenuMate</h1>
        <p class="text-lg text-brand-text-medium max-w-2xl mx-auto">
          Built by a developer who loves food — designed to simplify meal planning, boost productivity, and help you live better.
        </p>
      </div>

      <!-- Section 1: Personal Story -->
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-lg leading-relaxed">
            Hi, I'm a full-stack developer with a deep passion for food, health, and creating tools that make life easier.
            MenuMate started as a personal project — a recipe management and meal planning app that I could rely on daily.
            I built this tool to take control of my nutrition, organize my cooking, and make everyday food decisions less stressful.
          </p>
          <p class="mt-4 text-lg">
            Packed with features like a recipe importer, macro tracker, food journal, and grocery list generator, MenuMate became the backbone of my routine.
            It helped me get back into shape, streamline my eating habits, and bring more order to my day-to-day.
          </p>
        </div>
        <NuxtImg
          src="/images/food-and-tech.jpg"
          alt="Food and technology goes together."
          class="rounded-xl shadow-md"
          width="500"
          format="webp"
        />
      </div>

      <!-- Section 2: Using the App Personally -->
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <NuxtImg
          src="/images/about-using-app.png"
          alt="Using MenuMate on Tablet"
          class="rounded-xl shadow-md"
          width="500"
          format="webp"
        />
        <div>
          <p class="text-lg">
            This isn't just an app I made — it's one I use every single day. I utilize every feature:
          </p>
          <ul class="list-disc pl-5 mt-4 space-y-2 text-brand-text-medium">
            <li>Saving and editing my favorite recipes</li>
            <li>Planning weekly meals to reduce decision fatigue</li>
            <li>Creating organized grocery carts that save time and cut waste</li>
            <li>Tracking macros and journaling food for personal fitness goals</li>
            <li>Reusing saved meal plans for efficient prep and consistency</li>
          </ul>
          <p class="mt-4 text-lg">
            I created MenuMate to serve my life — and I know it can do the same for yours.
          </p>
        </div>
      </div>

      <!-- Section 3: Testimonials -->
      <div>
        <h2 class="text-2xl font-bold mb-4 text-center">What Others Are Saying</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-brand-background/40 p-6 rounded-lg shadow">
            <p class="italic text-brand-text-medium">"I’ve tried a dozen recipe apps and none of them felt complete until MenuMate. It’s got everything — import tools, planning, journaling, and it's beautifully designed."</p>
            <p class="mt-3 font-semibold text-brand-text-dark">– Jamie R., Home Chef</p>
          </div>
          <div class="bg-brand-background/40 p-6 rounded-lg shadow">
            <p class="italic text-brand-text-medium">"MenuMate helped me get organized in a way I didn't know I needed. I use the grocery list builder every week. It saves me hours!"</p>
            <p class="mt-3 font-semibold text-brand-text-dark">– Marcus L., Busy Parent</p>
          </div>
        </div>
      </div>

      <!-- Section 4: Closing CTA -->
      <div class="text-center pt-12">
        <h2 class="text-2xl font-bold mb-4">Let MenuMate Help You Cook Smarter</h2>
        <p class="max-w-xl mx-auto text-brand-text-medium mb-6">
          From tracking your nutrition and planning your meals to saving your grandma’s chili recipe — MenuMate is designed for real life.
        </p>
        <NuxtLink
          to="/register"
          class="bg-brand-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-brand-secondary transition"
        >
          Create an Account
        </NuxtLink>
      </div>

    </div>
  </section>
</template>