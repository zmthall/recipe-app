<template>
<section class="bg-brand-background-primary/20 py-20">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
    
    <!-- Text Left -->
    <div class="text-center md:text-left md:w-1/2">
      <h1 class="text-4xl font-extrabold text-brand-text-dark mb-4">
        Simplify Meal Planning, Recipe Organization, and Grocery Lists
      </h1>
      <p class="text-lg text-brand-text-medium mb-8 max-w-xl">
        MenuMate is your all-in-one meal planning app — easily organize your favorite recipes, create custom cookbooks, plan weekly meals, and generate grocery shopping lists automatically. Whether you cook for one or many, we help you eat better, save time, and reduce food waste.
      </p>
      <NuxtLink
        to="/register"
        class="inline-block px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:bg-brand-secondary transition"
      >
        Create an Account – It’s Free
      </NuxtLink>
    </div>

    <!-- Image Right -->
    <div class="md:w-1/2 flex justify-center">
      <!-- <NuxtImg
        src="/images/hero-placeholder.png"
        alt="Meal planning dashboard preview"
        class="rounded-xl shadow-lg max-w-full w-[420px] h-auto"
        format="webp"
      /> -->
    </div>

  </div>
</section>
<section class="bg-brand-background-secondary py-20">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

    <!-- Image Left -->
    <div class="md:w-1/2 flex justify-center">
      <NuxtImg
        src="/images/food-table.jpg"
        alt="MenuMate Recipe Editor Screenshot"
        class="rounded-xl shadow-lg max-w-full w-[420px] h-auto"
        format="webp"
      />
    </div>

    <!-- Text Right -->
    <div class="md:w-1/2 space-y-8">
      <h2 class="text-3xl font-extrabold text-brand-text-dark">Designed for the way you cook</h2>

      <div>
        <h3 class="text-xl font-semibold text-brand-primary mb-1">Grab and Go, Wherever You Are</h3>
        <p class="text-brand-text-medium">
          Access your favorite meals on any device — from your phone in the grocery aisle to your tablet on the kitchen counter.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-brand-primary mb-1">Tweak, Tailor, and Make It Yours</h3>
        <p class="text-brand-text-medium">
          Add your own spin to every dish. Whether you're swapping ingredients or adding secret steps, MenuMate lets you personalize recipes with ease.
        </p>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-brand-primary mb-1">Your Kitchen Library, Organized</h3>
        <p class="text-brand-text-medium">
          Say goodbye to scattered screenshots and lost links. With MenuMate, your entire recipe collection is searchable, sortable, and stress-free.
        </p>
      </div>
    </div>

  </div>
</section>
<section class="bg-brand-background-primary/20 py-20">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h2 class="text-3xl font-extrabold text-brand-text-dark mb-12">
      What You Can Do with MenuMate
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left items-stretch">
      
      <!-- Feature 1 -->
      <div class="flex flex-col items-center h-full min-h-[450px]">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-brand-primary mb-2 text-center">Create & Customize Recipes</h3>
          <p class="text-brand-text-medium text-sm text-center">
            Add, categorize, edit, and import recipes from your favorite websites. Personalize your cookbook layout and recipe formatting to match how you cook.
          </p>
        </div>
        <!-- <NuxtImg
          src="/images/add-recipes.gif"
          alt="Create and edit recipes"
          class="rounded-lg shadow-md w-full h-auto"
          format="webp"
        /> -->
      </div>

      <!-- Feature 2 -->
      <div class="flex flex-col items-center h-full min-h-[450px]">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-brand-primary mb-2 text-center">Organize Your Way</h3>
          <p class="text-brand-text-medium text-sm text-center">
            Sort recipes by meal type or build your own categories like “Weeknight Dinners” or “Family BBQ.” Plan every dish, from breakfast to big gatherings.
          </p>
        </div>
        <!-- <NuxtImg
          src="/images/organize-recipes.gif"
          alt="Organize cookbooks"
          class="rounded-lg shadow-md w-full h-auto"
          format="webp"
        /> -->
      </div>

      <!-- Feature 3 -->
      <div class="flex flex-col items-center h-full min-h-[450px]">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-brand-primary mb-2 text-center">Find & Print Recipes</h3>
          <p class="text-brand-text-medium text-sm text-center">
            Search across all your cookbooks by name, ingredient, or category. Quickly print individual recipes or full cookbooks for offline use.
          </p>
        </div>
        <!-- <NuxtImg
          src="/images/find-recipes.gif"
          alt="Search and print recipes"
          class="rounded-lg shadow-md w-full h-auto"
          format="webp"
        /> -->
      </div>

      <!-- Feature 4 -->
      <div class="flex flex-col items-center h-full min-h-[450px]">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-brand-primary mb-2 text-center">Plan Meals with Macros</h3>
          <p class="text-brand-text-medium text-sm text-center">
            Build weekly or monthly meal plans and assign macro goals like protein, carbs, fats, and fiber. Perfect for balanced eating and nutritional planning.
          </p>
        </div>
        <!-- <NuxtImg
          src="/images/plan-meals.gif"
          alt="Meal planning with macros"
          class="rounded-lg shadow-md w-full h-auto"
          format="webp"
        /> -->
      </div>

      <!-- Feature 5 -->
      <div class="flex flex-col items-center h-full min-h-[450px]">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-brand-primary mb-2 text-center">Track with Food Journals</h3>
          <p class="text-brand-text-medium text-sm text-center">
            Quickly log what you eat and how much. Set goals, review food history, and track your health journey right inside MenuMate.
          </p>
        </div>
        <!-- <NuxtImg
          src="/images/food-journal.gif"
          alt="Food journal tracking"
          class="rounded-lg shadow-md w-full h-auto"
          format="webp"
        /> -->
      </div>

      <!-- Feature 6 -->
      <div class="flex flex-col items-center h-full min-h-[450px]">
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-brand-primary mb-2 text-center">Build Smart Grocery Carts</h3>
          <p class="text-brand-text-medium text-sm text-center">
            Use your meal plans to automatically generate grocery lists. Save carts for future reuse and reduce trips to the store with organized prep.
          </p>
        </div>
        <!-- <NuxtImg
          src="/images/grocery-cart.gif"
          alt="Grocery cart feature"
          class="rounded-lg shadow-md w-full h-auto"
          format="webp"
        /> -->
      </div>

    </div>
  </div>
