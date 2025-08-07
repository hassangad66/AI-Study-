<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Study Buddy</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gradient-to-b from-blue-50 to-white text-gray-800 dark:from-gray-900 dark:to-black dark:text-gray-100">
    <div class="min-h-screen flex flex-col items-center justify-center px-4">
      <div class="max-w-2xl w-full">

        <!-- Dark mode toggle button -->
        <div class="flex justify-end mb-4">
          <button
            onclick="document.documentElement.classList.toggle('dark')"
            class="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded shadow transition"
          >
            Toggle Dark Mode
          </button>
        </div>

        <!-- Hero Section -->
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            Study 10x Faster with AI
          </h1>
          <p class="text-lg sm:text-xl mb-8">
            Turn any lecture, YouTube video, or PDF into instant quizzes, summaries, and flashcards – in seconds.
          </p>
        </div>

        <!-- Contact Form -->
        <form
          action="https://formspree.io/f/mzzvkepl"
          method="POST"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <label class="block mb-4">
            <span class="text-gray-700 dark:text-gray-300 font-medium">Your Email</span>
            <input
              type="email"
              name="email"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </label>

          <label class="block mb-4">
            <span class="text-gray-700 dark:text-gray-300 font-medium">Message (Optional)</span>
            <textarea
              name="message"
              rows="4"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Let us know how we can support your learning goals or any questions you have..."
            ></textarea>
          </label>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Send
          </button>
        </form>

        <!-- Features Section -->
        <div class="mt-10 text-left">
          <h2 class="text-xl font-semibold mb-2">How it Works</h2>
          <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>Upload a PDF or paste a YouTube URL</li>
            <li>Choose what you want: Summary, Quiz, Flashcards</li>
            <li>Start learning — fast, focused, and personalized</li>
          </ul>

          <h2 class="text-xl font-semibold mt-6 mb-2">Features</h2>