</section>
<section class="bg-brand-background-secondary py-20">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h2 class="text-3xl font-extrabold text-brand-text-dark mb-12">
      Pick Your Perfect Plan
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
      
      <!-- Radish Tier -->
      <div class="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between h-full border border-brand-border">
        <div>
          <h3 class="text-2xl font-bold text-brand-primary mb-2">🥗 Radish</h3>
          <p class="text-brand-text-medium mb-4">Fresh and simple. Great for getting started.</p>
          <ul class="text-left space-y-2 text-brand-text-medium mb-6 max-md:flex max-md:flex-col max-md:items-center max-xs:items-start">
            <li>✅ 2 Cookbooks</li>
            <li>✅ 25 Saved Recipes</li>
            <li>✅ Web Recipe Import</li>
            <li>✅ Meal Planner</li>
          </ul>
        </div>
        <NuxtLink
          to="/register"
          class="bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-secondary transition"
        >
          Start Free
        </NuxtLink>
      </div>

      <!-- Avocado Tier -->
      <div class="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between h-full border-2 border-brand-accent bg-brand-background/10">
        <div class="flex flex-col justify-between h-full">
          <div>
            <h3 class="text-2xl font-bold text-brand-accent mb-2">🥑 Avocado</h3>
            <p class="text-brand-text-medium mb-4">Rich in features, just right for everyday cooking.</p>
            <ul class="text-left space-y-2 text-brand-text-medium mb-6 max-md:flex max-md:flex-col max-md:items-center max-xs:items-start">
              <li>✅ 10 Cookbooks</li>
              <li>✅ Up to 1,000 Recipes</li>
              <li>✅ Web Import & Editor</li>
              <li>✅ Grocery Cart Builder</li>
              <li>✅ Print Recipes & Cookbooks</li>
            </ul>
          </div>
          <div>
            <p class="text-brand-text-dark font-semibold mb-1">$5/mo billed annually</p>
            <p class="text-sm text-brand-text-medium mb-4">or $6/mo monthly</p>
          </div>
        </div>
        <NuxtLink
          to="/register"
          class="bg-brand-accent text-white py-2 px-4 rounded hover:bg-brand-secondary transition"
        >
          Choose Avocado
        </NuxtLink>
      </div>

      <!-- Truffle Tier -->
      <div class="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between h-full border border-brand-border">
        <div class="flex flex-col justify-between h-full">
          <div>
            <h3 class="text-2xl font-bold text-brand-primary mb-2">🍄 Truffle</h3>
            <p class="text-brand-text-medium mb-4">All the flavor, all the power. No limits.</p>
            <ul class="text-left space-y-2 text-brand-text-medium mb-6 max-md:flex max-md:flex-col max-md:items-center max-xs:items-start">
              <li>✅ Unlimited Cookbooks</li>
              <li>✅ Unlimited Recipes</li>
              <li>✅ Everything in Avocado Tier</li>
              <li>✅ Macro Tracking</li>
              <li>✅ Food Journal</li>
              <li>✅ Priority Support & More</li>
            </ul>
          </div>
          <div>
            <p class="text-brand-text-dark font-semibold mb-1">$15/mo billed annually</p>
            <p class="text-sm text-brand-text-medium mb-4">or $17/mo monthly</p>
          </div>
        </div>
        <NuxtLink
          to="/register"
          class="bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-secondary transition"
        >
          Go Pro with Truffle
        </NuxtLink>
      </div>

    </div>
  </div>
</section>
<section class="bg-brand-background-primary/20 py-32">
  <div class="max-w-7xl mx-auto px-6 text-center space-y-6">

    <h2 class="text-2xl font-bold text-brand-text-dark">Questions or Feedback?</h2>
    <p class="text-brand-text-medium max-w-xl mx-auto">
      Have a feature request, found a bug, or just want to say hi? We'd love to hear from you.
    </p>

    <div class="flex justify-center gap-6 flex-wrap mt-4">
      <NuxtLink
        to="/contact"
        class="bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-secondary transition"
      >
        Contact the Developer
      </NuxtLink>

      <NuxtLink
        to="/about"
        class="border-2 border-brand-primary text-brand-primary px-6 py-3 rounded-lg font-medium hover:bg-brand-primary hover:text-white transition"
      >
        Learn About MenuMate
      </NuxtLink>
    </div>

  </div>
</section>
</template>

<script lang="ts" setup></script>

<style></style>
